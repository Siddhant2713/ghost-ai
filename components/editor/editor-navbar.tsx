"use client";

import { UserButton } from "@clerk/nextjs";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import type { Ref } from "react";

import { Button } from "@/components/ui/button";

interface EditorNavbarProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
  /** Ref to the toggle button so callers can restore focus to it. */
  toggleButtonRef?: Ref<HTMLButtonElement>;
}

/**
 * Fixed-height top bar framing every editor screen.
 * The left section holds the sidebar toggle, whose icon and aria label follow
 * `isSidebarOpen`; the center and right sections are reserved for later use.
 */
export function EditorNavbar({
  isSidebarOpen,
  onToggleSidebar,
  toggleButtonRef,
}: EditorNavbarProps) {
  const SidebarIcon = isSidebarOpen ? PanelLeftClose : PanelLeftOpen;

  return (
    <header className="relative z-30 grid h-14 shrink-0 grid-cols-3 items-center border-b border-surface-border bg-surface px-3">
      <div className="flex items-center justify-start">
        <Button
          ref={toggleButtonRef}
          variant="ghost"
          size="icon"
          onClick={onToggleSidebar}
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          aria-expanded={isSidebarOpen}
          className="text-copy-secondary hover:bg-subtle hover:text-copy-primary"
        >
          <SidebarIcon className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex items-center justify-center" />
      <div className="flex items-center justify-end">
        <UserButton />
      </div>
    </header>
  );
}
