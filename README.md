# EvidenceForge — Standalone App

Deployable Next.js application for the Ecommerce Thesis Audit service.

## Features
- Landing page with positioning and offer
- Intake form for new audits
- API route ready for Stripe + agent handoff
- Clean, deploy-ready structure

## Quick start
```bash
npm install
npm run dev
```

## Deployment
- Vercel (recommended): connect the repo and deploy
- Set environment variables for Stripe when ready:
  - STRIPE_SECRET_KEY
  - STRIPE_WEBHOOK_SECRET
  - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

## Agent integration
New intakes are logged and can be picked up by the EvidenceForge Ops bot via:
- Webhook to the bot
- Shared Google Sheet / database
- Email notification

The bot handles research, audit generation, and client updates.
