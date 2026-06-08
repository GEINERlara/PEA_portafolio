import type { CollectionEntry } from "astro:content";
import { getPath } from "./getPath";

export type ContentEntry =
  | CollectionEntry<"blog">
  | CollectionEntry<"galleries">;

const isGalleryEntry = (
  entry: Pick<ContentEntry, "collection">
): entry is CollectionEntry<"galleries"> => entry.collection === "galleries";

export const getGallerySlug = (id: string) => id.replace(/\/index(?:\.(?:md|mdx))?$/, "");

// Helper para añadir el BASE_URL a las rutas
export const withBase = (path: string): string => {
  const base = import.meta.env.BASE_URL || "/";
  let url = `${base}${path}`.replace(/\/{2,}/g, "/");
  if (!url.endsWith("/") && !url.includes(".") && !url.includes("#") && !url.includes("?")) {
    url += "/";
  }
  return url;
};

export const getEntryPath = (
  entry: Pick<ContentEntry, "collection" | "id" | "filePath">
) =>
  isGalleryEntry(entry)
    ? withBase(`/galleries/${getGallerySlug(entry.id)}`)
    : withBase(getPath(entry.id, entry.filePath) || "");

export const getEntryPublishedMs = (entry: ContentEntry) => {
  const modDatetime = "modDatetime" in entry.data ? entry.data.modDatetime : null;
  return new Date(modDatetime ?? entry.data.pubDatetime).getTime();
};