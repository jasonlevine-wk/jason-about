# Jason — About Me

Playful, mobile-first static site. Open `index.html` in a browser, or serve the folder:

```bash
cd jason-about
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Your photo

The hero photo is resolved by **`setupHeroAvatar()`**: it tries `profileImage` plus every path in **`profileImageCandidates`** (JPEG and PNG, `./` prefix, `images/` folder) until one loads. If none work, you get the purple **JL** fallback.

**Still broken?** The file must live in the **same folder as `index.html`** (or add that path to `profileImageCandidates`). Prefer opening the site via a tiny local server (`python3 -m http.server`) instead of double-clicking the file — some browsers are stricter with `file://` and paths.

Save your headshot as **`profile.png`** in this folder (next to `index.html`). It is shown in a **circle** with `object-fit: cover` (tweak `object-position` on `.hero-avatar` in `styles.css` if you want the crop tighter on your face).

Save **The Saint** still (Roger Moore with the Volvo **ST 1**) as **`templer.jpg`** in the same folder. It appears only when someone picks **Simon Templar** in the Volvo quiz. Paths are configurable via `profileImage` and `saintRevealImage` in `app.js`.

## Music previews

In-browser **30-second previews** use the **iTunes Search API** (no API keys). If a preview fails to load (network, region, or missing asset), the player falls back to opening the track on **Spotify**.

To change tracks, edit **`CONTENT.bands`** in `app.js` (`artist` / `song` strings).

## Spotify follow

The **Follow on Spotify** button uses your public profile URL:

`https://open.spotify.com/user/1276466774`

## Slack “Say hi” button

- **Default:** **Slack me @jason.levine** copies `@jason.levine` and shows a hint to paste into Slack’s Quick Switcher (**⌘K** / **Ctrl+K**).
- **Optional:** Set `slackDmLink` in `app.js` to something like `slack://user?team=YOUR_TEAM_ID&id=YOUR_MEMBER_ID` so the button opens the Slack app straight to a DM (IDs from your Slack profile / workspace).

## Astrology note

Sun and Moon copy is based on your **date** (and time for the Moon, where sites agree). **Rising sign** is highly time- and location-sensitive; the site shows a plausible placeholder with a disclaimer—swap the rising copy in `app.js` if you run a full chart and want it exact.

## Customize

All long-form copy lives in **`app.js`** (`CONTENT` object) so you can edit milestones, “How I work,” and games without touching markup.

## GitHub

Step-by-step **`git init`**, **`git push`**, and optional **GitHub Pages**: see **[PUBLISH.md](./PUBLISH.md)**.

## AWS Amplify Hosting

This repo includes **`amplify.yml`** so Amplify can deploy the site from Git with **no build step** (artifacts are the files at the repository root).

1. In the AWS console, open **Amplify** → **Create new app** → **Host web app** (or **Deploy without Git** if you prefer ZIP upload; Git is easier for ongoing edits).
2. Connect **GitHub**, authorize the Amplify GitHub App for your account/org, then choose this repository and branch **`main`**.
3. On the review screen, confirm Amplify detected **`amplify.yml`** (or set **Build settings** to use it). App name and environment name are up to you.
4. **Save and deploy**. After the first build finishes, Amplify shows a **`*.amplifyapp.com`** URL.
5. **Custom domain (optional):** In the Amplify app → **Hosting** → **Custom domains**, attach a domain; ACM certificates and Route 53 records are guided in the wizard.

Each push to **`main`** triggers a new deployment. Costs are typically low for a small static site (see AWS Amplify pricing for your region).
