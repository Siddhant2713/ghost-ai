export interface Project {
  id: string;
  name: string;
  slug: string;
  /** Owned projects expose rename/delete; shared ones are read-only in the list. */
  isOwner: boolean;
  /** Display name of the owner, set for shared projects. */
  ownerName?: string;
}

/** Converts a project name into a URL-safe slug. */
export function slugify(name: string): string {
  return name
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Mock data only; replaced once persistence exists. */
export const MOCK_PROJECTS: Project[] = [
  {
    id: "p1",
    name: "Payments Platform",
    slug: "payments-platform",
    isOwner: true,
  },
  { id: "p2", name: "URL Shortener", slug: "url-shortener", isOwner: true },
  { id: "p3", name: "Realtime Chat", slug: "realtime-chat", isOwner: true },
  {
    id: "p4",
    name: "Ride Dispatch",
    slug: "ride-dispatch",
    isOwner: false,
    ownerName: "Priya",
  },
  {
    id: "p5",
    name: "Search Indexer",
    slug: "search-indexer",
    isOwner: false,
    ownerName: "Arjun",
  },
];
