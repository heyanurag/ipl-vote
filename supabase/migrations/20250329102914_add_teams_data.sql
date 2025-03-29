INSERT INTO
  teams (id, name, short_name, logo_url)
VALUES
  (
    '10be9628-6706-48bb-908a-3c99f954d06f',
    'Chennai Super Kings',
    'CSK',
    'https://fodqgbjjsqhqpwjctmjw.supabase.co/storage/v1/object/public/public-assets/teams/Chennai_Super_Kings_Logo.svg'
  ),
  (
    '41b7787e-e182-4123-9992-2da31d6b7228',
    'Delhi Capitals',
    'DC',
    'https://fodqgbjjsqhqpwjctmjw.supabase.co/storage/v1/object/public/public-assets/teams/Delhi_Capitals.svg'
  ),
  (
    '7d33e2fa-0924-4a0d-a6c1-f384e222bd1b',
    'Gujarat Titans',
    'GT',
    'https://fodqgbjjsqhqpwjctmjw.supabase.co/storage/v1/object/public/public-assets/teams/Gujarat_Titans_Logo.svg'
  ),
  (
    'a94cd4e3-0b5c-42c4-9365-23d0ad5d6048',
    'Kolkata Knight Riders',
    'KKR',
    'https://fodqgbjjsqhqpwjctmjw.supabase.co/storage/v1/object/public/public-assets/teams/Kolkata_Knight_Riders_Logo.svg'
  ),
  (
    'aae10eef-11d9-476d-bff3-d63a1588001d',
    'Lucknow Super Giants',
    'LSG',
    'https://fodqgbjjsqhqpwjctmjw.supabase.co/storage/v1/object/public/public-assets/teams/Lucknow_Super_Giants_IPL_Logo.svg'
  ),
  (
    '4ce292db-e2b8-4c4b-b270-3c475e8a79e4',
    'Mumbai Indians',
    'MI',
    'https://fodqgbjjsqhqpwjctmjw.supabase.co/storage/v1/object/public/public-assets/teams/Mumbai_Indians_Logo.svg'
  ),
  (
    'e9d05e39-c0de-4fe1-b5ee-f16defd92161',
    'Punjab Kings',
    'PBKS',
    'https://fodqgbjjsqhqpwjctmjw.supabase.co/storage/v1/object/public/public-assets/teams/Punjab_Kings_Logo.svg'
  ),
  (
    '1002c8fb-860f-4240-8a3d-628a1daa9fd0',
    'Rajasthan Royals',
    'RR',
    'https://fodqgbjjsqhqpwjctmjw.supabase.co/storage/v1/object/public/public-assets/teams/Rajasthan_Royals_Logo.svg'
  ),
  (
    'fc6ad44b-da6e-448a-bbe4-5c78cf54cea0',
    'Royal Challengers Bangalore',
    'RCB',
    'https://fodqgbjjsqhqpwjctmjw.supabase.co/storage/v1/object/public/public-assets/teams/Royal_Challengers_Bengaluru_Logo.svg'
  ),
  (
    'ddfea642-b529-4c81-b8f7-dee2e86d3b03',
    'Sunrisers Hyderabad',
    'SRH',
    'https://fodqgbjjsqhqpwjctmjw.supabase.co/storage/v1/object/public/public-assets/teams/Sunrisers_Hyderabad_Logo.svg'
  ) ON CONFLICT DO NOTHING;

-- CREATE OR REPLACE FUNCTION generate_sample_matches()
-- RETURNS void LANGUAGE plpgsql AS $$
-- DECLARE
--   team_ids UUID[];
--   team1_id UUID;
--   team2_id UUID;
--   current_date_var DATE := CURRENT_DATE;
-- BEGIN
--   SELECT array_agg(id) INTO team_ids FROM teams;
--   -- create a match for today
--   SELECT team_ids[floor(random() * array_length(team_ids, 1) + 1)] INTO team1_id;
--   SELECT team_ids[floor(random() * array_length(team_ids, 1) + 1)] INTO team2_id;
--   WHILE team1_id = team2_id LOOP
--     SELECT team_ids[floor(random() * array_length(team_ids, 1) + 1)] INTO team2_id;
--   END LOOP;
--   INSERT INTO matches (team1_id, team2_id, match_date, match_time, venue)
--   VALUES (team1_id, team2_id, current_date_var, '19:30:00', 'Wankhede Stadium, Mumbai');
--   -- create a match for tomorrow
--   SELECT team_ids[floor(random() * array_length(team_ids, 1) + 1)] INTO team1_id;
--   SELECT team_ids[floor(random() * array_length(team_ids, 1) + 1)] INTO team2_id;
--   WHILE team1_id = team2_id LOOP
--     SELECT team_ids[floor(random() * array_length(team_ids, 1) + 1)] INTO team2_id;
--   END LOOP;
--   INSERT INTO matches (team1_id, team2_id, match_date, match_time, venue)
--   VALUES (team1_id, team2_id, current_date_var + 1, '15:30:00', 'MA Chidambaram Stadium, Chennai');
-- END;
-- $$;
-- SELECT generate_sample_matches();
