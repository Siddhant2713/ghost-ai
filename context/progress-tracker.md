# Progress Tracker

Update this file after every meaningful implementation
change.

## Current Phase

- Feature 3 (auth) complete; ready for next unit

## Current Goal

- Feature 3: Clerk auth — provider, sign-in/sign-up pages, route protection, redirects, user menu — spec: `context/feature-specs/3.auth.md`

## Completed

- Feature 0: design system — shadcn/ui (base-nova, Base UI primitives) configured; Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea added to `components/ui/` (unmodified); `lucide-react` installed; `lib/utils.ts` exports `cn()`; `globals.css` dark-only theme with project tokens + shadcn tokens mapped onto them. `tsc` and `npm run build` pass.
- Feature 1: editor chrome — `components/editor/editor-navbar.tsx` (fixed h-14, left/center/right, sidebar toggle with PanelLeftOpen/Close), `components/editor/project-sidebar.tsx` (floating overlay, slide-in, `isOpen`/`onClose`, My Projects/Shared tabs with empty states, full-width New Project button), `components/shared/app-dialog.tsx` (title/description/body/footer dialog pattern on project tokens, no concrete dialogs). `components/editor/editor-shell.tsx` owns sidebar state and is rendered from `app/page.tsx`. `tsc`, lint, `npm run build` pass.
- Feature 3: auth — `@clerk/ui` installed; `ClerkProvider` wraps root layout with `lib/clerk-appearance.ts` (clerk `dark` theme, variables mapped to app CSS vars); `components/auth/auth-layout.tsx` + `architecture-preview.tsx` two-panel (lg+) / form-only layout matching `context/ScreenShots/Sign in.png` (headline, prompt pill, static canvas preview, numbered features; flat Clerk form, copy via `lib/clerk-localization.ts`), used by `app/sign-in/[[...sign-in]]` and `app/sign-up/[[...sign-up]]`; `proxy.ts` at root (passes local `signInUrl`/`signUpUrl` so Clerk doesn't redirect to hosted pages) protects all routes except sign-in/sign-up; `/` redirects to `/editor` (signed in) or `/sign-in`; editor moved to `app/editor/page.tsx`; `UserButton` in `EditorNavbar` right section. `tsc`, lint, `npm run build` pass.

## In Progress

- None.

## Next Up

- Next feature spec (not yet written)

## Open Questions

- `context/project-overview.md` and `context/architecture-context.md` are referenced by AGENTS.md but do not exist yet.
- `app/layout.tsx` metadata is still the create-next-app default.
- `.env.local` only has `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`; no sign-in/sign-up URL vars exist. `proxy.ts` reads Clerk's standard `NEXT_PUBLIC_CLERK_SIGN_IN_URL` / `NEXT_PUBLIC_CLERK_SIGN_UP_URL` and falls back to `/sign-in` / `/sign-up`.
- Spec says `context/feature-specs/3.auth.md` (numbered 3; no spec 2 exists).

## Architecture Decisions

- `globals.css` had no dark theme at start (only `@import "tailwindcss"`), so tokens from `ui-context.md` were added. Dark values live in `:root`; `dark` class set on `<html>` so shadcn `dark:` variants apply (dark only, no light mode).
- `cn` comes from shadcn's `cn` package (generated components import it directly); `lib/utils.ts` re-exports it.

## Session Notes

- Cache Components is enabled: `auth()` and Clerk client components (`SignIn`, `SignUp`) must sit inside `<Suspense>` or the build fails.
- `globals.css` declares layer order `theme, base, clerk, components, utilities` and appearance sets `cssLayerName: "clerk"` so Tailwind classes in `elements` override Clerk styles.
- `@clerk/ui` appearance uses `theme: dark` (from `@clerk/ui/themes`) plus `variables` accepting `var(--x)` strings.
- shadcn style is `base-nova` (Base UI, not Radix): triggers use the `render` prop, not `asChild`.
