"use client";

import { useState, type FormEvent } from "react";

import { AppDialog } from "@/components/shared/app-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type {
  ProjectDialogState,
  ProjectDialogsController,
} from "@/hooks/use-project-dialogs";

interface ProjectDialogsProps {
  controller: ProjectDialogsController;
}

/** Create, rename and delete project dialogs driven by `useProjectDialogs`. */
export function ProjectDialogs({ controller }: ProjectDialogsProps) {
  const { dialog, name, setName, slug, canSubmit, isLoading, close, submit } =
    controller;

  // Keep the last open dialog so titles/labels don't flip during the close animation.
  const [lastDialog, setLastDialog] = useState<ProjectDialogState>(null);
  if (dialog && dialog !== lastDialog) setLastDialog(dialog);
  const shown = dialog ?? lastDialog;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    void submit();
  };

  const isNameDialog = dialog?.type === "create" || dialog?.type === "rename";

  return (
    <>
      <AppDialog
        open={isNameDialog}
        onOpenChange={(open) => {
          if (!open) close();
        }}
        title={shown?.type === "rename" ? "Rename project" : "Create project"}
        description={
          shown?.type === "rename"
            ? `Enter a new name for "${shown.project.name}".`
            : "Give your architecture workspace a name."
        }
        footer={
          <>
            <Button type="button" variant="ghost" onClick={close} disabled={isLoading}>
              Cancel
            </Button>
            <Button
              type="submit"
              form="project-name-form"
              disabled={!canSubmit || isLoading}
            >
              {shown?.type === "rename" ? "Rename" : "Create"}
            </Button>
          </>
        }
      >
        <form
          id="project-name-form"
          onSubmit={handleSubmit}
          className="grid gap-2"
        >
          <Input
            autoFocus
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Project name"
            aria-label="Project name"
            disabled={isLoading}
          />
          <p className="text-xs text-copy-muted">
            Slug: <span className="text-copy-secondary">{slug || "—"}</span>
          </p>
          {name.trim() && !slug ? (
            <p className="text-xs text-state-error">
              Use at least one letter or number so a slug can be generated.
            </p>
          ) : null}
        </form>
      </AppDialog>

      <AppDialog
        open={dialog?.type === "delete"}
        onOpenChange={(open) => {
          if (!open) close();
        }}
        title="Delete project"
        description={
          shown?.type === "delete"
            ? `Are you sure you want to delete "${shown.project.name}"? This action cannot be undone.`
            : undefined
        }
        footer={
          <>
            <Button type="button" variant="ghost" onClick={close} disabled={isLoading}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => void submit()}
              disabled={isLoading}
            >
              Delete
            </Button>
          </>
        }
      />
    </>
  );
}
