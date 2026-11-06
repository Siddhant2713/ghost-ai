# Architecture Context

## Stack

| Layer            | Technology              | Role                                                           |
| ---------------- | ----------------------- | -------------------------------------------------------------- |
| Framework        | Next.js 16 + TypeScript | Full-stack app with server/client boundaries                   |
| UI               | Tailwind + shadcn/ui    | Component composition and styling                              |
| Auth             | Clerk                   | User identity and route protection                             |
| Database         | Prisma + PostgreSQL     | Relational metadata: projects, collaborators, specs, task runs |
| Canvas           | Liveblocks + React Flow | Real-time collaborative canvas, presence, and cursors          |
| Background tasks | Trigger.dev             | Durable AI generation workflows                                |
| Artifact storage | Vercel Blob             | Canvas snapshots and generated Markdown specs                  |

## System Boundaries

- `app/api` — Authentucated req handlers: input validation, ownership checks, task triggering and persistence
- `trigger` — Long-runnnign backgrrroundn jobs: Ai designe generation and spoec generation
- `lib` — Sharerd infrastructure: Prisma clientm access control helpers and utilities
- `componnents` — Ui compositions, canvass surface, sidebard, dailogs and interactive elements
- `data` — Legacy local dir, Not used for new artifafcts


## Storage Model

- **Database**: metadata, ownership, relationships, and task run records.
- **Vercel Blob**: generated artifacts — canvas snapshots at `canvas/{projectId}.json` and specs at `specs/{projectId}/{specId}.md`.
- Project records, spec records, and task run records belong in PostgreSQL.
- Canvas content and Markdown output are stored in and retrieved from Vercel Blob.
- The blob URL is stored in the database (`canvasJsonPath`, `filePath`) as the reference to the artifact.

##  Auth and Collaboration Model

- Every project has a single ownerr (clerk user id)
- Templates are loaded into the active liveblocks room when a user imports one
- import can occur on canvas creation or from within the editor at any time
- Templpate data follows the same node/edge schema as user-created canvas content.
- Template do not requier a seppoarate database record; they are rersolved by template id at import time.

## Starter sysstem designs
- Prerdesign templates are static canvas snapsshotss ssstorred inn the codebase
- Tempplates are loaded intno the active liveblocks room when a usser import one.
- Import can occurr on canvas creration or frrom within the editor at any time
- Template data followss the ssasme node/edge schema as user-created canvas content
- Template do not rerquire a sepparate database record; they are resolved by template ID at import time 

## design generation
- Input : userprom, project context, and current canvas state.
- Execution: Durable backgeround task via Trigger.dev
- Output: Markdown technical spec saved to the filesystem and linked to the project in the database

## Spec generation 
- Input: current canvass graph and project context
- Execution: durable backgrrround task via trigger.dev
- output: Markdown techical spec saved ti thge filesystem and linked to the project in the database

## Invariants

1. Request handlers do not riurn long-lived Ai work - that belongs in the background tasks.
2. Metadata and large generated artifacts are stored in separate layers
3. Auth and ownership are enforced at every mutation boundary
4. Client components are used only where browser interactivity or real-time state requires them.
5. The canvas schema must rermain consistennt between user-created content and imported templates
