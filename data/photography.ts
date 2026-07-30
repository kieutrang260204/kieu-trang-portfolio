// ---------------------------------------------------------------------------
// PHOTOGRAPHY DATA
// ---------------------------------------------------------------------------
// This is the only file you need to edit to add or remove photos.
//
// HOW TO ADD A NEW PHOTO:
// 1. Put the image file in /public/photography
//    (WebP or AVIF recommended, ideally under 500 KB)
// 2. Copy one object below, paste it into the array, and update the fields.
//
// Example:
// {
//   image: "/photography/photo-01.webp",
//   title: "Product Photography",
//   category: "Product",
// },
//
// `title` and `category` are both optional — you can omit either one.
// `category` is only used to power the filter buttons above the grid; if you
// leave it off entirely for every photo, the filter buttons won't show.
// ---------------------------------------------------------------------------

export interface PhotographyItem {
  image: string;
  title?: string;
  category?: string;
}

export const photographyItems: PhotographyItem[] = [
  // { image: "/photography/photo-01.webp", title: "Golden Hour Street", category: "Street" },
  // { image: "/photography/photo-02.webp", title: "Studio Product Shot", category: "Product" },
];
