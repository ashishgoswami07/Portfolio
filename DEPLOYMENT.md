# Deployment Guide

This project can be deployed directly from GitHub to Vercel.

## Prerequisites

- A GitHub repository containing this project
- A Vercel account
- The required environment variable values

## Required Environment Variables

Add these in Vercel under `Project Settings -> Environment Variables`:

- `NEXT_PUBLIC_APP_URL`
- `NEXT_PUBLIC_GTM`
- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`
- `GMAIL_PASSKEY`
- `EMAIL_ADDRESS`
- `NEXT_PUBLIC_RECAPTCHA_SECRET_KEY`

## Deploy From GitHub

1. Push this project to GitHub.
2. Log in to Vercel.
3. Click `Add New -> Project`.
4. Import the GitHub repository.
5. Confirm Vercel detects the framework as `Next.js`.
6. Leave the default build settings, or use the values from `vercel.json`.
7. Add all required environment variables.
8. Click `Deploy`.

## Build Settings

This repository includes `vercel.json` with these commands:

- Install: `npm install`
- Build: `npm run build`
- Development: `npm run dev`

## After Deployment

- Open the deployed site and verify the homepage loads correctly.
- Test the contact form.
- Test the captcha flow.
- If email or Telegram delivery fails, recheck the related environment variables.

## Notes

- This is a Next.js app with API routes, so environment variables are required for full functionality.
- `NEXT_PUBLIC_RECAPTCHA_SECRET_KEY` is currently read in the server route at `app/api/google/route.js`.
