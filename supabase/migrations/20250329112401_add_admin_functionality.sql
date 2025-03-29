-- Add is_admin column to profiles table
ALTER TABLE profiles ADD COLUMN is_admin BOOLEAN DEFAULT false;

-- Create a function to check if a user is an admin
CREATE OR REPLACE FUNCTION is_admin(user_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT is_admin FROM profiles WHERE id = user_id;
$$;

-- Create a function for admins to update match results
CREATE OR REPLACE FUNCTION admin_update_match_result(
  p_match_id UUID,
  p_winner_id UUID,
  p_status TEXT DEFAULT 'completed'
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_is_admin BOOLEAN;
BEGIN
  -- Check if the current user is an admin
  SELECT is_admin INTO v_is_admin FROM profiles WHERE id = auth.uid();

  IF v_is_admin IS NOT TRUE THEN
    RAISE EXCEPTION 'Only administrators can update match results';
  END IF;

  -- Update the match
  UPDATE matches
  SET
    winner_id = p_winner_id,
    status = p_status
  WHERE id = p_match_id;

  RETURN FOUND;
END;
$$;

-- Create a policy to allow admins to update matches
CREATE POLICY "admins can update matches" ON matches
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND is_admin = true
    )
  );
