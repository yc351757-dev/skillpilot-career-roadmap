# SkillPilot — Career Skill Gap Analyzer

SkillPilot is a dark-theme React application that helps students compare their current proficiency against illustrative skill requirements for a target career, prioritize gaps, create a personalized learning roadmap, and track task completion.

## Features

- Dark, responsive dashboard with career match and skill summaries.
- Seven editable career paths: Frontend Developer, Full Stack Developer, Data Analyst, Data Scientist, Python Developer, Java Backend Developer, and UI/UX Designer.
- Multi-step onboarding and persistent local profile.
- Skill assessment with five proficiency levels.
- Explainable skill-gap scoring and ranked recommendations.
- Personalized 30-, 60-, or 90-day task roadmap that takes daily study time and learning preference into account.
- Roadmap task completion and progress tracking.
- Curated links to trusted learning resources.
- Career explorer, career detail pages, profile settings, JSON data export, and reset confirmation.
- LocalStorage persistence. No external API key or backend account is required.

## Tech stack

- React + Vite
- React Router
- Lucide React icons
- Custom CSS (dark theme)
- LocalStorage

## Run on Windows

1. Extract the ZIP.
2. Open PowerShell in the extracted folder **where `package.json` is directly visible**.
3. Run:

```powershell
npm install
npm run dev
```

4. Open the local URL printed by Vite, typically `http://localhost:5173/`.

For a production build:

```powershell
npm run build
npm run preview
```

## Skill match formula

For each required skill:

`earned points = min(current proficiency, target proficiency)`

`career match % = sum(earned points) / sum(target proficiency) × 100`

The gap for a skill is `max(0, target level − current level)`. Gap priority is calculated as `gap × importance`, then sorted highest first. This is a transparent educational heuristic, not a prediction of hiring outcomes.

## Data and limitations

- Profile, skills and tasks are stored in the current browser's LocalStorage.
- The default profile is demo data and can be changed in onboarding or settings.
- Career skill levels are illustrative examples for learning plans, not official requirements from employers.
- Recommendations use a deterministic JavaScript rule engine; no live LLM is connected.
- Curated resource URLs open third-party websites and may change over time.

## Suggested architecture

```text
React UI / React Router
        |
        v
SkillPilot Context  <----> LocalStorage
        |
        +---- Career dataset (src/data/careers.js)
        |
        +---- Recommendation engine
                  |-- skill gap
                  |-- career match
                  |-- prioritization
                  |-- roadmap generation
                  +-- progress calculation
```

## College presentation abstract

SkillPilot is a personalized career planning platform designed to help students identify the gap between their existing technical skills and the skills associated with a selected career. Users assess their proficiency, receive a transparent skill-match score, and see prioritized recommendations. The platform converts those recommendations into a time-bounded learning roadmap that can be customized for available study hours and learning preferences. Progress is tracked as tasks are completed. The application demonstrates frontend architecture, state management, data persistence, reusable components, responsive UI design, and explainable recommendation logic.

## Demo checklist

1. Open the dashboard and point out the current career match.
2. Open Career Explorer and switch to Data Analyst or Frontend Developer.
3. Open Skill Assessment and change the proficiency of one or two skills.
4. Save the assessment and show the updated gap ranking.
5. Open Roadmap, complete a task, and demonstrate updated progress.
6. Change the roadmap duration or study hours and regenerate the plan.
7. Export the profile as JSON from Profile & Settings.

## 10 viva questions with short answers

1. **What is SkillPilot?** A career planning dashboard that compares current skills with illustrative target skill levels and suggests learning tasks.
2. **Why React?** React supports reusable components and predictable state-driven UI updates.
3. **What is Vite used for?** Vite runs the development server and creates production bundles.
4. **What is LocalStorage?** A browser storage API that persists string data for the same origin between sessions.
5. **How is the match percentage calculated?** Earned points are the sum of each skill's current level capped at its target, divided by the sum of target levels.
6. **How are skill gaps prioritized?** Gap size is multiplied by an importance rating; larger scores come first.
7. **Does the app use a real AI model?** No; the current version uses explainable, deterministic JavaScript rules, with room for later API integration.
8. **Why keep the career dataset separate?** It keeps content maintainable and makes it easier to add career paths without rewriting UI components.
9. **How does progress update?** Task completion is saved in app state and LocalStorage, and progress is calculated from completed tasks.
10. **What would you build next?** Backend accounts, verified career-skill data, curated resources per skill, server-side AI with secure API handling, and automated tests.

## 2-minute presentation script

Good morning, sir. My project is SkillPilot, a career skill-gap analyzer and personalized learning roadmap platform. Many students want to work in a specific technical role but are unsure which skills they should learn first. SkillPilot addresses this by letting the user select a career and rate their current proficiency in the required skills. The system calculates a skill-match percentage using a transparent formula and ranks missing skills according to their gap size and importance. It then generates a 30-, 60-, or 90-day roadmap based on the user's available study time and learning preference. Users can mark tasks complete and see their progress update immediately. The interface is responsive and uses React, React Router, a modular career dataset, and LocalStorage for persistence. The recommendation engine is rule-based in this version, so its reasoning can be inspected and explained; it does not falsely claim to call an external AI model. In future versions, the application could connect to a backend, use verified job-market data, and add an AI service for richer explanations. Thank you.

## Deploy to GitHub and Vercel

1. Extract this ZIP into a folder. Keep `package.json`, `index.html`, `vite.config.js`, `vercel.json`, and `src/` at the project root.
2. In PowerShell, run `Test-Path .\package.json`. Continue only if it prints `True`.
3. Run `npm install`, then `npm run build`. The production output should be created in `dist/`.
4. Create an empty GitHub repository (do not pre-add a README or license), then run `git init -b main`, `git add .`, `git status`, `git commit -m "Initial commit: SkillPilot career app"`, add your repository's HTTPS URL as `origin`, and `git push -u origin main`.
5. Import the repository at https://vercel.com/new. Use Framework Preset `Vite`, Root Directory `./`, Build Command `npm run build`, and Output Directory `dist`. Keep the Install Command at its default.

The `vercel.json` file provides a fallback for client-side React Router routes. Do not upload `node_modules`, `dist`, or secret `.env` files.

