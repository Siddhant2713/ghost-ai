"use client";

import { useRef, useState } from "react";

import { EditorNavbar } from "@/components/editor/editor-navbar";
import { EditorHome } from "@/components/editor/editor-home";
import { ProjectDialogs } from "@/components/editor/project-dialogs";
import { ProjectSidebar } from "@/components/editor/project-sidebar";
import { useProjectDialogs } from "@/hooks/use-project-dialogs";

/**
 * Client-side editor layout: owns the sidebar open state and composes the
 * navbar, the floating project sidebar and the main canvas area.
 */
export function EditorShell() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const projectDialogs = useProjectDialogs();
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  // The sidebar becomes inert once closed, so move focus out of it first.
  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
    toggleButtonRef.current?.focus();
  };

  return (
    <div className="flex h-screen flex-col bg-base text-copy-primary">
      <EditorNavbar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((open) => !open)}
        toggleButtonRef={toggleButtonRef}
      />
      <div className="relative min-h-0 flex-1 overflow-hidden">
        <ProjectSidebar
          isOpen={isSidebarOpen}
          onClose={handleSidebarClose}
          projects={projectDialogs.projects}
          onCreate={projectDialogs.openCreate}
          onRename={projectDialogs.openRename}
          onDelete={projectDialogs.openDelete}
        />
        <EditorHome onNewProject={projectDialogs.openCreate} />
      </div>
      <ProjectDialogs controller={projectDialogs} />
    </div>
  );
}
