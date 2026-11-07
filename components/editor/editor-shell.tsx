"use client";

import { useRef, useState } from "react";

import { EditorNavbar } from "@/components/editor/editor-navbar";
import { ProjectSidebar } from "@/components/editor/project-sidebar";

/**
 * Client-side editor layout: owns the sidebar open state and composes the
 * navbar, the floating project sidebar and the main canvas area.
 */
export function EditorShell() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
        />
        <main className="flex h-full items-center justify-center text-copy-muted">
          ghost ai
        </main>
      </div>
    </div>
  );
}
