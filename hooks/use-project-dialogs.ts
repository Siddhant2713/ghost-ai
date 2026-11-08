"use client";

import { useState } from "react";

import { MOCK_PROJECTS, slugify, type Project } from "@/lib/projects";

export type ProjectDialogState =
  | { type: "create" }
  | { type: "rename"; project: Project }
  | { type: "delete"; project: Project }
  | null;

/**
 * Owns the mock project list plus dialog, form and loading state for the
 * create / rename / delete project dialogs. No API calls or persistence.
 */
export function useProjectDialogs() {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
  const [dialog, setDialog] = useState<ProjectDialogState>(null);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const slug = slugify(name);
  const canSubmit = dialog?.type === "delete" || slug.length > 0;

  const openCreate = () => {
    setName("");
    setDialog({ type: "create" });
  };

  const openRename = (project: Project) => {
    setName(project.name);
    setDialog({ type: "rename", project });
  };

  const openDelete = (project: Project) => {
    setDialog({ type: "delete", project });
  };

  const close = () => {
    if (isLoading) return;
    setDialog(null);
    setName("");
  };

  const submit = async () => {
    if (!dialog || !canSubmit || isLoading) return;
    setIsLoading(true);
    try {
      // Mock mutation: swap for an API call when persistence is added.
      await Promise.resolve();
      const trimmed = name.trim();
      if (dialog.type === "create") {
        setProjects((prev) => [
          { id: crypto.randomUUID(), name: trimmed, slug, isOwner: true },
          ...prev,
        ]);
      } else if (dialog.type === "rename") {
        const id = dialog.project.id;
        setProjects((prev) =>
          prev.map((p) => (p.id === id ? { ...p, name: trimmed, slug } : p)),
        );
      } else {
        const id = dialog.project.id;
        setProjects((prev) => prev.filter((p) => p.id !== id));
      }
      setDialog(null);
      setName("");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    projects,
    dialog,
    name,
    setName,
    slug,
    canSubmit,
    isLoading,
    openCreate,
    openRename,
    openDelete,
    close,
    submit,
  };
}

export type ProjectDialogsController = ReturnType<typeof useProjectDialogs>;
