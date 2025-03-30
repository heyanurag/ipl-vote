### ipl voting app

a simple web app that allows users to vote on ipl cricket matches and track their prediction accuracy.

### features

- user authentication (signup, signin)
- view upcoming, today's, and past matches
- vote on match outcomes
- leaderboard showing top predictors
- user profiles with stats and voting history
- admin functionality to set match results

### tech stack

- react 18
- typescript
- tailwindcss
- shadcn/ui components
- supabase (auth + database)
- vite (build tool)

### getting started

1. clone this repository
2. copy `.env.example` to `.env` and add your supabase credentials
3. install dependencies: `pnpm install`
4. run dev server: `pnpm dev`

### database schema

the app uses the following postgres tables. The db is on supabase
- `profiles`: user information
- `teams`: ipl teams
- `matches`: match details including winner
- `votes`: user predictions

## deployment

build the app with `pnpm build` and deploy the `dist` directory to your hosting provider of choice.
