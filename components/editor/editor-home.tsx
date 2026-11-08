"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

interface EditorHomeProps {
  onNewProject: () => void;
}

/** Minimal centered home content shown when no project is open. */
export function EditorHome({ onNewProject }: EditorHomeProps) {
  return (
    <main className="relative flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,var(--text-faint)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"
      />
      <h1 className="relative max-w-xl text-3xl font-semibold text-copy-primary">
        Create a project or open an existing one
      </h1>
      <p className="relative max-w-md text-sm text-copy-muted">
        Start a new architecture workspace, or choose a project from the
        sidebar.
      </p>
      <Button className="relative" onClick={onNewProject}>
        <Plus className="h-4 w-4" />
        New Project
      </Button>
    </main>
  );
}
