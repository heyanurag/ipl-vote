-- Add policy to allow users to update their own votes for today's matches
CREATE POLICY "users can update own votes" ON votes
FOR UPDATE USING (
    auth.uid() = user_id AND
    EXISTS (
        SELECT 1 FROM matches
        WHERE id = match_id AND match_date = (NOW() AT TIME ZONE 'Asia/Kolkata')::date
    )
); 