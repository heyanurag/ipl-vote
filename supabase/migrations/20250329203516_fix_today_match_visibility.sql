CREATE OR REPLACE FUNCTION get_todays_matches()
RETURNS SETOF matches
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT * FROM matches WHERE match_date = (CURRENT_DATE AT TIME ZONE 'UTC' AT TIME ZONE 'Asia/Kolkata')::date;
$$;

-- fix profiles reference
ALTER TABLE profiles
DROP CONSTRAINT profiles_id_fkey,
ADD CONSTRAINT profiles_id_fkey
  FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE;

-- fix votes reference
ALTER TABLE votes
DROP CONSTRAINT votes_user_id_fkey,
ADD CONSTRAINT votes_user_id_fkey
  FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;
