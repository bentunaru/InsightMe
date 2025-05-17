# InsightMe

A modern web application for creating, delivering, and analysing personality tests.

## Tech Stack

- **Frontend:** React 18 (Vite)
- **Styling:** Tailwind CSS v4
- **Backend-as-a-Service:** Supabase (Postgres + Auth + Realtime)

## Project Structure

```
InsightMe/
├─ insightme-app/         # Vite React source code
│   ├─ src/
│   │  ├─ assets/
│   │  ├─ components/
│   │  ├─ contexts/
│   │  ├─ hooks/
│   │  ├─ pages/
│   │  └─ services/
│   ├─ index.html
│   ├─ vite.config.js
│   └─ …
├─ Documents/             # Design docs, specs, to-do list
└─ README.md              # You are here 👋
```

## Getting Started

1. **Clone the repo**

   ```bash
   git clone https://github.com/bentunaru/InsightMe.git
   cd InsightMe/insightme-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment variables**

   Create a `.env` file in `insightme-app/`:

   ```env
   VITE_SUPABASE_URL="<your-supabase-project-url>"
   VITE_SUPABASE_ANON_KEY="<your-supabase-anon-key>"
   ```

4. **Run in development**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`.

## Scripts

| Command          | Description                         |
| ---------------- | ----------------------------------- |
| `npm run dev`    | Start Vite dev server with HMR      |
| `npm run build`  | Production build in `/dist`         |
| `npm run preview`| Preview built app locally           |

## Supabase Database Schema (draft)

| Table | Purpose |
|-------|---------|
| `tests` | List of personality tests |
| `questions` | Questions belonging to a test |
| `user_test_sessions` | Each attempt a user makes |
| `user_answers` | Answers given in a session |
| `user_test_results` | Calculated results |

> Detailed DDL is tracked in `/Documents/`.

## Roadmap

- [x] Phase 1 – Project setup (React, Tailwind v4, Supabase client)
- [ ] Phase 2 – User authentication (sign-up / login / protected routes)
- [ ] Phase 3 – Test management & data layer
- [ ] Phase 4 – Test-taking interface
- [ ] Phase 5 – Results calculation & display
- [ ] Phase 6 – Deployment (Vercel / Netlify)

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feat/my-feature`)
3. Commit your changes (`git commit -m 'feat: add my feature'`)
4. Push to the branch (`git push origin feat/my-feature`)
5. Open a Pull Request

---

© 2025 InsightMe. Released under the MIT License. 