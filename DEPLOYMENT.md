# Coolify Deployment Guide

## Prerequisites

- Coolify instance (v4+)
- PostgreSQL database (Coolify can create one for you)
- Git repository connected to Coolify

## Environment Variables

Set these in Coolify's Environment Variables UI:

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string (provided by Coolify) |
| `NEXTAUTH_SECRET` | Random secret for NextAuth (placeholder for now) |
| `NEXTAUTH_URL` | Your production URL (e.g. `https://greenshieldpest.com`) |
| `OPENAI_API_KEY` | Placeholder — not yet used |
| `ANTHROPIC_API_KEY` | Placeholder — not yet used |

## Build & Start Commands

Configure in Coolify deployment settings:

| Setting | Value |
|---------|-------|
| **Build Command** | `npm run build` |
| **Install Command** | `npm ci --omit=dev && npx prisma generate` |
| **Start Command** | `npm run start:migrate` |

> Note: `prisma generate` runs automatically via `postinstall` script in `package.json`, so `npm ci` will trigger it automatically.

## Database Setup

### Option 1: Automatic (recommended)

Add a startup script to `package.json`:

```json
"scripts": {
  "start:migrate": "prisma migrate deploy && next start"
}
```

This runs migrations before starting the app.

### Option 2: Manual

1. SSH into the Coolify container
2. Run: `npx prisma migrate deploy`
3. Run: `npx prisma db seed`

## Seed Data

After migration completes, seed the database:

```bash
npx prisma db seed
```

This creates:
- 2 users (admin + editor)
- Default company settings
- 4 pages (about, contact, service-areas, privacy-policy)
- 3 blog posts

## Production Checklist

- [ ] Set `NEXTAUTH_URL` to your production domain
- [ ] Generate a strong `NEXTAUTH_SECRET`: `openssl rand -base64 32`
- [ ] Verify `DATABASE_URL` uses the Coolify-provided PostgreSQL connection string
- [ ] Run `npx prisma migrate deploy` on first deploy
- [ ] Run `npx prisma db seed` on first deploy
- [ ] Set Node.js version to 20+ in Coolify build settings
