# VOC Research World — Website

A 6-page static site (no build step, no backend required):
`index.html`, `about.html`, `research.html`, `team.html`, `services.html`, `contact.html`, plus `assets/style.css`, `assets/script.js`, `assets/voc-logo.png`.

## Go live — pick one (all free)

### Option A: Netlify Drop (fastest, ~1 minute)
1. Go to https://app.netlify.com/drop
2. Drag the whole `voc-site` folder onto the page
3. You get a live URL instantly (e.g. `random-name.netlify.app`) — you can rename it or connect a custom domain later in Netlify's site settings

### Option B: GitHub Pages (free, good if you want version control)
1. Create a new GitHub repo and upload all files in this folder
2. Go to the repo's **Settings → Pages**
3. Under "Source," select the `main` branch, root folder → Save
4. Your site goes live at `https://<your-username>.github.io/<repo-name>/`

### Option C: Vercel
1. Go to https://vercel.com/new
2. Import the folder or a GitHub repo containing it
3. Deploy — no configuration needed for a static site

## Before you go live
- Replace the placeholder email (`hello@vocresearchworld.org`) and address in `contact.html`
- The contact form doesn't send email yet — wire it to Formspree, Netlify Forms, or your own backend (see the note under the form)
- Swap the placeholder team initials/roles in `team.html` for real names, roles and photos
- Add a real domain name once you've picked a host, if you want one (e.g. `vocresearchworld.org`)

## Editing content
Every page is plain HTML — open any `.html` file in a text editor and edit the text directly. Shared styling lives in `assets/style.css`; shared behavior (mobile menu, filters, form) lives in `assets/script.js`.
