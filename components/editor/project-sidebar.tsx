"use client";

import { useUser } from "@clerk/nextjs";
import { Ghost, Hexagon, Pencil, Plus, Trash2, X } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";
import { Button } from "@/components/ui/button";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  onCreate: () => void;
  onRename: (project: Project) => void;
  onDelete: (project: Project) => void;
}

interface ProjectItemProps {
  project: Project;
  onRename: (project: Project) => void;
  onDelete: (project: Project) => void;
}

/** Project row; rename/delete render only for owned projects, owner name only for shared ones. */
function ProjectItem({ project, onRename, onDelete }: ProjectItemProps) {
  return (
    <li className="group flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-subtle">
      <Hexagon className="h-4 w-4 shrink-0 text-copy-muted group-hover:text-brand" />
      <span className="min-w-0 flex-1 truncate text-sm text-copy-primary">
        {project.name}
      </span>
      {project.isOwner ? (
        <div className="flex shrink-0 items-center gap-1">
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label={`Rename ${project.name}`}
            onClick={() => onRename(project)}
            className="text-copy-muted hover:text-copy-primary"
          >
            <Pencil className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label={`Delete ${project.name}`}
            onClick={() => onDelete(project)}
            className="text-copy-muted hover:text-destructive"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </Button>
        </div>
      ) : (
        <span className="shrink-0 text-xs text-copy-muted">
          {project.ownerName}
        </span>
      )}
    </li>
  );
}

/**
 * Floating left sidebar with brand header, "Your projects" and "Shared with
 * you" sections and a user footer. Slides over the canvas without pushing
 * content; while closed it is inert and hidden from assistive tech. On mobile
 * a scrim covers the canvas and tapping it calls `onClose`.
 */
export function ProjectSidebar({
  isOpen,
  onClose,
  projects,
  onCreate,
  onRename,
  onDelete,
}: ProjectSidebarProps) {
  const { user } = useUser();
  const owned = projects.filter((p) => p.isOwner);
  const shared = projects.filter((p) => !p.isOwner);
  const displayName =
    user?.firstName?.trim() ||
    user?.username?.trim() ||
    user?.primaryEmailAddress?.emailAddress ||
    "";

  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        className={cn(
          "absolute inset-0 z-10 bg-black/60 transition-opacity duration-200 md:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />
      <aside
        aria-label="Projects"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={cn(
          "absolute inset-y-0 left-0 z-20 flex w-[78%] max-w-80 flex-col border-r border-surface-border bg-surface transition-transform duration-200 ease-out md:w-80",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-14 shrink-0 items-center justify-between border-b border-surface-border px-4">
          <div className="flex items-center gap-2">
            <Ghost className="h-5 w-5 text-brand" />
            <span className="text-base font-semibold text-copy-primary">
              ghost AI
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={onClose}
            aria-label="Close sidebar"
            className="text-copy-muted hover:bg-subtle hover:text-copy-primary"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-3">
          <div className="flex items-center justify-between px-3 py-2">
            <h2 className="text-xs font-semibold tracking-wider text-copy-muted uppercase">
              Your projects
            </h2>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={onCreate}
              aria-label="New project"
              className="text-copy-muted hover:text-copy-primary"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          {owned.length > 0 ? (
            <ul className="flex flex-col gap-1">
              {owned.map((project) => (
                <ProjectItem
                  key={project.id}
                  project={project}
                  onRename={onRename}
                  onDelete={onDelete}
                />
              ))}
            </ul>
          ) : (
            <p className="px-3 py-2 text-xs text-copy-muted">
              No projects yet. Create your first one.
            </p>
          )}

          <h2 className="mt-6 px-3 py-2 text-xs font-semibold tracking-wider text-copy-muted uppercase">
            Shared with you
          </h2>
          {shared.length > 0 ? (
            <ul className="flex flex-col gap-1">
              {shared.map((project) => (
                <ProjectItem
                  key={project.id}
                  project={project}
                  onRename={onRename}
                  onDelete={onDelete}
                />
              ))}
            </ul>
          ) : (
            <p className="px-3 py-2 text-xs text-copy-muted">
              Nothing shared with you yet.
            </p>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-3 border-t border-surface-border p-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-dim text-xs font-semibold text-brand">
            {displayName.charAt(0).toUpperCase()}
          </div>
          <span className="truncate text-sm text-copy-secondary">
            {displayName}
          </span>
        </div>
      </aside>
    </>
  );
}
