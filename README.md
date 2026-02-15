# Aritra Saha — Personal Portfolio

## About the Site
This repository contains the code for my personal portfolio website, where I showcase my projects, research, experience, and background.

## Live Site
[https://aritrasaha.com](https://aritrasaha.com)

## Features
- Project showcases (CAV analytics, EdTech tools, ChatGT, visualization work, and more)
- About Me section describing my work in ML, HCI, data systems, and research
- Impact summaries for each project
- Links to demos, writeups, and repositories
- Clean UI for quick navigation

## Tech Stack
- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

## Environment variables

### Vercel (frontend)

Set these in your Vercel project → Settings → Environment Variables:

| Variable | Description |
|----------|-------------|
| `VITE_SUPABASE_URL` | Supabase project URL (e.g. `https://xxxx.supabase.co`) |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Supabase anon/public key |
| `VITE_RECAPTCHA_SITE_KEY` | Google reCAPTCHA v3 site key (optional; form works without it but no bot protection) |

### Supabase (contact form backend)

The contact form is sent via the Supabase Edge Function `send-contact-email`. Set these in Supabase → Project → Edge Functions → `send-contact-email` → Secrets:

| Secret | Description |
|--------|-------------|
| `RESEND_API_KEY` | Resend.com API key (used to send the email) |
| `RECAPTCHA_SECRET_KEY` | Google reCAPTCHA v3 secret key (required if you use reCAPTCHA on the frontend) |

## Contact form (reCAPTCHA v3)

The contact form uses Google reCAPTCHA v3 (invisible). Create a v3 key pair at [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin), then set `VITE_RECAPTCHA_SITE_KEY` on Vercel and `RECAPTCHA_SECRET_KEY` in the Supabase function. The backend enforces a minimum score of 0.5 for v3 submissions.
