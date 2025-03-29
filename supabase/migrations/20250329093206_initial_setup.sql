-- enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- teams table
CREATE TABLE teams (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL UNIQUE,
  short_name TEXT NOT NULL UNIQUE,
  logo_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- matches table
CREATE TABLE matches (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  team1_id UUID REFERENCES teams(id) NOT NULL,
  team2_id UUID REFERENCES teams(id) NOT NULL,
  match_date DATE NOT NULL,
  match_time TIME NOT NULL,
  venue TEXT,
  status TEXT DEFAULT 'upcoming', -- 'upcoming', 'live', 'completed'
  winner_id UUID REFERENCES teams(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT different_teams CHECK (team1_id != team2_id)
);

-- profiles table (extends auth.users)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  username TEXT UNIQUE NOT NULL,
  data JSONB DEFAULT '{}'::jsonb,
  total_correct_votes INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- votes table
CREATE TABLE votes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  match_id UUID REFERENCES matches(id) NOT NULL,
  team_id UUID REFERENCES teams(id) NOT NULL,
  is_correct BOOLEAN DEFAULT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT one_vote_per_user_per_match UNIQUE (user_id, match_id)
);

-- enable RLS
ALTER TABLE teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE matches ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE votes ENABLE ROW LEVEL SECURITY;

-- RLS policies
CREATE POLICY "teams viewable by all" ON teams FOR SELECT USING (true);

CREATE POLICY "matches viewable by all" ON matches FOR SELECT USING (true);

CREATE POLICY "profiles viewable by all" ON profiles FOR SELECT USING (true);
CREATE POLICY "users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "votes viewable by all" ON votes FOR SELECT USING (true);
CREATE POLICY "users can insert own votes" ON votes
  FOR INSERT WITH CHECK (
    auth.uid() = user_id AND
    EXISTS (
      SELECT 1 FROM matches
      WHERE id = match_id AND match_date = CURRENT_DATE
    )
  );

-- create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, username, data)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'username', 'user_' || substr(NEW.id::text, 1, 8)),
    COALESCE(NEW.raw_user_meta_data->'data', '{}'::jsonb)
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- update vote correctness when match completes
CREATE OR REPLACE FUNCTION update_vote_correctness()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.winner_id IS NOT NULL AND OLD.winner_id IS NULL THEN
    -- update votes' correctness
    UPDATE votes
    SET is_correct = (team_id = NEW.winner_id)
    WHERE match_id = NEW.id;

    -- update user scores
    UPDATE profiles
    SET total_correct_votes = total_correct_votes + 1
    WHERE id IN (
      SELECT user_id FROM votes
      WHERE match_id = NEW.id AND team_id = NEW.winner_id
    );
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER on_match_completed
  AFTER UPDATE ON matches
  FOR EACH ROW
  WHEN (NEW.winner_id IS NOT NULL AND OLD.winner_id IS NULL)
  EXECUTE FUNCTION update_vote_correctness();

-- function for today's matches
CREATE OR REPLACE FUNCTION get_todays_matches()
RETURNS SETOF matches
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT * FROM matches WHERE match_date = CURRENT_DATE;
$$;

-- function to get leaderboard
CREATE OR REPLACE FUNCTION get_leaderboard(limit_count INT DEFAULT 50)
RETURNS TABLE (
  user_id UUID,
  username TEXT,
  correct_votes INT,
  total_votes BIGINT
)
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT
    p.id,
    p.username,
    p.total_correct_votes,
    COUNT(v.id)::BIGINT
  FROM profiles p
  LEFT JOIN votes v ON p.id = v.user_id
  GROUP BY p.id, p.username, p.total_correct_votes
  ORDER BY p.total_correct_votes DESC, COUNT(v.id) DESC
  LIMIT limit_count;
$$;
