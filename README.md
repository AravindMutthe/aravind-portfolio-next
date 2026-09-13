# Aravind Mutte — Portfolio (Next.js)

Personal portfolio of **Aravind Mutte**, Cloud DevOps & SRE Engineer (Hyderabad, India).

## Stack

- **Next.js 15** (App Router, static export)
- **Tailwind CSS v4** — neon-dark design system
- **IBM Carbon** (`@carbon/react`) — the Hire Me / Contact form components
- **Framer Motion** — page transitions, scroll reveals, parallax, counters
- Looping hero video + AI-generated neon posters related to each section

## Live

- **Web (GitHub Pages):** https://aravindmutthe.github.io/aravind-portfolio-next/
- Built & deployed automatically by `.github/workflows/deploy.yml` on every push to `main`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000/aravind-portfolio-next
npm run build    # static export → out/
```

The export uses `basePath: /aravind-portfolio-next`, so the dev server serves the
site under that path — same as production.

## Contact form

The Hire Me form (IBM Carbon `TextInput`/`TextArea`/`Select`/`Button`) sends the
enquiry to `mutthe.aravind@gmail.com` via FormSubmit, then opens WhatsApp with
the full message pre-filled to +91 98851 89951, and offers one-tap SMS / email-app
follow-ups.
