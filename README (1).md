# VOC Research World V6.1

Professional scientific research and publication platform frontend.

V6.1 adds a structured, backend-ready content architecture connecting:

**Authors → Articles → Research Projects → Publications → References**

## Upload structure

Keep every file in the repository root, matching the current GitHub Pages setup.

Important files:
- `index.html`
- `style.css`
- `app.js`
- `data.js`
- `authors.html`
- `author.html`
- `article.html`
- `research-projects.html`
- `project.html`
- `publications.html`

Do not move CSS/JS into an `assets/` folder unless all HTML paths are changed accordingly.

## What V6.1 does not claim

This is still a static frontend. It does not yet have a database, authentication, real manuscript upload, editorial dashboard, or CMS. Those are later backend stages.


## V6.3 — Research Submission Workflow
V6.3 replaces the previous demo-only submission alert with an email-based workflow. The form validates submission metadata, creates a submission reference, and prepares an email to `vocresearchworld@gmail.com` with `aolaniyan59@gmail.com` copied. On supported mobile/desktop browsers it can use the native file-sharing interface to pass the manuscript file to an email/share application. If file sharing is unavailable, it opens a prefilled email draft and instructs the submitter to attach the manuscript manually.

This is an intake workflow, not a server-side manuscript repository. A dedicated secure backend should be added before confidential manuscripts are stored or processed automatically.
