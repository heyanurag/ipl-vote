-- Migration file to insert IPL 2026 matches
INSERT INTO
  matches (
    team1_id,
    team2_id,
    match_date,
    match_time,
    venue,
    status
  )
VALUES
  -- Match 1: March 28, 2026
  (
    'fc6ad44b-da6e-448a-bbe4-5c78cf54cea0', -- Royal Challengers Bengaluru
    'ddfea642-b529-4c81-b8f7-dee2e86d3b03', -- Sunrisers Hyderabad
    '2026-03-28',
    '19:30:00',
    'M Chinnaswamy Stadium, Bangalore',
    'upcoming'
  ),
  -- Match 2: March 29, 2026
  (
    '4ce292db-e2b8-4c4b-b270-3c475e8a79e4', -- Mumbai Indians
    'a94cd4e3-0b5c-42c4-9365-23d0ad5d6048', -- Kolkata Knight Riders
    '2026-03-29',
    '19:30:00',
    'Wankhede Stadium, Mumbai',
    'upcoming'
  ),
  -- Match 3: March 30, 2026
  (
    '1002c8fb-860f-4240-8a3d-628a1daa9fd0', -- Rajasthan Royals
    '10be9628-6706-48bb-908a-3c99f954d06f', -- Chennai Super Kings
    '2026-03-30',
    '19:30:00',
    'ACA Stadium, Guwahati',
    'upcoming'
  ),
  -- Match 4: March 31, 2026
  (
    'e9d05e39-c0de-4fe1-b5ee-f16defd92161', -- Punjab Kings
    '7d33e2fa-0924-4a0d-a6c1-f384e222bd1b', -- Gujarat Titans
    '2026-03-31',
    '19:30:00',
    'New PCA Stadium, Chandigarh',
    'upcoming'
  ),
  -- Match 5: April 1, 2026
  (
    'aae10eef-11d9-476d-bff3-d63a1588001d', -- Lucknow Super Giants
    '41b7787e-e182-4123-9992-2da31d6b7228', -- Delhi Capitals
    '2026-04-01',
    '19:30:00',
    'Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium, Lucknow',
    'upcoming'
  ),
  -- Match 6: April 2, 2026
  (
    'a94cd4e3-0b5c-42c4-9365-23d0ad5d6048', -- Kolkata Knight Riders
    'ddfea642-b529-4c81-b8f7-dee2e86d3b03', -- Sunrisers Hyderabad
    '2026-04-02',
    '19:30:00',
    'Eden Gardens, Kolkata',
    'upcoming'
  ),
  -- Match 7: April 3, 2026
  (
    '10be9628-6706-48bb-908a-3c99f954d06f', -- Chennai Super Kings
    'e9d05e39-c0de-4fe1-b5ee-f16defd92161', -- Punjab Kings
    '2026-04-03',
    '19:30:00',
    'MA Chidambaram Stadium, Chennai',
    'upcoming'
  ),
  -- Match 8: April 4, 2026
  (
    '41b7787e-e182-4123-9992-2da31d6b7228', -- Delhi Capitals
    '4ce292db-e2b8-4c4b-b270-3c475e8a79e4', -- Mumbai Indians
    '2026-04-04',
    '15:30:00',
    'Arun Jaitley Stadium, Delhi',
    'upcoming'
  ),
  -- Match 9: April 4, 2026
  (
    '7d33e2fa-0924-4a0d-a6c1-f384e222bd1b', -- Gujarat Titans
    '1002c8fb-860f-4240-8a3d-628a1daa9fd0', -- Rajasthan Royals
    '2026-04-04',
    '19:30:00',
    'Narendra Modi Stadium, Ahmedabad',
    'upcoming'
  ),
  -- Match 10: April 5, 2026
  (
    'ddfea642-b529-4c81-b8f7-dee2e86d3b03', -- Sunrisers Hyderabad
    'aae10eef-11d9-476d-bff3-d63a1588001d', -- Lucknow Super Giants
    '2026-04-05',
    '15:30:00',
    'Rajiv Gandhi International Stadium, Hyderabad',
    'upcoming'
  ),
  -- Match 11: April 5, 2026
  (
    'fc6ad44b-da6e-448a-bbe4-5c78cf54cea0', -- Royal Challengers Bengaluru
    '10be9628-6706-48bb-908a-3c99f954d06f', -- Chennai Super Kings
    '2026-04-05',
    '19:30:00',
    'M Chinnaswamy Stadium, Bangalore',
    'upcoming'
  ),
  -- Match 12: April 6, 2026
  (
    'a94cd4e3-0b5c-42c4-9365-23d0ad5d6048', -- Kolkata Knight Riders
    'e9d05e39-c0de-4fe1-b5ee-f16defd92161', -- Punjab Kings
    '2026-04-06',
    '19:30:00',
    'Eden Gardens, Kolkata',
    'upcoming'
  ),
  -- Match 13: April 7, 2026
  (
    '1002c8fb-860f-4240-8a3d-628a1daa9fd0', -- Rajasthan Royals
    '4ce292db-e2b8-4c4b-b270-3c475e8a79e4', -- Mumbai Indians
    '2026-04-07',
    '19:30:00',
    'ACA Stadium, Guwahati',
    'upcoming'
  ),
  -- Match 14: April 8, 2026
  (
    '41b7787e-e182-4123-9992-2da31d6b7228', -- Delhi Capitals
    '7d33e2fa-0924-4a0d-a6c1-f384e222bd1b', -- Gujarat Titans
    '2026-04-08',
    '19:30:00',
    'Arun Jaitley Stadium, Delhi',
    'upcoming'
  ),
  -- Match 15: April 9, 2026
  (
    'a94cd4e3-0b5c-42c4-9365-23d0ad5d6048', -- Kolkata Knight Riders
    'aae10eef-11d9-476d-bff3-d63a1588001d', -- Lucknow Super Giants
    '2026-04-09',
    '19:30:00',
    'Eden Gardens, Kolkata',
    'upcoming'
  ),
  -- Match 16: April 10, 2026
  (
    '1002c8fb-860f-4240-8a3d-628a1daa9fd0', -- Rajasthan Royals
    'fc6ad44b-da6e-448a-bbe4-5c78cf54cea0', -- Royal Challengers Bengaluru
    '2026-04-10',
    '19:30:00',
    'ACA Stadium, Guwahati',
    'upcoming'
  ),
  -- Match 17: April 11, 2026
  (
    'e9d05e39-c0de-4fe1-b5ee-f16defd92161', -- Punjab Kings
    'ddfea642-b529-4c81-b8f7-dee2e86d3b03', -- Sunrisers Hyderabad
    '2026-04-11',
    '15:30:00',
    'New PCA Stadium, Chandigarh',
    'upcoming'
  ),
  -- Match 18: April 11, 2026
  (
    '10be9628-6706-48bb-908a-3c99f954d06f', -- Chennai Super Kings
    '41b7787e-e182-4123-9992-2da31d6b7228', -- Delhi Capitals
    '2026-04-11',
    '19:30:00',
    'MA Chidambaram Stadium, Chennai',
    'upcoming'
  ),
  -- Match 19: April 12, 2026
  (
    'aae10eef-11d9-476d-bff3-d63a1588001d', -- Lucknow Super Giants
    '7d33e2fa-0924-4a0d-a6c1-f384e222bd1b', -- Gujarat Titans
    '2026-04-12',
    '15:30:00',
    'Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium, Lucknow',
    'upcoming'
  ),
  -- Match 20: April 12, 2026
  (
    '4ce292db-e2b8-4c4b-b270-3c475e8a79e4', -- Mumbai Indians
    'fc6ad44b-da6e-448a-bbe4-5c78cf54cea0', -- Royal Challengers Bengaluru
    '2026-04-12',
    '19:30:00',
    'Wankhede Stadium, Mumbai',
    'upcoming'
  ),
  -- Match 21: April 13, 2026
  (
    'ddfea642-b529-4c81-b8f7-dee2e86d3b03', -- Sunrisers Hyderabad
    '4ce292db-e2b8-4c4b-b270-3c475e8a79e4', -- Mumbai Indians
    '2026-04-13',
    '19:30:00',
    'Rajiv Gandhi International Stadium, Hyderabad',
    'upcoming'
  ),
  -- Match 22: April 14, 2026
  (
    '7d33e2fa-0924-4a0d-a6c1-f384e222bd1b', -- Gujarat Titans
    'e9d05e39-c0de-4fe1-b5ee-f16defd92161', -- Punjab Kings
    '2026-04-14',
    '19:30:00',
    'Narendra Modi Stadium, Ahmedabad',
    'upcoming'
  ),
  -- Match 23: April 15, 2026
  (
    'a94cd4e3-0b5c-42c4-9365-23d0ad5d6048', -- Kolkata Knight Riders
    '41b7787e-e182-4123-9992-2da31d6b7228', -- Delhi Capitals
    '2026-04-15',
    '19:30:00',
    'Eden Gardens, Kolkata',
    'upcoming'
  ),
  -- Match 24: April 16, 2026
  (
    '10be9628-6706-48bb-908a-3c99f954d06f', -- Chennai Super Kings
    '1002c8fb-860f-4240-8a3d-628a1daa9fd0', -- Rajasthan Royals
    '2026-04-16',
    '19:30:00',
    'MA Chidambaram Stadium, Chennai',
    'upcoming'
  ),
  -- Match 25: April 17, 2026
  (
    'fc6ad44b-da6e-448a-bbe4-5c78cf54cea0', -- Royal Challengers Bengaluru
    'aae10eef-11d9-476d-bff3-d63a1588001d', -- Lucknow Super Giants
    '2026-04-17',
    '19:30:00',
    'M Chinnaswamy Stadium, Bangalore',
    'upcoming'
  ),
  -- Match 26: April 18, 2026
  (
    '4ce292db-e2b8-4c4b-b270-3c475e8a79e4', -- Mumbai Indians
    'e9d05e39-c0de-4fe1-b5ee-f16defd92161', -- Punjab Kings
    '2026-04-18',
    '19:30:00',
    'Wankhede Stadium, Mumbai',
    'upcoming'
  ),
  -- Match 27: April 19, 2026
  (
    '41b7787e-e182-4123-9992-2da31d6b7228', -- Delhi Capitals
    'ddfea642-b529-4c81-b8f7-dee2e86d3b03', -- Sunrisers Hyderabad
    '2026-04-19',
    '15:30:00',
    'Arun Jaitley Stadium, Delhi',
    'upcoming'
  ),
  -- Match 28: April 19, 2026
  (
    '1002c8fb-860f-4240-8a3d-628a1daa9fd0', -- Rajasthan Royals
    '7d33e2fa-0924-4a0d-a6c1-f384e222bd1b', -- Gujarat Titans
    '2026-04-19',
    '19:30:00',
    'Sawai Mansingh Stadium, Jaipur',
    'upcoming'
  ),
  -- Match 29: April 20, 2026
  (
    'aae10eef-11d9-476d-bff3-d63a1588001d', -- Lucknow Super Giants
    'a94cd4e3-0b5c-42c4-9365-23d0ad5d6048', -- Kolkata Knight Riders
    '2026-04-20',
    '19:30:00',
    'Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium, Lucknow',
    'upcoming'
  ),
  -- Match 30: April 21, 2026
  (
    '10be9628-6706-48bb-908a-3c99f954d06f', -- Chennai Super Kings
    'fc6ad44b-da6e-448a-bbe4-5c78cf54cea0', -- Royal Challengers Bengaluru
    '2026-04-21',
    '19:30:00',
    'MA Chidambaram Stadium, Chennai',
    'upcoming'
  ),
  -- Match 31: April 22, 2026
  (
    '7d33e2fa-0924-4a0d-a6c1-f384e222bd1b', -- Gujarat Titans
    '4ce292db-e2b8-4c4b-b270-3c475e8a79e4', -- Mumbai Indians
    '2026-04-22',
    '19:30:00',
    'Narendra Modi Stadium, Ahmedabad',
    'upcoming'
  ),
  -- Match 32: April 23, 2026
  (
    'e9d05e39-c0de-4fe1-b5ee-f16defd92161', -- Punjab Kings
    '41b7787e-e182-4123-9992-2da31d6b7228', -- Delhi Capitals
    '2026-04-23',
    '19:30:00',
    'New PCA Stadium, Chandigarh',
    'upcoming'
  ),
  -- Match 33: April 24, 2026
  (
    'ddfea642-b529-4c81-b8f7-dee2e86d3b03', -- Sunrisers Hyderabad
    'fc6ad44b-da6e-448a-bbe4-5c78cf54cea0', -- Royal Challengers Bengaluru
    '2026-04-24',
    '19:30:00',
    'Rajiv Gandhi International Stadium, Hyderabad',
    'upcoming'
  ),
  -- Match 34: April 25, 2026
  (
    '1002c8fb-860f-4240-8a3d-628a1daa9fd0', -- Rajasthan Royals
    'ddfea642-b529-4c81-b8f7-dee2e86d3b03', -- Sunrisers Hyderabad
    '2026-04-25',
    '19:30:00',
    'Sawai Mansingh Stadium, Jaipur',
    'upcoming'
  ),
  -- Match 35: April 26, 2026
  (
    '41b7787e-e182-4123-9992-2da31d6b7228', -- Delhi Capitals
    '10be9628-6706-48bb-908a-3c99f954d06f', -- Chennai Super Kings
    '2026-04-26',
    '15:30:00',
    'Arun Jaitley Stadium, Delhi',
    'upcoming'
  ),
  -- Match 36: April 26, 2026
  (
    '7d33e2fa-0924-4a0d-a6c1-f384e222bd1b', -- Gujarat Titans
    'a94cd4e3-0b5c-42c4-9365-23d0ad5d6048', -- Kolkata Knight Riders
    '2026-04-26',
    '19:30:00',
    'Narendra Modi Stadium, Ahmedabad',
    'upcoming'
  ),
  -- Match 37: April 27, 2026
  (
    'aae10eef-11d9-476d-bff3-d63a1588001d', -- Lucknow Super Giants
    'e9d05e39-c0de-4fe1-b5ee-f16defd92161', -- Punjab Kings
    '2026-04-27',
    '19:30:00',
    'Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium, Lucknow',
    'upcoming'
  ),
  -- Match 38: April 28, 2026
  (
    '4ce292db-e2b8-4c4b-b270-3c475e8a79e4', -- Mumbai Indians
    '41b7787e-e182-4123-9992-2da31d6b7228', -- Delhi Capitals
    '2026-04-28',
    '19:30:00',
    'Wankhede Stadium, Mumbai',
    'upcoming'
  ),
  -- Match 39: April 29, 2026
  (
    'fc6ad44b-da6e-448a-bbe4-5c78cf54cea0', -- Royal Challengers Bengaluru
    '7d33e2fa-0924-4a0d-a6c1-f384e222bd1b', -- Gujarat Titans
    '2026-04-29',
    '19:30:00',
    'M Chinnaswamy Stadium, Bangalore',
    'upcoming'
  ),
  -- Match 40: April 30, 2026
  (
    'a94cd4e3-0b5c-42c4-9365-23d0ad5d6048', -- Kolkata Knight Riders
    '10be9628-6706-48bb-908a-3c99f954d06f', -- Chennai Super Kings
    '2026-04-30',
    '19:30:00',
    'Eden Gardens, Kolkata',
    'upcoming'
  ),
  -- Match 41: May 1, 2026
  (
    'e9d05e39-c0de-4fe1-b5ee-f16defd92161', -- Punjab Kings
    '1002c8fb-860f-4240-8a3d-628a1daa9fd0', -- Rajasthan Royals
    '2026-05-01',
    '19:30:00',
    'New PCA Stadium, Chandigarh',
    'upcoming'
  ),
  -- Match 42: May 2, 2026
  (
    'ddfea642-b529-4c81-b8f7-dee2e86d3b03', -- Sunrisers Hyderabad
    '41b7787e-e182-4123-9992-2da31d6b7228', -- Delhi Capitals
    '2026-05-02',
    '19:30:00',
    'Rajiv Gandhi International Stadium, Hyderabad',
    'upcoming'
  ),
  -- Match 43: May 3, 2026
  (
    '4ce292db-e2b8-4c4b-b270-3c475e8a79e4', -- Mumbai Indians
    'ddfea642-b529-4c81-b8f7-dee2e86d3b03', -- Sunrisers Hyderabad
    '2026-05-03',
    '15:30:00',
    'Wankhede Stadium, Mumbai',
    'upcoming'
  ),
  -- Match 44: May 3, 2026
  (
    'a94cd4e3-0b5c-42c4-9365-23d0ad5d6048', -- Kolkata Knight Riders
    'fc6ad44b-da6e-448a-bbe4-5c78cf54cea0', -- Royal Challengers Bengaluru
    '2026-05-03',
    '19:30:00',
    'Eden Gardens, Kolkata',
    'upcoming'
  ),
  -- Match 45: May 4, 2026
  (
    '7d33e2fa-0924-4a0d-a6c1-f384e222bd1b', -- Gujarat Titans
    '10be9628-6706-48bb-908a-3c99f954d06f', -- Chennai Super Kings
    '2026-05-04',
    '19:30:00',
    'Narendra Modi Stadium, Ahmedabad',
    'upcoming'
  ),
  -- Match 46: May 5, 2026
  (
    'aae10eef-11d9-476d-bff3-d63a1588001d', -- Lucknow Super Giants
    '4ce292db-e2b8-4c4b-b270-3c475e8a79e4', -- Mumbai Indians
    '2026-05-05',
    '19:30:00',
    'Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium, Lucknow',
    'upcoming'
  ),
  -- Match 47: May 6, 2026
  (
    '1002c8fb-860f-4240-8a3d-628a1daa9fd0', -- Rajasthan Royals
    '41b7787e-e182-4123-9992-2da31d6b7228', -- Delhi Capitals
    '2026-05-06',
    '19:30:00',
    'Sawai Mansingh Stadium, Jaipur',
    'upcoming'
  ),
  -- Match 48: May 7, 2026
  (
    'e9d05e39-c0de-4fe1-b5ee-f16defd92161', -- Punjab Kings
    'a94cd4e3-0b5c-42c4-9365-23d0ad5d6048', -- Kolkata Knight Riders
    '2026-05-07',
    '19:30:00',
    'New PCA Stadium, Chandigarh',
    'upcoming'
  ),
  -- Match 49: May 8, 2026
  (
    'ddfea642-b529-4c81-b8f7-dee2e86d3b03', -- Sunrisers Hyderabad
    '10be9628-6706-48bb-908a-3c99f954d06f', -- Chennai Super Kings
    '2026-05-08',
    '15:30:00',
    'Rajiv Gandhi International Stadium, Hyderabad',
    'upcoming'
  ),
  -- Match 50: May 8, 2026
  (
    'fc6ad44b-da6e-448a-bbe4-5c78cf54cea0', -- Royal Challengers Bengaluru
    '4ce292db-e2b8-4c4b-b270-3c475e8a79e4', -- Mumbai Indians
    '2026-05-08',
    '19:30:00',
    'M Chinnaswamy Stadium, Bangalore',
    'upcoming'
  ),
  -- Match 51: May 9, 2026
  (
    '41b7787e-e182-4123-9992-2da31d6b7228', -- Delhi Capitals
    '1002c8fb-860f-4240-8a3d-628a1daa9fd0', -- Rajasthan Royals
    '2026-05-09',
    '19:30:00',
    'Arun Jaitley Stadium, Delhi',
    'upcoming'
  ),
  -- Match 52: May 10, 2026
  (
    '7d33e2fa-0924-4a0d-a6c1-f384e222bd1b', -- Gujarat Titans
    'aae10eef-11d9-476d-bff3-d63a1588001d', -- Lucknow Super Giants
    '2026-05-10',
    '15:30:00',
    'Narendra Modi Stadium, Ahmedabad',
    'upcoming'
  ),
  -- Match 53: May 10, 2026
  (
    'a94cd4e3-0b5c-42c4-9365-23d0ad5d6048', -- Kolkata Knight Riders
    'e9d05e39-c0de-4fe1-b5ee-f16defd92161', -- Punjab Kings
    '2026-05-10',
    '19:30:00',
    'Eden Gardens, Kolkata',
    'upcoming'
  ),
  -- Match 54: May 11, 2026
  (
    '4ce292db-e2b8-4c4b-b270-3c475e8a79e4', -- Mumbai Indians
    'a94cd4e3-0b5c-42c4-9365-23d0ad5d6048', -- Kolkata Knight Riders
    '2026-05-11',
    '19:30:00',
    'Wankhede Stadium, Mumbai',
    'upcoming'
  ),
  -- Match 55: May 12, 2026
  (
    '10be9628-6706-48bb-908a-3c99f954d06f', -- Chennai Super Kings
    'ddfea642-b529-4c81-b8f7-dee2e86d3b03', -- Sunrisers Hyderabad
    '2026-05-12',
    '19:30:00',
    'MA Chidambaram Stadium, Chennai',
    'upcoming'
  ),
  -- Match 56: May 13, 2026
  (
    'fc6ad44b-da6e-448a-bbe4-5c78cf54cea0', -- Royal Challengers Bengaluru
    '41b7787e-e182-4123-9992-2da31d6b7228', -- Delhi Capitals
    '2026-05-13',
    '19:30:00',
    'M Chinnaswamy Stadium, Bangalore',
    'upcoming'
  ),
  -- Match 57: May 14, 2026
  (
    'aae10eef-11d9-476d-bff3-d63a1588001d', -- Lucknow Super Giants
    '1002c8fb-860f-4240-8a3d-628a1daa9fd0', -- Rajasthan Royals
    '2026-05-14',
    '19:30:00',
    'Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium, Lucknow',
    'upcoming'
  ),
  -- Match 58: May 15, 2026
  (
    'e9d05e39-c0de-4fe1-b5ee-f16defd92161', -- Punjab Kings
    '4ce292db-e2b8-4c4b-b270-3c475e8a79e4', -- Mumbai Indians
    '2026-05-15',
    '19:30:00',
    'New PCA Stadium, Chandigarh',
    'upcoming'
  ),
  -- Match 59: May 16, 2026
  (
    '7d33e2fa-0924-4a0d-a6c1-f384e222bd1b', -- Gujarat Titans
    'fc6ad44b-da6e-448a-bbe4-5c78cf54cea0', -- Royal Challengers Bengaluru
    '2026-05-16',
    '19:30:00',
    'Narendra Modi Stadium, Ahmedabad',
    'upcoming'
  ),
  -- Match 60: May 17, 2026
  (
    'a94cd4e3-0b5c-42c4-9365-23d0ad5d6048', -- Kolkata Knight Riders
    '7d33e2fa-0924-4a0d-a6c1-f384e222bd1b', -- Gujarat Titans
    '2026-05-17',
    '15:30:00',
    'Eden Gardens, Kolkata',
    'upcoming'
  ),
  -- Match 61: May 17, 2026
  (
    'ddfea642-b529-4c81-b8f7-dee2e86d3b03', -- Sunrisers Hyderabad
    'e9d05e39-c0de-4fe1-b5ee-f16defd92161', -- Punjab Kings
    '2026-05-17',
    '19:30:00',
    'Rajiv Gandhi International Stadium, Hyderabad',
    'upcoming'
  ),
  -- Match 62: May 18, 2026
  (
    '41b7787e-e182-4123-9992-2da31d6b7228', -- Delhi Capitals
    '10be9628-6706-48bb-908a-3c99f954d06f', -- Chennai Super Kings
    '2026-05-18',
    '19:30:00',
    'Arun Jaitley Stadium, Delhi',
    'upcoming'
  ),
  -- Match 63: May 19, 2026
  (
    '1002c8fb-860f-4240-8a3d-628a1daa9fd0', -- Rajasthan Royals
    'ddfea642-b529-4c81-b8f7-dee2e86d3b03', -- Sunrisers Hyderabad
    '2026-05-19',
    '19:30:00',
    'Sawai Mansingh Stadium, Jaipur',
    'upcoming'
  ),
  -- Match 64: May 20, 2026
  (
    '4ce292db-e2b8-4c4b-b270-3c475e8a79e4', -- Mumbai Indians
    'aae10eef-11d9-476d-bff3-d63a1588001d', -- Lucknow Super Giants
    '2026-05-20',
    '19:30:00',
    'Wankhede Stadium, Mumbai',
    'upcoming'
  ),
  -- Match 65: May 21, 2026
  (
    'fc6ad44b-da6e-448a-bbe4-5c78cf54cea0', -- Royal Challengers Bengaluru
    'a94cd4e3-0b5c-42c4-9365-23d0ad5d6048', -- Kolkata Knight Riders
    '2026-05-21',
    '19:30:00',
    'M Chinnaswamy Stadium, Bangalore',
    'upcoming'
  ),
  -- Match 66: May 22, 2026
  (
    '41b7787e-e182-4123-9992-2da31d6b7228', -- Delhi Capitals
    '7d33e2fa-0924-4a0d-a6c1-f384e222bd1b', -- Gujarat Titans
    '2026-05-22',
    '19:30:00',
    'Arun Jaitley Stadium, Delhi',
    'upcoming'
  ),
  -- Match 67: May 23, 2026
  (
    'e9d05e39-c0de-4fe1-b5ee-f16defd92161', -- Punjab Kings
    '10be9628-6706-48bb-908a-3c99f954d06f', -- Chennai Super Kings
    '2026-05-23',
    '19:30:00',
    'New PCA Stadium, Chandigarh',
    'upcoming'
  ),
  -- Match 68: May 24, 2026
  (
    'ddfea642-b529-4c81-b8f7-dee2e86d3b03', -- Sunrisers Hyderabad
    '1002c8fb-860f-4240-8a3d-628a1daa9fd0', -- Rajasthan Royals
    '2026-05-24',
    '15:30:00',
    'Rajiv Gandhi International Stadium, Hyderabad',
    'upcoming'
  ),
  -- Match 69: May 24, 2026
  (
    '4ce292db-e2b8-4c4b-b270-3c475e8a79e4', -- Mumbai Indians
    '7d33e2fa-0924-4a0d-a6c1-f384e222bd1b', -- Gujarat Titans
    '2026-05-24',
    '19:30:00',
    'Wankhede Stadium, Mumbai',
    'upcoming'
  ),
  -- Match 70: May 25, 2026
  (
    'fc6ad44b-da6e-448a-bbe4-5c78cf54cea0', -- Royal Challengers Bengaluru
    'aae10eef-11d9-476d-bff3-d63a1588001d', -- Lucknow Super Giants
    '2026-05-25',
    '19:30:00',
    'M Chinnaswamy Stadium, Bangalore',
    'upcoming'
  ),
  -- Match 71: May 25, 2026
  (
    'a94cd4e3-0b5c-42c4-9365-23d0ad5d6048', -- Kolkata Knight Riders
    '10be9628-6706-48bb-908a-3c99f954d06f', -- Chennai Super Kings
    '2026-05-25',
    '19:30:00',
    'Eden Gardens, Kolkata',
    'upcoming'
  );
