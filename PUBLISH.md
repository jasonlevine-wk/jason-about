# Publish this site to GitHub

Run these from **`jason-about`** (the folder that contains `index.html`).

## 0. Tell Git who you are (this repo only)

Skip this if you already use `--global` name/email. Otherwise Git will refuse to commit:

```bash
cd /path/to/jason-about
git config user.name "Your Name"
git config user.email "you@example.com"
```

Use an email GitHub recognizes (your work email or your GitHub **noreply** address from **Settings → Emails**).

## 1. Create the empty repo on GitHub

1. Open [github.com/new](https://github.com/new).
2. Repository name: e.g. `jason-about` or `about-me` (your choice).
3. Leave **Add a README** unchecked (you already have files locally).
4. Create repository.

## 2. Initialize git and push

Replace `YOUR_USER` and `YOUR_REPO` with your GitHub username and repo name.

```bash
cd /path/to/jason-about

git init
git add -A
git commit -m "Initial commit: personal about-me static site"

git branch -M main
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```

If you use **SSH** instead of HTTPS:

```bash
git remote add origin git@github.com:YOUR_USER/YOUR_REPO.git
git push -u origin main
```

## Troubleshooting

- **`error: src refspec main does not match any`** — There is no commit on `main` yet. Set **user.name** / **user.email** (section 0), then **`git add -A`** and **`git commit -m "..."`** successfully before **`git push`**.
- **`remote origin already exists`** — Skip **`git remote add`**. Use **`git remote -v`** to check, and **`git remote set-url origin ...`** to change the URL.

## 3. (Optional) GitHub Pages

1. Repo on GitHub → **Settings** → **Pages**.
2. **Build and deployment**: **Deploy from a branch**.
3. Branch: **main**, folder **/ (root)** → Save.

After a minute, the site will be at:

`https://YOUR_USER.github.io/YOUR_REPO/`

(Exact URL is shown on the Pages settings screen.)

## Photos

`profile.png` and `templer.jpg` are not in this repo by default. Add them before `git add` if you want them on GitHub, or keep them only on your machine and they will stay off the remote.

## GitHub CLI (optional)

If you install [GitHub CLI](https://cli.github.com/) (`brew install gh`) and run `gh auth login`, you can create and push in one step from this folder:

```bash
cd /path/to/jason-about
git init && git add -A && git commit -m "Initial commit: about-me static site"
gh repo create YOUR_REPO --public --source=. --remote=origin --push
```
