import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AppDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  /** Dialog body, rendered between the header and the footer. */
  children?: ReactNode;
  /** Footer actions (buttons). Footer is omitted when not provided. */
  footer?: ReactNode;
  className?: string;
}

/**
 * Shared dialog pattern: title, optional description, body, footer actions.
 * Styled with project tokens; feature dialogs compose this component.
 */
export function AppDialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  className,
}: AppDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "rounded-3xl border border-surface-border bg-surface p-6 text-copy-primary ring-0 backdrop-blur sm:max-w-md",
          className
        )}
      >
        <DialogHeader>
          <DialogTitle className="text-base text-copy-primary">
            {title}
          </DialogTitle>
          {description ? (
            <DialogDescription className="text-copy-muted">
              {description}
            </DialogDescription>
          ) : null}
        </DialogHeader>
        {children}
        {footer ? (
          <DialogFooter className="-mx-6 -mb-6 rounded-b-3xl border-t border-surface-border bg-elevated p-4 px-6">
            {footer}
          </DialogFooter>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
