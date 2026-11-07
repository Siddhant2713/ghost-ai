# Progress Tracker

Update this file after every meaningful implementation
change.

## Current Phase

- Feature 1 complete; ready for next unit

## Current Goal

- Feature 1: editor chrome — `EditorNavbar`, `ProjectSidebar` (floating, slide-in), reusable dialog pattern — spec: `context/feature-specs/1-editor.md`

## Completed

- Feature 0: design system — shadcn/ui (base-nova, Base UI primitives) configured; Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea added to `components/ui/` (unmodified); `lucide-react` installed; `lib/utils.ts` exports `cn()`; `globals.css` dark-only theme with project tokens + shadcn tokens mapped onto them. `tsc` and `npm run build` pass.
- Feature 1: editor chrome — `components/editor/editor-navbar.tsx` (fixed h-14, left/center/right, sidebar toggle with PanelLeftOpen/Close), `components/editor/project-sidebar.tsx` (floating overlay, slide-in, `isOpen`/`onClose`, My Projects/Shared tabs with empty states, full-width New Project button), `components/shared/app-dialog.tsx` (title/description/body/footer dialog pattern on project tokens, no concrete dialogs). `components/editor/editor-shell.tsx` owns sidebar state and is rendered from `app/page.tsx`. `tsc`, lint, `npm run build` pass.

## In Progress

- None.

## Next Up

- Next feature spec (not yet written)

## Open Questions

- `context/project-overview.md` and `context/architecture-context.md` are referenced by AGENTS.md but do not exist yet.
- `app/layout.tsx` metadata is still the create-next-app default.

## Architecture Decisions

- `globals.css` had no dark theme at start (only `@import "tailwindcss"`), so tokens from `ui-context.md` were added. Dark values live in `:root`; `dark` class set on `<html>` so shadcn `dark:` variants apply (dark only, no light mode).
- `cn` comes from shadcn's `cn` package (generated components import it directly); `lib/utils.ts` re-exports it.

## Session Notes

- shadcn style is `base-nova` (Base UI, not Radix): triggers use the `render` prop, not `asChild`.
