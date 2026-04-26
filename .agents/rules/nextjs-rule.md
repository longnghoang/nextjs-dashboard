---
trigger: always_on
---

# Project Context
This is a Next.js 15 project using the App Router.

# Coding Standards
- Always use TypeScript with strict typing. Avoid using `any`.
- Prefer React Server Components. Only use `"use client"` when necessary for interactivity (hooks, event listeners).
- Use Tailwind CSS for styling. Do not use plain CSS modules.

# Database
- We are using Vercel Postgres. Use the `@vercel/postgres` SDK for all queries.

# Workflow
- When writing new server actions in `app/lib/actions.ts`, always include Zod validation for inputs.
