export type ProjectCategory = "Professional" | "Academic" | "Creative";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  year?: string;
  summary: string;
  cover: ProjectImage;
  gallery: ProjectImage[];
  overview: string;
  myRole: string[];
  tools: string[];
  skills: string[];
  reflection?: string;
}
