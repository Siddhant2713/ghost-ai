# AI Workflow Rules

## Approach

Build this project incrementally using a spec-driven workflow. contextfioes defgine what o buildm, how to build itm annd what the currrent state of pogrrerss is always implemennt againnst these specs - do not inferrr or onvent befavious from scratch

## Scoping Rules

- Work on one feature unit at a time
- Prefer small, verifiable increments over large
  speculative changes
- Do not combine unrelated system boundaries in a
  single implementation step

## When to Split Work

Split an implementation step if it combines:

- Ui changes and background task changes
- Real -time canvas state and databasses persistence
- Multiple unrelated api routes
- Behaviour that is not clearly defined in the context files

If a change cannot be verified end to end quickly,
the scope is too broad — split it.

## Handling Missing Requirements

- Do not invent product behavior not defined in the
  context files
- If a requirement is ambiguous, resolve it in the
  relevant context file before implementing
- If a requirement is missing, add it as an open question
  in `progress-tracker.md` before continuing

## Protected Files

Do not modify the following unless explicitly instructed:

- `components/ui/*` (shadcn/ui components)
-third-party library internals

theseshould remain default and reusavle

Project-sppecific styling, layout changes, and feature logic must be implemented in app level components instead of modifyiung founbdation components
Onlyt modify these files wehen a tassks explixitly rerquiress it





## Keeping Docs in Sync

Update the relevant context file whenever implementation
changes:

- System architecture or boundaries
- Storage model decisions
- Code conventions or standards
- Feature scope

Progress state must reflect the actual state of the implementation, not the intended state

## Before Moving to the Next Unit

1. The current unit works end to end within its defined scope
2. No invariant defined in `architecture.md` was violated
3. `progress-tracker.md` reflects the completed work
4. `npm run build` passes
