-- Migration file to insert IPL 2025 matches
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
  -- Match 1: March 22, 2025
  (
    'a94cd4e3-0b5c-42c4-9365-23d0ad5d6048', -- Kolkata Knight Riders
    'fc6ad44b-da6e-448a-bbe4-5c78cf54cea0', -- Royal Challengers Bangalore
    '2025-03-22',
    '19:30:00',
    'Eden Gardens, Kolkata',
    'upcoming'
  ),
  -- Match 2: March 23, 2025
  (
    'ddfea642-b529-4c81-b8f7-dee2e86d3b03', -- Sunrisers Hyderabad
    '1002c8fb-860f-4240-8a3d-628a1daa9fd0', -- Rajasthan Royals
    '2025-03-23',
    '15:30:00',
    'Rajiv Gandhi International Stadium, Hyderabad',
    'upcoming'
  ),
  -- Match 3: March 23, 2025
  (
    '10be9628-6706-48bb-908a-3c99f954d06f', -- Chennai Super Kings
    '4ce292db-e2b8-4c4b-b270-3c475e8a79e4', -- Mumbai Indians
    '2025-03-23',
    '19:30:00',
    'MA Chidambaram Stadium, Chennai',
    'upcoming'
  ),
  -- Match 4: March 24, 2025
  (
    '41b7787e-e182-4123-9992-2da31d6b7228', -- Delhi Capitals
    'aae10eef-11d9-476d-bff3-d63a1588001d', -- Lucknow Super Giants
    '2025-03-24',
    '19:30:00',
    'Dr YS Rajasekhara Reddy ACA-VDCA Cricket Stadium, Visakhapatnam',
    'upcoming'
  ),
  -- Match 5: March 25, 2025
  (
    '7d33e2fa-0924-4a0d-a6c1-f384e222bd1b', -- Gujarat Titans
    'e9d05e39-c0de-4fe1-b5ee-f16defd92161', -- Punjab Kings
    '2025-03-25',
    '19:30:00',
    'Narendra Modi Stadium, Ahmedabad',
    'upcoming'
  ),
  -- Match 6: March 26, 2025
  (
    '1002c8fb-860f-4240-8a3d-628a1daa9fd0', -- Rajasthan Royals
    'a94cd4e3-0b5c-42c4-9365-23d0ad5d6048', -- Kolkata Knight Riders
    '2025-03-26',
    '19:30:00',
    'ACA Stadium, Guwahati',
    'upcoming'
  ),
  -- Match 7: March 27, 2025
  (
    'ddfea642-b529-4c81-b8f7-dee2e86d3b03', -- Sunrisers Hyderabad
    'aae10eef-11d9-476d-bff3-d63a1588001d', -- Lucknow Super Giants
    '2025-03-27',
    '19:30:00',
    'Rajiv Gandhi International Stadium, Hyderabad',
    'upcoming'
  ),
  -- Match 8: March 28, 2025
  (
    '10be9628-6706-48bb-908a-3c99f954d06f', -- Chennai Super Kings
    'fc6ad44b-da6e-448a-bbe4-5c78cf54cea0', -- Royal Challengers Bangalore
    '2025-03-28',
    '19:30:00',
    'MA Chidambaram Stadium, Chennai',
    'upcoming'
  ),
  -- Match 9: March 29, 2025
  (
    '7d33e2fa-0924-4a0d-a6c1-f384e222bd1b', -- Gujarat Titans
    '4ce292db-e2b8-4c4b-b270-3c475e8a79e4', -- Mumbai Indians
    '2025-03-29',
    '19:30:00',
    'Narendra Modi Stadium, Ahmedabad',
    'upcoming'
  ),
  -- Match 10: March 30, 2025
  (
    '41b7787e-e182-4123-9992-2da31d6b7228', -- Delhi Capitals
    'ddfea642-b529-4c81-b8f7-dee2e86d3b03', -- Sunrisers Hyderabad
    '2025-03-30',
    '15:30:00',
    'Dr YS Rajasekhara Reddy ACA-VDCA Cricket Stadium, Visakhapatnam',
    'upcoming'
  ),
  -- Match 11: March 30, 2025
  (
    '1002c8fb-860f-4240-8a3d-628a1daa9fd0', -- Rajasthan Royals
    '10be9628-6706-48bb-908a-3c99f954d06f', -- Chennai Super Kings
    '2025-03-30',
    '19:30:00',
    'ACA Stadium, Guwahati',
    'upcoming'
  ),
  -- Match 12: March 31, 2025
  (
    '4ce292db-e2b8-4c4b-b270-3c475e8a79e4', -- Mumbai Indians
    'a94cd4e3-0b5c-42c4-9365-23d0ad5d6048', -- Kolkata Knight Riders
    '2025-03-31',
    '19:30:00',
    'Wankhede Stadium, Mumbai',
    'upcoming'
  ),
  -- Match 13: April 1, 2025
  (
    'aae10eef-11d9-476d-bff3-d63a1588001d', -- Lucknow Super Giants
    'e9d05e39-c0de-4fe1-b5ee-f16defd92161', -- Punjab Kings
    '2025-04-01',
    '19:30:00',
    'Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium, Lucknow',
    'upcoming'
  ),
  -- Match 14: April 2, 2025
  (
    'fc6ad44b-da6e-448a-bbe4-5c78cf54cea0', -- Royal Challengers Bangalore
    '7d33e2fa-0924-4a0d-a6c1-f384e222bd1b', -- Gujarat Titans
    '2025-04-02',
    '19:30:00',
    'M Chinnaswamy Stadium, Bangalore',
    'upcoming'
  ),
  -- Match 15: April 3, 2025
  (
    'a94cd4e3-0b5c-42c4-9365-23d0ad5d6048', -- Kolkata Knight Riders
    'ddfea642-b529-4c81-b8f7-dee2e86d3b03', -- Sunrisers Hyderabad
    '2025-04-03',
    '19:30:00',
    'Eden Gardens, Kolkata',
    'upcoming'
  ),
  -- Match 16: April 4, 2025
  (
    'aae10eef-11d9-476d-bff3-d63a1588001d', -- Lucknow Super Giants
    '4ce292db-e2b8-4c4b-b270-3c475e8a79e4', -- Mumbai Indians
    '2025-04-04',
    '19:30:00',
    'Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium, Lucknow',
    'upcoming'
  ),
  -- Match 17: April 5, 2025
  (
    '10be9628-6706-48bb-908a-3c99f954d06f', -- Chennai Super Kings
    '41b7787e-e182-4123-9992-2da31d6b7228', -- Delhi Capitals
    '2025-04-05',
    '15:30:00',
    'MA Chidambaram Stadium, Chennai',
    'upcoming'
  ),
  -- Match 18: April 5, 2025
  (
    'e9d05e39-c0de-4fe1-b5ee-f16defd92161', -- Punjab Kings
    '1002c8fb-860f-4240-8a3d-628a1daa9fd0', -- Rajasthan Royals
    '2025-04-05',
    '19:30:00',
    'New PCA Stadium, Mohali',
    'upcoming'
  ),
  -- Match 19: April 6, 2025
  (
    'a94cd4e3-0b5c-42c4-9365-23d0ad5d6048', -- Kolkata Knight Riders
    'aae10eef-11d9-476d-bff3-d63a1588001d', -- Lucknow Super Giants
    '2025-04-06',
    '15:30:00',
    'Eden Gardens, Kolkata',
    'upcoming'
  ),
  -- Match 20: April 6, 2025
  (
    'ddfea642-b529-4c81-b8f7-dee2e86d3b03', -- Sunrisers Hyderabad
    '7d33e2fa-0924-4a0d-a6c1-f384e222bd1b', -- Gujarat Titans
    '2025-04-06',
    '19:30:00',
    'Rajiv Gandhi International Stadium, Hyderabad',
    'upcoming'
  ),
  -- Match 21: April 7, 2025
  (
    '4ce292db-e2b8-4c4b-b270-3c475e8a79e4', -- Mumbai Indians
    'fc6ad44b-da6e-448a-bbe4-5c78cf54cea0', -- Royal Challengers Bangalore
    '2025-04-07',
    '19:30:00',
    'Wankhede Stadium, Mumbai',
    'upcoming'
  ),
  -- Match 22: April 8, 2025
  (
    'e9d05e39-c0de-4fe1-b5ee-f16defd92161', -- Punjab Kings
    '10be9628-6706-48bb-908a-3c99f954d06f', -- Chennai Super Kings
    '2025-04-08',
    '19:30:00',
    'New PCA Stadium, Mohali',
    'upcoming'
  ),
  -- Match 23: April 9, 2025
  (
    '7d33e2fa-0924-4a0d-a6c1-f384e222bd1b', -- Gujarat Titans
    '1002c8fb-860f-4240-8a3d-628a1daa9fd0', -- Rajasthan Royals
    '2025-04-09',
    '19:30:00',
    'Narendra Modi Stadium, Ahmedabad',
    'upcoming'
  ),
  -- Match 24: April 10, 2025
  (
    'fc6ad44b-da6e-448a-bbe4-5c78cf54cea0', -- Royal Challengers Bangalore
    '41b7787e-e182-4123-9992-2da31d6b7228', -- Delhi Capitals
    '2025-04-10',
    '19:30:00',
    'M Chinnaswamy Stadium, Bangalore',
    'upcoming'
  ),
  -- Match 25: April 11, 2025
  (
    '10be9628-6706-48bb-908a-3c99f954d06f', -- Chennai Super Kings
    'a94cd4e3-0b5c-42c4-9365-23d0ad5d6048', -- Kolkata Knight Riders
    '2025-04-11',
    '19:30:00',
    'MA Chidambaram Stadium, Chennai',
    'upcoming'
  ),
  -- Match 26: April 12, 2025
  (
    'aae10eef-11d9-476d-bff3-d63a1588001d', -- Lucknow Super Giants
    '7d33e2fa-0924-4a0d-a6c1-f384e222bd1b', -- Gujarat Titans
    '2025-04-12',
    '15:30:00',
    'Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium, Lucknow',
    'upcoming'
  ),
  -- Match 27: April 12, 2025
  (
    'ddfea642-b529-4c81-b8f7-dee2e86d3b03', -- Sunrisers Hyderabad
    'e9d05e39-c0de-4fe1-b5ee-f16defd92161', -- Punjab Kings
    '2025-04-12',
    '19:30:00',
    'Rajiv Gandhi International Stadium, Hyderabad',
    'upcoming'
  ),
  -- Match 28: April 13, 2025
  (
    '1002c8fb-860f-4240-8a3d-628a1daa9fd0', -- Rajasthan Royals
    'fc6ad44b-da6e-448a-bbe4-5c78cf54cea0', -- Royal Challengers Bangalore
    '2025-04-13',
    '15:30:00',
    'Sawai Mansingh Stadium, Jaipur',
    'upcoming'
  ),
  -- Match 29: April 13, 2025
  (
    '41b7787e-e182-4123-9992-2da31d6b7228', -- Delhi Capitals
    '4ce292db-e2b8-4c4b-b270-3c475e8a79e4', -- Mumbai Indians
    '2025-04-13',
    '19:30:00',
    'Arun Jaitley Stadium, Delhi',
    'upcoming'
  ),
  -- Match 30: April 14, 2025
  (
    'aae10eef-11d9-476d-bff3-d63a1588001d', -- Lucknow Super Giants
    '10be9628-6706-48bb-908a-3c99f954d06f', -- Chennai Super Kings
    '2025-04-14',
    '19:30:00',
    'Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium, Lucknow',
    'upcoming'
  ),
  -- Match 31: April 15, 2025
  (
    'e9d05e39-c0de-4fe1-b5ee-f16defd92161', -- Punjab Kings
    'a94cd4e3-0b5c-42c4-9365-23d0ad5d6048', -- Kolkata Knight Riders
    '2025-04-15',
    '19:30:00',
    'New PCA Stadium, Mohali',
    'upcoming'
  ),
  -- Match 32: April 16, 2025
  (
    '41b7787e-e182-4123-9992-2da31d6b7228', -- Delhi Capitals
    '1002c8fb-860f-4240-8a3d-628a1daa9fd0', -- Rajasthan Royals
    '2025-04-16',
    '19:30:00',
    'Arun Jaitley Stadium, Delhi',
    'upcoming'
  ),
  -- Match 33: April 17, 2025
  (
    '4ce292db-e2b8-4c4b-b270-3c475e8a79e4', -- Mumbai Indians
    'ddfea642-b529-4c81-b8f7-dee2e86d3b03', -- Sunrisers Hyderabad
    '2025-04-17',
    '19:30:00',
    'Wankhede Stadium, Mumbai',
    'upcoming'
  ),
  -- Match 34: April 18, 2025
  (
    'fc6ad44b-da6e-448a-bbe4-5c78cf54cea0', -- Royal Challengers Bangalore
    'e9d05e39-c0de-4fe1-b5ee-f16defd92161', -- Punjab Kings
    '2025-04-18',
    '19:30:00',
    'M Chinnaswamy Stadium, Bangalore',
    'upcoming'
  ),
  -- Match 35: April 19, 2025
  (
    '7d33e2fa-0924-4a0d-a6c1-f384e222bd1b', -- Gujarat Titans
    '41b7787e-e182-4123-9992-2da31d6b7228', -- Delhi Capitals
    '2025-04-19',
    '15:30:00',
    'Narendra Modi Stadium, Ahmedabad',
    'upcoming'
  ),
  -- Match 36: April 19, 2025
  (
    '1002c8fb-860f-4240-8a3d-628a1daa9fd0', -- Rajasthan Royals
    'aae10eef-11d9-476d-bff3-d63a1588001d', -- Lucknow Super Giants
    '2025-04-19',
    '19:30:00',
    'Sawai Mansingh Stadium, Jaipur',
    'upcoming'
  ),
  -- Match 37: April 20, 2025
  (
    'e9d05e39-c0de-4fe1-b5ee-f16defd92161', -- Punjab Kings
    'fc6ad44b-da6e-448a-bbe4-5c78cf54cea0', -- Royal Challengers Bangalore
    '2025-04-20',
    '15:30:00',
    'New PCA Stadium, Mohali',
    'upcoming'
  ),
  -- Match 38: April 20, 2025
  (
    '4ce292db-e2b8-4c4b-b270-3c475e8a79e4', -- Mumbai Indians
    '10be9628-6706-48bb-908a-3c99f954d06f', -- Chennai Super Kings
    '2025-04-20',
    '19:30:00',
    'Wankhede Stadium, Mumbai',
    'upcoming'
  ),
  -- Match 39: April 21, 2025
  (
    'a94cd4e3-0b5c-42c4-9365-23d0ad5d6048', -- Kolkata Knight Riders
    '7d33e2fa-0924-4a0d-a6c1-f384e222bd1b', -- Gujarat Titans
    '2025-04-21',
    '19:30:00',
    'Eden Gardens, Kolkata',
    'upcoming'
  ),
  -- Match 40: April 22, 2025
  (
    'aae10eef-11d9-476d-bff3-d63a1588001d', -- Lucknow Super Giants
    '41b7787e-e182-4123-9992-2da31d6b7228', -- Delhi Capitals
    '2025-04-22',
    '19:30:00',
    'Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium, Lucknow',
    'upcoming'
  ),
  -- Match 41: April 23, 2025
  (
    'ddfea642-b529-4c81-b8f7-dee2e86d3b03', -- Sunrisers Hyderabad
    '4ce292db-e2b8-4c4b-b270-3c475e8a79e4', -- Mumbai Indians
    '2025-04-23',
    '19:30:00',
    'Rajiv Gandhi International Stadium, Hyderabad',
    'upcoming'
  ),
  -- Match 42: April 24, 2025
  (
    'fc6ad44b-da6e-448a-bbe4-5c78cf54cea0', -- Royal Challengers Bangalore
    '1002c8fb-860f-4240-8a3d-628a1daa9fd0', -- Rajasthan Royals
    '2025-04-24',
    '19:30:00',
    'M Chinnaswamy Stadium, Bangalore',
    'upcoming'
  ),
  -- Match 43: April 25, 2025
  (
    '10be9628-6706-48bb-908a-3c99f954d06f', -- Chennai Super Kings
    'ddfea642-b529-4c81-b8f7-dee2e86d3b03', -- Sunrisers Hyderabad
    '2025-04-25',
    '19:30:00',
    'MA Chidambaram Stadium, Chennai',
    'upcoming'
  ),
  -- Match 44: April 26, 2025
  (
    'a94cd4e3-0b5c-42c4-9365-23d0ad5d6048', -- Kolkata Knight Riders
    'e9d05e39-c0de-4fe1-b5ee-f16defd92161', -- Punjab Kings
    '2025-04-26',
    '19:30:00',
    'Eden Gardens, Kolkata',
    'upcoming'
  ),
  -- Match 45: April 27, 2025
  (
    '4ce292db-e2b8-4c4b-b270-3c475e8a79e4', -- Mumbai Indians
    'aae10eef-11d9-476d-bff3-d63a1588001d', -- Lucknow Super Giants
    '2025-04-27',
    '15:30:00',
    'Wankhede Stadium, Mumbai',
    'upcoming'
  ),
  -- Match 46: April 27, 2025
  (
    '41b7787e-e182-4123-9992-2da31d6b7228', -- Delhi Capitals
    'fc6ad44b-da6e-448a-bbe4-5c78cf54cea0', -- Royal Challengers Bangalore
    '2025-04-27',
    '19:30:00',
    'Arun Jaitley Stadium, Delhi',
    'upcoming'
  ),
  -- Match 47: April 28, 2025
  (
    '1002c8fb-860f-4240-8a3d-628a1daa9fd0', -- Rajasthan Royals
    '7d33e2fa-0924-4a0d-a6c1-f384e222bd1b', -- Gujarat Titans
    '2025-04-28',
    '19:30:00',
    'Sawai Mansingh Stadium, Jaipur',
    'upcoming'
  ),
  -- Match 48: April 29, 2025
  (
    '41b7787e-e182-4123-9992-2da31d6b7228', -- Delhi Capitals
    'a94cd4e3-0b5c-42c4-9365-23d0ad5d6048', -- Kolkata Knight Riders
    '2025-04-29',
    '19:30:00',
    'Arun Jaitley Stadium, Delhi',
    'upcoming'
  ),
  -- Match 49: April 30, 2025
  (
    '10be9628-6706-48bb-908a-3c99f954d06f', -- Chennai Super Kings
    'e9d05e39-c0de-4fe1-b5ee-f16defd92161', -- Punjab Kings
    '2025-04-30',
    '19:30:00',
    'MA Chidambaram Stadium, Chennai',
    'upcoming'
  ),
  -- Match 50: May 1, 2025
  (
    '1002c8fb-860f-4240-8a3d-628a1daa9fd0', -- Rajasthan Royals
    '4ce292db-e2b8-4c4b-b270-3c475e8a79e4', -- Mumbai Indians
    '2025-05-01',
    '19:30:00',
    'Sawai Mansingh Stadium, Jaipur',
    'upcoming'
  ),
  -- Match 51: May 2, 2025
  (
    '7d33e2fa-0924-4a0d-a6c1-f384e222bd1b', -- Gujarat Titans
    'ddfea642-b529-4c81-b8f7-dee2e86d3b03', -- Sunrisers Hyderabad
    '2025-05-02',
    '19:30:00',
    'Narendra Modi Stadium, Ahmedabad',
    'upcoming'
  ),
  -- Match 52: May 3, 2025
  (
    'fc6ad44b-da6e-448a-bbe4-5c78cf54cea0', -- Royal Challengers Bangalore
    '10be9628-6706-48bb-908a-3c99f954d06f', -- Chennai Super Kings
    '2025-05-03',
    '19:30:00',
    'M Chinnaswamy Stadium, Bangalore',
    'upcoming'
  ),
  -- Match 53: May 4, 2025
  (
    'a94cd4e3-0b5c-42c4-9365-23d0ad5d6048', -- Kolkata Knight Riders
    '1002c8fb-860f-4240-8a3d-628a1daa9fd0', -- Rajasthan Royals
    '2025-05-04',
    '15:30:00',
    'Eden Gardens, Kolkata',
    'upcoming'
  ),
  -- Match 54: May 4, 2025
  (
    'e9d05e39-c0de-4fe1-b5ee-f16defd92161', -- Punjab Kings
    'aae10eef-11d9-476d-bff3-d63a1588001d', -- Lucknow Super Giants
    '2025-05-04',
    '19:30:00',
    'Himachal Pradesh Cricket Association Stadium, Dharamsala',
    'upcoming'
  ),
  -- Match 55: May 5, 2025
  (
    'ddfea642-b529-4c81-b8f7-dee2e86d3b03', -- Sunrisers Hyderabad
    '41b7787e-e182-4123-9992-2da31d6b7228', -- Delhi Capitals
    '2025-05-05',
    '19:30:00',
    'Rajiv Gandhi International Stadium, Hyderabad',
    'upcoming'
  ),
  -- Match 56: May 6, 2025
  (
    '4ce292db-e2b8-4c4b-b270-3c475e8a79e4', -- Mumbai Indians
    '7d33e2fa-0924-4a0d-a6c1-f384e222bd1b', -- Gujarat Titans
    '2025-05-06',
    '19:30:00',
    'Wankhede Stadium, Mumbai',
    'upcoming'
  ),
  -- Match 57: May 7, 2025
  (
    'a94cd4e3-0b5c-42c4-9365-23d0ad5d6048', -- Kolkata Knight Riders
    '10be9628-6706-48bb-908a-3c99f954d06f', -- Chennai Super Kings
    '2025-05-07',
    '19:30:00',
    'Eden Gardens, Kolkata',
    'upcoming'
  ),
  -- Match 58: May 8, 2025
  (
    'e9d05e39-c0de-4fe1-b5ee-f16defd92161', -- Punjab Kings
    '41b7787e-e182-4123-9992-2da31d6b7228', -- Delhi Capitals
    '2025-05-08',
    '19:30:00',
    'Himachal Pradesh Cricket Association Stadium, Dharamsala',
    'upcoming'
  ),
  -- Match 59: May 9, 2025
  (
    'aae10eef-11d9-476d-bff3-d63a1588001d', -- Lucknow Super Giants
    'fc6ad44b-da6e-448a-bbe4-5c78cf54cea0', -- Royal Challengers Bangalore
    '2025-05-09',
    '19:30:00',
    'Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium, Lucknow',
    'upcoming'
  ),
  -- Match 60: May 10, 2025
  (
    'ddfea642-b529-4c81-b8f7-dee2e86d3b03', -- Sunrisers Hyderabad
    'a94cd4e3-0b5c-42c4-9365-23d0ad5d6048', -- Kolkata Knight Riders
    '2025-05-10',
    '19:30:00',
    'Rajiv Gandhi International Stadium, Hyderabad',
    'upcoming'
  ),
  -- Match 61: May 11, 2025
  (
    'e9d05e39-c0de-4fe1-b5ee-f16defd92161', -- Punjab Kings
    '4ce292db-e2b8-4c4b-b270-3c475e8a79e4', -- Mumbai Indians
    '2025-05-11',
    '15:30:00',
    'Himachal Pradesh Cricket Association Stadium, Dharamsala',
    'upcoming'
  ),
  -- Match 62: May 11, 2025
  (
    '41b7787e-e182-4123-9992-2da31d6b7228', -- Delhi Capitals
    '7d33e2fa-0924-4a0d-a6c1-f384e222bd1b', -- Gujarat Titans
    '2025-05-11',
    '19:30:00',
    'Arun Jaitley Stadium, Delhi',
    'upcoming'
  ),
  -- Match 63: May 12, 2025
  (
    '10be9628-6706-48bb-908a-3c99f954d06f', -- Chennai Super Kings
    '1002c8fb-860f-4240-8a3d-628a1daa9fd0', -- Rajasthan Royals
    '2025-05-12',
    '19:30:00',
    'MA Chidambaram Stadium, Chennai',
    'upcoming'
  ),
  -- Match 64: May 13, 2025
  (
    'fc6ad44b-da6e-448a-bbe4-5c78cf54cea0', -- Royal Challengers Bangalore
    'ddfea642-b529-4c81-b8f7-dee2e86d3b03', -- Sunrisers Hyderabad
    '2025-05-13',
    '19:30:00',
    'M Chinnaswamy Stadium, Bangalore',
    'upcoming'
  ),
  -- Match 65: May 14, 2025
  (
    '7d33e2fa-0924-4a0d-a6c1-f384e222bd1b', -- Gujarat Titans
    'aae10eef-11d9-476d-bff3-d63a1588001d', -- Lucknow Super Giants
    '2025-05-14',
    '19:30:00',
    'Narendra Modi Stadium, Ahmedabad',
    'upcoming'
  ),
  -- Match 66: May 15, 2025
  (
    '4ce292db-e2b8-4c4b-b270-3c475e8a79e4', -- Mumbai Indians
    '41b7787e-e182-4123-9992-2da31d6b7228', -- Delhi Capitals
    '2025-05-15',
    '19:30:00',
    'Wankhede Stadium, Mumbai',
    'upcoming'
  ),
  -- Match 67: May 16, 2025
  (
    '1002c8fb-860f-4240-8a3d-628a1daa9fd0', -- Rajasthan Royals
    'e9d05e39-c0de-4fe1-b5ee-f16defd92161', -- Punjab Kings
    '2025-05-16',
    '19:30:00',
    'Sawai Mansingh Stadium, Jaipur',
    'upcoming'
  ),
  -- Match 68: May 17, 2025
  (
    'fc6ad44b-da6e-448a-bbe4-5c78cf54cea0', -- Royal Challengers Bangalore
    'a94cd4e3-0b5c-42c4-9365-23d0ad5d6048', -- Kolkata Knight Riders
    '2025-05-17',
    '19:30:00',
    'M Chinnaswamy Stadium, Bangalore',
    'upcoming'
  ),
  -- Match 69: May 18, 2025
  (
    '7d33e2fa-0924-4a0d-a6c1-f384e222bd1b', -- Gujarat Titans
    '10be9628-6706-48bb-908a-3c99f954d06f', -- Chennai Super Kings
    '2025-05-18',
    '15:30:00',
    'Narendra Modi Stadium, Ahmedabad',
    'upcoming'
  ),
  -- Match 70: May 18, 2025
  (
    'aae10eef-11d9-476d-bff3-d63a1588001d', -- Lucknow Super Giants
    'ddfea642-b529-4c81-b8f7-dee2e86d3b03', -- Sunrisers Hyderabad
    '2025-05-18',
    '19:30:00',
    'Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium, Lucknow',
    'upcoming'
  );
