import { Ghost } from "lucide-react";
import type { ReactNode } from "react";

import { ArchitecturePreview } from "@/components/auth/architecture-preview";

const FEATURES = [
  "Describe a system in plain English",
  "AI maps it onto a shared canvas",
  "Refine the architecture together",
  "Generate a technical spec from the graph",
];

/**
 * Sign-in / sign-up frame. Large screens: product panel on the left, Clerk form
 * centered on the right. Small screens: form only.
 */
export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-base text-copy-primary">
      <aside className="hidden flex-[1.15] flex-col justify-between gap-8 border-r border-surface-border bg-surface p-12 lg:flex">
        <div className="flex items-center gap-2">
          <Ghost className="h-6 w-6 text-brand" />
          <span className="text-xl font-semibold tracking-tight">ghost AI</span>
        </div>
        <div className="space-y-5">
          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.1] tracking-tight">
            Design systems together, in real time.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-copy-muted">
            Describe your architecture in plain English. ghost AI draws it on a
            shared canvas, your team refines it live, and the spec writes
            itself.
          </p>
          <p className="inline-flex items-center gap-2 rounded-full border border-surface-border px-4 py-2 text-sm text-copy-secondary">
            <span className="font-mono text-brand">&gt;</span>
            A URL shortener handling 10k req/min
          </p>
        </div>
        <div className="hidden [@media(min-height:820px)]:block">
          <ArchitecturePreview />
        </div>
        <ol className="grid max-w-2xl grid-cols-2 gap-x-8 gap-y-4 text-sm text-copy-secondary">
          {FEATURES.map((feature, index) => (
            <li key={feature} className="flex gap-3">
              <span className="font-mono text-brand">
                {String(index + 1).padStart(2, "0")}
              </span>
              {feature}
            </li>
          ))}
        </ol>
      </aside>
      <main className="flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-md">{children}</div>
      </main>
    </div>
  );
}
