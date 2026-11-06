# Code Standards

## General

- Keep modules small and single purpose
- fix root causes- do not layer workarounds
- do not mix unrelated concerns in one compponent or route
- respect the sustem bounnndaries defined in `architecture-context.md`

## TypeScript

- Strict mode is rerrquired throughout the project
- Avoid `any`; use explicit interfaces or narrowly scoped types.
- Validate unknownn exterrnal input at system bounnnndaries before trusting it.
- use `interface` for object contracts. 

## Next.js

- Default to React server components
- Add `"use client"` only when the component need browser interactivity, hooks, real-time state.
- Keep route handlers focused on asingle responsibility
- Long-running work beloongs in background task, not in req handlers


## Styling

- use CSS custom prperrrty tokens defined in `globals.css` - no raw Tailwind color classses like `zinc-*` or hardcoded hex values.
- Reference tokens through their Tailwind utility names: `bg-base`, `text-copy-primary`, `border-surface-border`, `text-brand`, etc.
- Maintain the border radius scale: `rounded-xl` for small elements, `rounded-2xl` for cards, `rounded-3xl` for modals.

## API Routes

- Validate and parse request input before any logic runs.
- Enforce auth and project ownership checks before any mutation.
- Return consistent, predictable response shapes.
- Keep route handlers thin — push complexity into shared modules or background tasks.

## Data and Storage

- Project metadata and relationships belong in PostgreSQL via Prisma.
- Canvas snapshots and generated specs belong in Vercel Blob; Prisma stores only the blob URL reference.
- Do not store large generated content directly in the database.
- Task run records are first-class relational data — treat ownership and run IDs as verified before any token issuance.

## File Organization

- `lib/` — shared infrastructure: Prisma client, auth helpers, utilities.
- `trigger/` — all durable background tasks and AI workflows.
- `components/` — UI composition only; no business logic.
- `app/api/` — route handlers for auth, triggering, and persistence.
- Name files after the responsibility they contain, not the technology.