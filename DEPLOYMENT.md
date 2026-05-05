# Deployment Guide — Suresh Venkata Chidella Portfolio

This guide covers how to deploy your Markdown portfolio to free static hosting platforms and connect a custom domain you've purchased.

---

## Overview

Your portfolio is a set of `.md` (Markdown) files. To render them as a website, you'll use one of these approaches:

| Platform | Effort | Best For |
|---|---|---|
| **GitHub Pages** | Low | Developers comfortable with Git |
| **Netlify** | Low | Drag-and-drop or Git-connected deploys |
| **Vercel** | Low | Git-connected, fast CDN |

All three are **free** for personal use and support **custom domains**.

---

## Option 1: GitHub Pages (Recommended)

### Step 1 — Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in (or create a free account).
2. Create a **new repository** named exactly: `yourusername.github.io`  
   *(Replace `yourusername` with your actual GitHub username — this naming is required for the free Pages subdomain.)*
3. Set it to **Public**.

### Step 2 — Push Your Portfolio Files

```bash
# In your portfolio folder:
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. Go to your repository → **Settings** → **Pages** (left sidebar).
2. Under **Source**, select `main` branch, folder `/root`.
3. Click **Save**.
4. GitHub will show your site URL: `https://yourusername.github.io`

> ⚠️ GitHub Pages renders `.md` files as plain text by default unless you add a Jekyll theme. See [Optional: Add Jekyll Theme](#optional-add-a-jekyll-theme-for-rich-rendering) below.

### Step 4 — Connect Your Custom Domain (GitHub Pages)

1. In your repository, go to **Settings** → **Pages** → **Custom domain**.
2. Enter your domain (e.g., `sureshchidella.com`) and click **Save**.
3. Log in to your **domain registrar** (GoDaddy, Namecheap, Google Domains, etc.).
4. Go to **DNS Settings** and add the following **A records**:

```
Type    Host    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
```

5. Add a **CNAME record** for `www`:

```
Type    Host    Value
CNAME   www     yourusername.github.io
```

6. Back in GitHub Pages settings, check **Enforce HTTPS** (may take a few minutes to activate after DNS propagates).

> ⏱️ DNS propagation can take up to 24–48 hours, but usually completes within 1–2 hours.

---

## Option 2: Netlify

### Step 1 — Deploy via Drag and Drop

1. Go to [netlify.com](https://netlify.com) and sign up for a free account.
2. From your dashboard, find the **"Deploy manually"** section.
3. Drag and drop your entire portfolio folder into the deploy zone.
4. Netlify gives you a live URL immediately (e.g., `random-name.netlify.app`).

### Step 2 — (Better) Deploy via GitHub

1. Push your portfolio to a GitHub repository (any name).
2. In Netlify: **New site from Git** → Connect GitHub → Select your repo.
3. Build command: *(leave blank for static Markdown)*
4. Publish directory: `/` (root)
5. Click **Deploy site**.

### Step 3 — Connect Your Custom Domain (Netlify)

1. In Netlify dashboard: **Site settings** → **Domain management** → **Add custom domain**.
2. Enter your domain (e.g., `sureshchidella.com`).
3. In your domain registrar's DNS settings, update your **nameservers** to Netlify's (recommended):
   ```
   dns1.p03.nsone.net
   dns2.p03.nsone.net
   dns3.p03.nsone.net
   dns4.p03.nsone.net
   ```
   Or add **A records** pointing to Netlify's load balancer IP (shown in your Netlify domain settings).
4. Netlify auto-provisions an **SSL/HTTPS certificate** via Let's Encrypt.

---

## Option 3: Vercel

### Step 1 — Deploy via GitHub

1. Go to [vercel.com](https://vercel.com) and sign up with your GitHub account.
2. Click **New Project** → Import your portfolio GitHub repository.
3. Framework preset: **Other**
4. Root directory: `/` · Build command: *(leave blank)* · Output directory: `/`
5. Click **Deploy**.

### Step 2 — Connect Your Custom Domain (Vercel)

1. In Vercel dashboard: **Project** → **Settings** → **Domains** → Add your domain.
2. Vercel will show you the required DNS records.
3. In your registrar, add:

```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

4. Vercel auto-provisions HTTPS.

---

## Optional: Add a Jekyll Theme for Rich Rendering

GitHub Pages natively supports **Jekyll** — a static site generator that converts Markdown to HTML with styling.

### Quickest Setup (Theme Chooser)

1. In your GitHub repository: **Settings** → **Pages** → **Theme Chooser**.
2. Pick a theme and click **Select theme**.
3. GitHub adds a `_config.yml` file — your `.md` files are now rendered with the chosen theme.

### Recommended Themes for a Professional Portfolio

| Theme | Style |
|---|---|
| `minima` | Clean, minimal blog-style |
| `cayman` | Modern, header-focused |
| `architect` | Developer-friendly sidebar |
| `slate` | Dark, technical |

To apply manually, create `_config.yml` in your repo root:

```yaml
theme: jekyll-theme-cayman
title: Suresh Venkata Chidella
description: Software Engineer · Java · Spring Boot · Microservices
```

---

## Optional: Automate Deploys with GitHub Actions

If you want your site to auto-deploy whenever you push changes:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Portfolio

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

---

## Checklist Before Going Live

- [ ] All `.md` files are committed and pushed to your repository
- [ ] GitHub Pages / Netlify / Vercel is configured and showing a live URL
- [ ] Custom domain DNS records are updated at your registrar
- [ ] HTTPS is enabled on your hosting platform
- [ ] Test all internal links (`README.md` → `PROJECTS.md`, etc.) are working
- [ ] Check how Markdown renders — especially tables and links
- [ ] Update the `ABOUT.md` "Outside of Work" section with personal details
- [ ] Add your GitHub profile URL if/when you create one

---

## Summary of Free Hosting Limits

| Platform | Free Bandwidth | Custom Domain | HTTPS | Build Minutes |
|---|---|---|---|---|
| GitHub Pages | 100 GB/month | ✅ | ✅ | N/A |
| Netlify | 100 GB/month | ✅ | ✅ | 300 min/month |
| Vercel | 100 GB/month | ✅ | ✅ | 6,000 min/month |

All three are more than sufficient for a personal portfolio.

---

[← Back to Portfolio](README.md)

