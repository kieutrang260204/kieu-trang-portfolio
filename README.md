# KieuTrang — Portfolio Website

A single-page portfolio for **KieuTrang (Nguyen Thi Kieu Trang)**, Digital Marketing Specialist, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion — following the project's Design Brief and Website Content documents.

## Tech Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling, tokenized to the brand palette
- **Framer Motion** for scroll reveals, hover lifts, and the project filter/modal transitions
- **Lucide React** for icons

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

> **Note on fonts:** This project uses `next/font/google` to load Cormorant Garamond and Manrope. `npm run build` needs internet access to `fonts.googleapis.com` the first time it runs (fonts are then self-hosted automatically in the output — no runtime calls to Google). If you build behind a restrictive firewall/proxy and it fails to fetch fonts, either allow that domain temporarily or swap the two `next/font/google` imports in `app/layout.tsx` for local font files via `next/font/local`.

### 4. Deploy

The project deploys cleanly to **Vercel** (recommended, zero config) or **Netlify** (`@netlify/plugin-nextjs`). Push to a Git repo and import it on either platform, or run their CLI (`vercel` / `netlify deploy`) from this folder.

## Project Structure

```
app/            Routes, root layout, global styles
components/     UI sections (Navbar, Hero, About, Skills, SoftwareTools, Languages,
                 Experience, Projects, Photography, Video, Contact, Footer)
components/ui/  Small reusable pieces (Button, SkillTag, SectionHeading)
components/projects/  Filter, card, and detail-modal components for the Projects section
data/           Content: projects.ts, experience.ts, skills.ts, photography.ts,
                 videos.ts, site.ts (contact info incl. Instagram/TikTok)
lib/            Framer Motion animation variants
types/          Shared TypeScript types
public/         Images, CV PDF, favicon, Open Graph image,
                 photography/, videos/, video-thumbnails/
```

### Page section order

Hero → About → Skills → Software & Tools → Languages → Experience → Projects → Photography → Video → Contact → Footer.

The top nav links to About, Experience, Projects, Photography, Video, and Contact only — Skills, Software & Tools, and Languages are reached by scrolling from About, keeping the nav short and recruiter-friendly.

## Updating Photography & Video (no code changes needed)

Both sections read entirely from two data files. You never need to touch a component to add, remove, or reorder media — just edit the array and the section updates automatically (including switching off the "coming soon" placeholder the moment the array isn't empty).

### Photography

| Step | What to do |
|---|---|
| 1. Place the file | Put the image in **`public/photography/`** |
| 2. Edit the data | Open **`data/photography.ts`** and copy one commented-out example object into the array |
| 3. Fields | `image` (required, path starting with `/photography/...`), `title` (optional caption, shown on hover and in the lightbox), `category` (optional — only used to power the filter buttons; omit it everywhere to hide the filter entirely) |

```ts
{ image: "/photography/photo-01.webp", title: "Golden Hour Street", category: "Street" },
```

The grid always requests a small, responsive **thumbnail** size via `next/image`'s `sizes` prop (lazy-loaded, so off-screen photos don't load until scrolled near). Clicking a thumbnail opens a lightbox that requests the same file at a larger size — there's no separate "full-res" file to manage, `next/image` generates the right size for each context automatically.

### Video

| Step | What to do |
|---|---|
| 1. Place the thumbnail | Put a cover image in **`public/video-thumbnails/`** (required for every video, local or external) |
| 2. Place the file (local only) | If self-hosting the clip, put it in **`public/videos/`** |
| 3. Edit the data | Open **`data/videos.ts`** and copy one commented-out example object into the array |
| 4. Fields | `title` (required), `thumbnail` (required, path starting with `/video-thumbnails/...`), `video` (required — see below), `platform` (optional label like "TikTok", "YouTube", "Local") |

**Local file** — set `video` to a path starting with `/videos/...`. Nothing loads until the visitor clicks the thumbnail; the actual `<video>` element (and its file) only mounts at that point, then plays.

```ts
{ title: "Product Launch Reel", thumbnail: "/video-thumbnails/reel-01.webp", video: "/videos/reel-01.mp4", platform: "Local" },
```

**External link** (TikTok, Instagram, YouTube, Google Drive, etc.) — set `video` to the full URL. Clicking the thumbnail opens it in a new tab instead of playing inline. This keeps the page free of third-party embed scripts.

```ts
{ title: "Behind the Scenes", thumbnail: "/video-thumbnails/bts-cover.webp", video: "https://www.tiktok.com/@yourhandle/video/1234567890", platform: "TikTok" },
```

Videos never autoplay on page load, and no video bytes are fetched until a visitor clicks — only the (small, optimized) thumbnail loads up front.

### Recommended formats & sizes

- **Photos:** WebP or AVIF, ideally **under 500 KB** each. Export at roughly 1600–2000px on the long edge — `next/image` handles all further resizing for you.
- **Video thumbnails:** WebP or JPEG, under 500 KB, ideally close to a 9:16 (portrait) crop to match the card layout.
- **Local videos:** MP4 (H.264) is the safest cross-browser choice. Keep clips reasonably short/compressed — anything you'd comfortably post to social media is fine.

### Adding Instagram / TikTok

Open `data/site.ts` and replace the placeholder URLs in `site.contact.instagram` and `site.contact.tiktok` with your real profile links. They already render as clickable cards in the Contact section.

## Editing Content

All text content lives in `data/`, not in the components — update it there and every section re-renders automatically:

- **`data/site.ts`** — name, title, intro, about paragraph, contact details, CV file path
- **`data/experience.ts`** — work history timeline + education
- **`data/skills.ts`** — skill tags, languages, tools
- **`data/projects.ts`** — all 7 projects (cover image, gallery, overview, role, tools, skills, reflection, category)
- **`data/photography.ts`** / **`data/videos.ts`** — see "Updating Photography & Video" above

## Adding a New Project

1. Drop images into a new folder under `public/images/projects/`.
2. Add a new object to the `projects` array in `data/projects.ts` following the existing shape — pick a `category` of `"Professional"`, `"Academic"`, or `"Creative"`.
3. The card grid, filter buttons, and detail modal all update automatically — no component changes needed.

## Notes on Source Content

Content was reconciled from three source documents with the following priority, as directed by the project brief:

1. **Design_Brief.docx** — governs all visual/UX decisions (palette, type, layout, animation)
2. **Website_Content.docx** — governs written content (bio, experience, skills) — used as the source of truth for the Education and current job title
3. **CV (PDF)** — supporting reference, used only to fill in contact details (email, phone, LinkedIn, location) left blank in Website_Content

Academic project covers (MysteryMeal, Serenity Retreat) were rendered from the first page of their source PDFs since no standalone cover images existed. Photography assets were deduplicated from overlapping Google Drive exports (20 source files → 16 unique photos) and the one HEIC file was converted to JPEG for browser compatibility.
