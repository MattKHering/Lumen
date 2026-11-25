# Lumen

**[Open the Lumen web app](https://mattkhering.github.io/Lumen/)**

A little wiser every day. Lumen is an independent, responsive visual microlearning app for mobile and desktop browsers.

## Features
- 1,350 original courses and 4 quick reads across 68 subjects (19–20 full courses per subject), with 5,400 educational slides and 2,708 assessment questions. The latest 670 courses each use four concise slides, two authored knowledge checks and varied visual concept layouts. Subject-depth content is stored in `depth-01.js` through `depth-06.js` and `depth-plus-01.js` through `depth-plus-12.js`, with additional authored questions in `depth-plus-questions.js`.
- 100 interactive learning experiences: 25 visual stories, 20 simulations, 15 decision scenarios, 10 learning games, 10 interactive diagrams, 10 predict-and-reveal activities, 5 timelines and 5 sequencing puzzles.
- Access every activity directly through Explore → Interactive, or encounter it within its associated course. Standalone activities do not change course completion progress.
- Interactive experience content and runtime are stored in `experiences-stories.js`, `experiences-scenarios.js`, `experiences-workshops.js`, and `experiences-engine.js`. Models are educational simplifications and illustrative examples, not professional advice.
- Personalized recommendations, bookmarks, notes, adaptive review, and learning progress.
- Knowledge Profile: self-reported subject familiarity, optional adaptive Test me placement assessments across all 68 subjects, and post-lesson Already knew this? feedback. Placement uses four sampled foundational questions and up to four dedicated application/reasoning questions per subject (272 dedicated items in `knowledge-bank-01.js` and `knowledge-bank-02.js`). Results are provisional starting-level recommendations, not verified expertise or course completion. The difficulty catalog still requires its planned audit.
- Light/dark appearance and a local structured-content studio.

## Run locally
Open `index.html` in a browser or serve the repository using a static HTTP server. No build tools or external dependencies are required.

## GitHub Pages
In Settings → Pages, select Deploy from a branch, choose `main` and `/ (root)`, and save. The expected site URL is https://mattkhering.github.io/Lumen/.

## Privacy and scope
Learning history is stored locally in the browser, with export and deletion controls. There are no accounts or cross-device synchronization yet. Custom content is private to the browser. The initial lessons are educational introductions, not professional advice.

Lumen uses original content and illustrations and is not affiliated with Imprint.

## Editorial quality program

The 2026-11-25.1 editorial batch revises 24 existing courses (96 slides, 48 questions) in `quality-reviewed-01.js` and `quality-reviewed-02.js`, preserving course IDs. Six topic-specific diagrams are provided by `quality-visuals.js`. Revised lessons use relevant educational references and new answer explanations. Editorial revision is not independent expert certification. Other courses remain review-pending. The lesson source area provides public GitHub issue links for content corrections; users should not include private information. Reading completion and passing the course's short knowledge check are separate outcomes. Earlier completions are retained without retroactively inferring knowledge-check passes; changes in content revision invalidate only the current assessment result, not reading completion.

Remaining work: individually review and verify the other 1,326 full courses and four quick reads, improve their assessments and illustrations, achieve the agreed difficulty balance through substantive content changes, and complete real-device and independent subject-matter testing.
