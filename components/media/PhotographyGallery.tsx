"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import PhotoLightbox from "@/components/media/PhotoLightbox";
import Button from "@/components/ui/Button";
import type { PhotographyItem } from "@/data/photography";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const INITIAL_PHOTO_COUNT = 12;

interface PhotographyGalleryProps {
  items: PhotographyItem[];
  vscoUrl: string;
}

export default function PhotographyGallery({
  items,
  vscoUrl,
}: PhotographyGalleryProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | "All">("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = useMemo(() => {
    const values = new Set(
      items.map((photo) => photo.category).filter(Boolean) as string[]
    );
    return Array.from(values);
  }, [items]);

  const filteredItems = useMemo(
    () =>
      activeCategory === "All"
        ? items
        : items.filter((photo) => photo.category === activeCategory),
    [activeCategory, items]
  );

  const hasMorePhotos = filteredItems.length > INITIAL_PHOTO_COUNT;
  const visibleItems = isExpanded
    ? filteredItems
    : filteredItems.slice(0, INITIAL_PHOTO_COUNT);

  const selectCategory = (category: string) => {
    setActiveCategory(category);
    setIsExpanded(false);
    setLightboxIndex(null);
  };

  return (
    <>
      {categories.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-3">
          {["All", ...categories].map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => selectCategory(category)}
                aria-pressed={isActive}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-400 ${
                  isActive
                    ? "border-accent bg-accent text-bg"
                    : "border-accent bg-transparent text-primary hover:bg-accent/10"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      )}

      <div className="relative">
        <motion.div
          layout
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence initial={false}>
            {visibleItems.map((photo, index) => (
              <motion.button
                layout
                key={photo.image}
                type="button"
                variants={fadeUp}
                initial={isExpanded ? "hidden" : undefined}
                animate={isExpanded ? "show" : undefined}
                exit="hidden"
                onClick={() => setLightboxIndex(index)}
                aria-label={
                  photo.title ? `Open photo: ${photo.title}` : "Open photo"
                }
                className="group relative aspect-square overflow-hidden rounded-xl border border-border"
              >
                <Image
                  src={photo.image}
                  alt={photo.title ?? "Photography"}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105"
                  loading="lazy"
                />
                {photo.title && (
                  <span className="absolute inset-x-0 bottom-0 bg-bg/70 px-3 py-2 text-left text-xs text-primary opacity-0 backdrop-blur-sm transition-opacity duration-400 group-hover:opacity-100">
                    {photo.title}
                  </span>
                )}
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {!isExpanded && hasMorePhotos && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-bg via-bg/80 to-transparent"
          />
        )}
      </div>

      {!isExpanded && hasMorePhotos && (
        <div className="relative z-10 -mt-3 flex justify-center">
          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-medium tracking-wide text-bg transition-all duration-400 hover:-translate-y-0.5 hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-accent"
          >
            View All Photos
          </button>
        </div>
      )}

      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 flex justify-center"
        >
          <Button href={vscoUrl} variant="secondary" external>
            View More on VSCO
          </Button>
        </motion.div>
      )}

      <PhotoLightbox
        items={visibleItems}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}
