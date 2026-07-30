"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    setLightboxIndex(null);
  }, [project]);

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxIndex !== null) setLightboxIndex(null);
        else onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, lightboxIndex, onClose]);

  if (!project) return null;

  const showLightbox = lightboxIndex !== null;
  const galleryLength = project.gallery.length;

  const goTo = (delta: number) => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + delta + galleryLength) % galleryLength);
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-bg/90 backdrop-blur-sm px-4 py-10 sm:py-16"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-detail-title"
            className="relative w-full max-w-3xl rounded-2xl border border-border bg-card p-6 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-5 top-5 text-secondary transition-colors duration-400 hover:text-accent"
            >
              <X size={24} />
            </button>

            <p className="text-xs uppercase tracking-[0.2em] text-accent">
              {project.category}
              {project.year ? ` · ${project.year}` : ""}
            </p>
            <h3
              id="project-detail-title"
              className="mt-2 font-heading text-3xl font-medium text-primary sm:text-4xl"
            >
              {project.title}
            </h3>

            <p className="mt-5 text-sm uppercase tracking-[0.2em] text-accent">
              Overview
            </p>
            <p className="mt-2 text-base leading-relaxed text-secondary">
              {project.overview}
            </p>

            {project.gallery.length > 0 && (
              <>
                <p className="mt-8 text-sm uppercase tracking-[0.2em] text-accent">
                  Gallery
                </p>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {project.gallery.map((img, i) => (
                    <button
                      key={img.src}
                      type="button"
                      onClick={() => setLightboxIndex(i)}
                      className="relative aspect-square overflow-hidden rounded-lg border border-border transition-all duration-400 hover:border-accent"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="200px"
                        className="object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </>
            )}

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-accent">
                  My Role
                </p>
                <ul className="mt-2 space-y-1.5">
                  {project.myRole.map((r) => (
                    <li key={r} className="text-sm leading-relaxed text-secondary">
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-accent">
                  Tools
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-3 py-1 text-xs text-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-sm uppercase tracking-[0.2em] text-accent">
                  Skills
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border px-3 py-1 text-xs text-secondary"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {project.reflection && (
              <div className="mt-8">
                <p className="text-sm uppercase tracking-[0.2em] text-accent">
                  Reflection
                </p>
                <p className="mt-2 text-base leading-relaxed text-secondary">
                  {project.reflection}
                </p>
              </div>
            )}
          </motion.div>

          {/* Lightbox */}
          {showLightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[70] flex items-center justify-center bg-bg/95 p-4"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(null);
              }}
            >
              <button
                type="button"
                aria-label="Close image"
                onClick={() => setLightboxIndex(null)}
                className="absolute right-5 top-5 text-primary hover:text-accent"
              >
                <X size={28} />
              </button>
              {galleryLength > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Previous image"
                    onClick={(e) => {
                      e.stopPropagation();
                      goTo(-1);
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-primary hover:text-accent sm:left-8"
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button
                    type="button"
                    aria-label="Next image"
                    onClick={(e) => {
                      e.stopPropagation();
                      goTo(1);
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:text-accent sm:right-8"
                  >
                    <ChevronRight size={32} />
                  </button>
                </>
              )}
              <div
                className="relative h-[80vh] w-full max-w-3xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={project.gallery[lightboxIndex!].src}
                  alt={project.gallery[lightboxIndex!].alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
