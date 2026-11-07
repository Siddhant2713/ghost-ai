"use client";

import { FolderOpen, Plus, Users, X } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface EmptyStateProps {
  icon: ReactNode;
  title: string;
  description: string;
}

/** Centered icon, title and description shown when a tab has no items. */
function EmptyState({ icon, title, description }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 px-4 py-12 text-center">
      <div className="text-copy-faint">{icon}</div>
      <p className="text-sm font-medium text-copy-secondary">{title}</p>
      <p className="text-xs text-copy-muted">{description}</p>
    </div>
  );
}

/**
 * Floating left sidebar listing projects in "My Projects" and "Shared" tabs.
 * Slides over the canvas without pushing content; while closed it is inert and
 * hidden from assistive tech. Calls `onClose` from its header close button.
 */
export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <aside
      aria-label="Projects"
      aria-hidden={!isOpen}
      inert={!isOpen}
      className={cn(
        "absolute inset-y-0 left-0 z-20 flex w-80 max-w-full flex-col border-r border-surface-border bg-surface/95 backdrop-blur transition-transform duration-200 ease-out",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex h-14 shrink-0 items-center justify-between border-b border-surface-border px-4">
        <h2 className="text-sm font-semibold text-copy-primary">Projects</h2>
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

      <Tabs defaultValue="my-projects" className="min-h-0 flex-1 gap-0 p-3">
        <TabsList className="w-full bg-elevated">
          <TabsTrigger value="my-projects">My Projects</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
        </TabsList>
        <TabsContent value="my-projects" className="overflow-y-auto">
          <EmptyState
            icon={<FolderOpen className="h-8 w-8" />}
            title="No projects yet"
            description="Create your first project to get started."
          />
        </TabsContent>
        <TabsContent value="shared" className="overflow-y-auto">
          <EmptyState
            icon={<Users className="h-8 w-8" />}
            title="Nothing shared with you"
            description="Projects others share with you will appear here."
          />
        </TabsContent>
      </Tabs>

      <div className="shrink-0 border-t border-surface-border p-3">
        <Button className="w-full">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>
    </aside>
  );
}
