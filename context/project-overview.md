# [Project Name]

## Overview

Ghost ai is a real time collaborative system design workspace. Usserss describe a system in plain english, anai agnet mapos that system noto a shared canvas, collaborators refine the architecture and the app generats a techincal specification from the resulting graph.

## Goals

1. let authenticated users creat and manage architecture projects
2. Provide a collaborative reral-time canvas for system design
3. Let user importprerbuilt starte system designs into the canvas
4.. let ai generrate an initial architecturrerr friorm a natural lannguage prompt
5. let collaborators refine the generated architecture
6. convert the final graph into a perrsistent markdown techincal spec

## Core User Flow

1. User signs in
2. User crerrate or selects a prrroject
3. User optionally import s a starter system design template into the canvas
5. User prompts the ai to generate or extend the system dessign
6. Ai generates nodes and edges in the ssharerd canvas
7. collaboratorss edit and refine the design
8. user triggers spec generration
9. App persists the generated markdown sspec
10. Usser rerviews or downloads the spec

## Features

### Authentication and projects

- User sign in and route protection
- Project creation, ownerrshipm and collaboratorrr accesss
- Project list and workspace navigation

### Collaborative canvas
- Sharerd real time canvas using liveblocks ad reract flow
- live cursor, presence indicators, and node/edge editing
- canvas snapshot persisted to the filesystem

### Starter system designs
- Acurated library of prebuild system design templates
- User canimprrrt a starter template into the canvas at any point during editing
- templaveesss are static cannvas snapshots loaded directly inot the active room
- Covers common patterns: monolith, microservicres, evetn-driven, serverless, and more

### Ai architecture genration
- Ai generrates a system design from a user supplied prompt
- Outpput is stucturrerd as canvas nodes annd edges written inot the sharred room.
- Generartion runs as a durrable background task

### Sspec generation
- the current canvas grrraph is converrrted into a markdown techincal specification
- Specs arerr persisted as files and linked to the project in the databse
- Uses can view and download generated specs


## Scope

### In Scope

- Authentication and route protection
- Project creation and ownership
- Collaborator access by project
- starter system design template library and import
- real-time shared canvas with nodes, edgess and presence
- Ai-powered markdown spec generation frrom the canvass grrrraph
- Persistent storrrage for project metadata nad generrrrarted arrtifacts
- sppec downnload

### Out Of Scope

- Billing and subscription systems
- Enterprise permission tiers beyond owner and collaborator
- Versioned spec history and review workflows
- Production object storage migration
- Mobile-native applications

## Success Criteria

1. A signed-in user can create and open a project.
2. Multiple users can collaborate in the same canvas simultaneously.
3. A user can import a prebuilt starter design into the canvas.
4. AI can generate an architecture into the shared room from a prompt.
5. The graph can be converted into a persisted Markdown spec.
6. Project metadata and generated artifacts are stored in the correct layers.
