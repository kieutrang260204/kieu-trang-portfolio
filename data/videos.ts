// ---------------------------------------------------------------------------
// VIDEO DATA
// ---------------------------------------------------------------------------
// This is the only file you need to edit to add or remove videos.
//
// HOW TO ADD A LOCAL VIDEO (file you're hosting yourself):
// 1. Put the video file in /public/videos
// 2. Put a matching thumbnail/poster image in /public/video-thumbnails
//    (WebP or JPEG, ideally under 500 KB)
// 3. Copy one object below and set `video` to the local path (starts with "/").
//
// Example:
// {
//   title: "Product Launch Reel",
//   thumbnail: "/video-thumbnails/reel-01.webp",
//   video: "/videos/reel-01.mp4",
//   platform: "Local",
// },
//
// HOW TO ADD AN EXTERNAL VIDEO (TikTok, Instagram, YouTube, Google Drive...):
// 1. Put just a thumbnail image in /public/video-thumbnails (a screenshot or
//    exported cover image works fine).
// 2. Set `video` to the full URL of the post/video. Any link that does NOT
//    start with "/" is treated as external and opens in a new tab when
//    clicked, instead of playing inline — this avoids pulling in a heavy
//    platform embed script just to preview one clip.
//
// Example:
// {
//   title: "Behind the Scenes",
//   thumbnail: "/video-thumbnails/bts-cover.webp",
//   video: "https://www.tiktok.com/@yourhandle/video/1234567890",
//   platform: "TikTok",
// },
//
// `platform` is optional — it's shown as a small label on the thumbnail
// (e.g. "TikTok", "Instagram", "YouTube", "Google Drive", "Local").
// ---------------------------------------------------------------------------

export interface VideoItem {
  title: string;
  thumbnail: string;
  video: string;
  platform?: string;
}

export const videoItems: VideoItem[] = [
  // {
  //   title: "Product Launch Reel",
  //   thumbnail: "/video-thumbnails/reel-01.webp",
  //   video: "/videos/reel-01.mp4",
  //   platform: "Local",
  // },
  // {
  //   title: "Behind the Scenes",
  //   thumbnail: "/video-thumbnails/bts-cover.webp",
  //   video: "https://www.tiktok.com/@yourhandle/video/1234567890",
  //   platform: "TikTok",
  // },
];
