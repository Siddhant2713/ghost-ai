import { MousePointer2 } from "lucide-react";

interface PreviewNodeProps {
  title: string;
  detail: string;
  className: string;
  active?: boolean;
}

function PreviewNode({ title, detail, className, active }: PreviewNodeProps) {
  return (
    <div
      className={`absolute w-28 rounded-xl border px-3 py-2 ${
        active
          ? "border-brand bg-accent-dim"
          : "border-surface-border bg-elevated"
      } ${className}`}
    >
      <p className="text-sm font-medium text-copy-primary">{title}</p>
      <p className="font-mono text-[10px] text-copy-muted">{detail}</p>
    </div>
  );
}

interface PreviewCursorProps {
  label: string;
  className: string;
  tone: "brand" | "ai";
}

function PreviewCursor({ label, className, tone }: PreviewCursorProps) {
  const isBrand = tone === "brand";
  return (
    <div className={`absolute flex items-center gap-1 ${className}`}>
      <MousePointer2
        className={`h-3.5 w-3.5 ${isBrand ? "text-brand" : "text-ai-text"}`}
      />
      <span
        className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
          isBrand ? "bg-brand text-base" : "bg-ai text-copy-primary"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

/**
 * Static, decorative preview of the collaborative canvas shown on the auth
 * screens. Purely presentational: no data, no interaction.
 */
export function ArchitecturePreview() {
  return (
    <div aria-hidden className="h-[378px] w-[588px]">
      <div className="relative h-[270px] w-[420px] origin-top-left scale-[1.4]">
        <svg
          className="absolute inset-0 h-full w-full text-surface-border-subtle"
          fill="none"
          stroke="currentColor"
        >
          <path d="M112 122H148" />
          <path d="M260 122H292" />
          <path d="M260 122H276V22H292" />
          <path d="M276 122V230H292" />
        </svg>
        <PreviewNode
          title="Client"
          detail="web · mobile"
          className="left-0 top-[100px]"
        />
        <PreviewNode
          title="API Gateway"
          detail="rate limit"
          className="left-[148px] top-[100px]"
          active
        />
        <PreviewNode title="Auth" detail="JWT" className="left-[292px] top-0" />
        <PreviewNode
          title="Links API"
          detail="Node · 3 pods"
          className="left-[292px] top-[100px]"
        />
        <PreviewNode
          title="Postgres"
          detail="primary + replica"
          className="left-[292px] top-[200px]"
        />
        <PreviewCursor
          label="Priya"
          tone="ai"
          className="left-[300px] top-[52px]"
        />
        <PreviewCursor
          label="You"
          tone="brand"
          className="left-[170px] top-[152px]"
        />
      </div>
    </div>
  );
}
