# otj.app

Landing page for the **OTJ App** — the real-time investor portal for OTJ Capital.

---

## What this site is

The marketing page for the investor dashboard product. Explains what the app does, how to get access, and what investors can see once logged in. Links to the live dashboard at `app.otj.app`.

**Sections:**
- Hero — "Your fund. Live. Always." + stats (4 asset classes, 34 instruments, 42 strategies)
- Features — 9 dashboard features including strategy registry, regime state, risk events
- How It Works — 3 steps: request access → magic link → live dashboard
- CTA — mailto:invest@otjcapital.com

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14, TypeScript |
| Styling | Tailwind CSS |
| Deployment | Vercel |
| Domain | otj.app (landing) · app.otj.app (live dashboard) |

---

## Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## Deploy

1. Connect `OTJ-CAPITAL/otj-app-web` to Vercel
2. No environment variables required
3. Set custom domain: `otj.app`
4. Every push to `main` auto-deploys

---

## Related repos

| Repo | Role |
|---|---|
| `otj-app` | The actual investor dashboard (app.otj.app) |
| `otj-cos` | Python trading engine that powers the fund |
| `otjcapital-web` | Fund marketing site (otjcapital.com) |

---

*OTJ Capital · Nairobi, Kenya*
