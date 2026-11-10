import { dark } from "@clerk/ui/themes";

/**
 * Clerk appearance: the built-in `dark` theme with its variables pointed at the
 * app's CSS custom properties (see `app/globals.css`), so no colors are hardcoded.
 * The sign-in / sign-up card is flattened so the form sits directly on the page.
 */
export const clerkAppearance = {
  theme: dark,
  // Lets Tailwind utilities in `elements` override Clerk (see layer order in globals.css).
  cssLayerName: "clerk",
  options: {
    socialButtonsPlacement: "top",
    socialButtonsVariant: "blockButton",
  },
  variables: {
    colorPrimary: "var(--accent-primary)",
    colorPrimaryForeground: "var(--bg-base)",
    colorBackground: "var(--bg-surface)",
    colorForeground: "var(--text-primary)",
    colorMuted: "var(--bg-surface)",
    colorMutedForeground: "var(--text-muted)",
    colorInput: "var(--bg-surface)",
    colorInputForeground: "var(--text-primary)",
    colorNeutral: "var(--text-primary)",
    colorDanger: "var(--state-error)",
    colorSuccess: "var(--state-success)",
    colorWarning: "var(--state-warning)",
    fontFamily: "var(--font-geist-sans)",
    borderRadius: "var(--radius)",
  },
  elements: {
    rootBox: "w-full",
    cardBox: "w-full max-w-none overflow-visible border-0 bg-transparent shadow-none",
    card: "w-full gap-6 overflow-visible border-0 bg-transparent p-0 shadow-none",
    header: "items-start overflow-visible text-left",
    headerTitle: "overflow-visible text-3xl font-semibold",
    headerSubtitle: "text-base text-copy-muted",
    socialButtons: "grid-cols-1 flex-col",
    socialButtonsBlockButton: "h-12 border-surface-border bg-surface",
    dividerText: "uppercase tracking-widest text-copy-muted",
    formFieldInput: "h-12 border-surface-border bg-surface",
    formButtonPrimary: "h-12 text-base font-medium",
    footer: "bg-transparent",
    footerAction: "justify-center",
  },
};
