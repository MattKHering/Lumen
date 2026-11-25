# Lumen

**[Open the Lumen web app](https://mattkhering.github.io/Lumen/)**

A little wiser every day. Lumen is an independent, responsive visual microlearning app for mobile and desktop browsers.

## Features
- 680 original introductory courses and 4 quick reads across 68 subjects (10 full courses per subject), with 2,720 illustrated slides and 1,368 assessment questions. The 480 added courses each use four concise slides and two knowledge checks. Subject-depth content is stored in `depth-01.js` through `depth-06.js`.
- 100 interactive learning experiences: 25 visual stories, 20 simulations, 15 decision scenarios, 10 learning games, 10 interactive diagrams, 10 predict-and-reveal activities, 5 timelines and 5 sequencing puzzles.
- Access every activity directly through Explore → Interactive, or encounter it within its associated course. Standalone activities do not change course completion progress.
- Interactive experience content and runtime are stored in `experiences-stories.js`, `experiences-scenarios.js`, `experiences-workshops.js`, and `experiences-engine.js`. Models are educational simplifications and illustrative examples, not professional advice.
- Personalized recommendations, bookmarks, notes, adaptive review, and learning progress.
- Light/dark appearance and a local structured-content studio.

## Run locally
Open `index.html` in a browser or serve the repository using a static HTTP server. No build tools or external dependencies are required.

## GitHub Pages
In Settings → Pages, select Deploy from a branch, choose `main` and `/ (root)`, and save. The expected site URL is https://mattkhering.github.io/Lumen/.

## Privacy and scope
Learning history is stored locally in the browser, with export and deletion controls. There are no accounts or cross-device synchronization yet. Custom content is private to the browser. The initial lessons are educational introductions, not professional advice.

Lumen uses original content and illustrations and is not affiliated with Imprint.
