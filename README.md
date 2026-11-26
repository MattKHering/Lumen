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

### Subject-by-subject overhaul — batch 2026-11-25.2

Physics and Computer Science each now have 20 editorially revised courses, with 10 Beginner, 6 Intermediate and 4 Advanced. The batch adds 39 new revisions (the rotational motion course was already revised), for 63 revised courses overall. Existing course IDs remain stable. `quality-physics.js` and `quality-computer-science.js` contain substantive rewritten material, worked examples and 78 new authored checks. Explore offers optional guided paths for both subjects and 19 course-specific helpful-background relationships. Recommendations never lock content or infer unearned mastery. Automated mock-DOM checks covered the 40 course completion flows, path membership, difficulty balance and relationship resolution; independent factual review and real-device testing are still needed. Most visual layouts remain shared templates.

Account preparation: `supabase/schema.sql` defines per-user row-level security and a revision guard; `supabase/SETUP.md` documents project configuration, client-side synchronization requirements and release tests. The schema has not been deployed, and authentication and cloud sync are not active. Guest access remains unchanged.

Next: Psychology, Finance and Health, then remaining subjects. 1,287 full courses and four quick reads have not yet received a complete editorial rewrite. The global 50/30/20 target remains incomplete.

### Subject-by-subject overhaul — batch 2026-11-25.3

Psychology, Finance and Health each have 20 revised full courses (10 Beginner, 6 Intermediate, 4 Advanced); the Health sleep quick read is also revised. The 61 revisions include eight previously revised full courses, bringing unique editorial coverage to 115 of 1,350 full courses and one of four quick reads. Stable IDs and reading progress are retained; old knowledge checks for these revised lessons are not counted as current passes. The three subjects have optional guided paths, related background links and new worked examples and assessment explanations. Sources are educational reference starting points, not independent claim-by-claim verification.

Pages now stages all root JavaScript assets, and a catalog regression test checks the staged files, script syntax, course counts, unique IDs, revision structure, difficulty balance, guided paths and related course references. Run `node tests/check-static.cjs .` locally. Real-browser/device testing and independent factual review remain outstanding.

Remaining: 1,235 full courses and three quick reads need editorial revisions; overall difficulty target, further course-specific visuals, and the account frontend and live Supabase configuration are not complete. Guest mode remains available.
