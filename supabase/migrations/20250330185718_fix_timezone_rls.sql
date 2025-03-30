
CREATE OR REPLACE FUNCTION get_todays_matches()
RETURNS SETOF matches
LANGUAGE sql
SECURITY DEFINER
AS $$
    SELECT * FROM matches WHERE match_date = (NOW() AT TIME ZONE 'Asia/Kolkata')::date;
$$;


-- Update the policy to allow users to insert their own votes only for today's matches
DROP POLICY "users can insert own votes" ON votes;

CREATE POLICY "users can insert own votes" ON votes
FOR INSERT WITH CHECK (
    auth.uid() = user_id AND
        EXISTS (
            SELECT 1 FROM matches
            WHERE id = match_id AND match_date = (NOW() AT TIME ZONE 'Asia/Kolkata')::date
        )
);
