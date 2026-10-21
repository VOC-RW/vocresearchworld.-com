# VOC Research World — Submission backend files

## What this package contains
- `supabase-config.js`: browser client configuration using the Supabase publishable key.
- `auth.html`: author registration, login, and password reset.
- `dashboard.html`: shows the signed-in author's submission history.
- `submit.html`: uploads a manuscript to the private `manuscripts` bucket and inserts submission metadata into `public.submissions`.

## Important repository note
The GitHub connection currently allows reading but returns `403 Resource not accessible by integration` for file writes and branch creation. Therefore these files have **not** been committed to your repository by this package. Upload them into the root of your GitHub Pages repository yourself, replacing the existing `submit.html` only after you have saved a backup.

## Add files using GitHub on your phone
1. Open the repository: https://github.com/VOC-RW/vocresearchworld.-com
2. For `auth.html`, `dashboard.html`, and `supabase-config.js`, use **Add file → Create new file** and paste the matching file content.
3. For `submit.html`, open the existing file, choose Edit, replace its contents with the package version, and commit the change. Save a copy of the original first.
4. Commit each file to the default branch, or create a branch and pull request if GitHub offers that option.
5. GitHub's official file editing guide: https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files

## Supabase Auth configuration
In Supabase Dashboard → Authentication → URL Configuration:
- Add the exact GitHub Pages site origin to **Site URL** / **Redirect URLs**. For example, if your site is served at `https://voc-rw.github.io/vocresearchworld.-com/`, use that actual URL and include `https://voc-rw.github.io/vocresearchworld.-com/**` in allowed redirects.
- Confirm email settings fit your workflow. If email confirmation is enabled, new authors must click the confirmation email before logging in.

## Database and storage expectations
This frontend expects:
- `public.submissions` with the columns `title`, `abstract`, `manuscript_url`, `category_id`, `submitted_by`, `status`, `submitted_at`, `submission_type`, `author_name`, `author_email`, `institution`, `keywords`, and `submission_reference`.
- The private Storage bucket `manuscripts`.
- Storage upload policy restricting each upload to a folder named with the authenticated user's UUID.
- Row-level security policies allowing an authenticated user to insert a submission only where `submitted_by = auth.uid()`, and view their own submissions. Editorial updates should remain restricted to reviewer/editor/admin accounts.

The frontend uses the actual category slugs currently in your database, including `data-and-ai` for the displayed “Data & AI” option. It queries the existing `reviewer_note` column (singular).

## Security
- The publishable key is designed to be used in browser code; it is not a secret. Never add a Supabase `service_role` key to any frontend file.
- Keep Row Level Security enabled. The private manuscript bucket should not be made public.
- After deployment, test account registration, login, a small test manuscript, dashboard visibility, and that a second author cannot view the first author's submissions.
