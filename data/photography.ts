import { readdirSync } from "node:fs";
import { extname, join } from "node:path";

export interface PhotographyItem {
  image: string;
  title?: string;
  category?: string;
}

const photographyDirectory = join(process.cwd(), "public", "photography");
const supportedExtensions = new Set([
  ".avif",
  ".gif",
  ".jpeg",
  ".jpg",
  ".png",
  ".webp",
]);

/**
 * Build the gallery from the files in /public/photography.
 * Filenames are used verbatim and sorted naturally for predictable ordering.
 */
export const photographyItems: PhotographyItem[] = readdirSync(
  photographyDirectory,
  { withFileTypes: true }
)
  .filter(
    (entry) =>
      entry.isFile() &&
      supportedExtensions.has(extname(entry.name).toLocaleLowerCase())
  )
  .map((entry) => entry.name)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((filename) => ({
    image: `/photography/${filename}`,
  }));
