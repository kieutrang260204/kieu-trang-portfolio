"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import PhotoLightbox from "@/components/media/PhotoLightbox";
import { photographyItems } from "@/data/photography";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function Photography() {
  const [activeCategory, setActiveCategory] = useState<string | "All">("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Only derived if categories are actually provided in the data file —
  // if every photo omits `category`, this stays empty and no filter renders.
  const categories = useMemo(() => {
    const set = new Set(
      photographyItems.map((p) => p.category).filter(Boolean) as string[]
    );
    return Array.from(set);
  }, []);

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? photographyItems
        : photographyItems.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="photography" className="section-container py-28">
      <SectionHeading
        eyebrow="Behind the Lens"
        title="Photography"
        subtitle="A selection of moments, products, and visual details captured through my lens."
      />

      {photographyItems.length === 0 ? (
        <div className="mt-14 rounded-2xl border border-border py-16 text-center">
          <p className="text-base text-secondary">
            Selected photography will be added soon.
          </p>
        </div>
      ) : (
        <>
          {categories.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-3">
              {["All", ...categories].map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    aria-pressed={isActive}
                    className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-400 ${
                      isActive
                        ? "border-accent bg-accent text-bg"
                        : "border-accent bg-transparent text-primary hover:bg-accent/10"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          )}

          <motion.div
            variants={staggerContainer(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          >
            {filtered.map((photo, i) => (
              <motion.button
                key={photo.image}
                type="button"
                variants={fadeUp}
                onClick={() => setLightboxIndex(i)}
                aria-label={photo.title ? `Open photo: ${photo.title}` : "Open photo"}
                className="group relative aspect-square overflow-hidden rounded-xl border border-border"
              >
                <Image
                  src={photo.image}
                  alt={photo.title ?? "Photography"}
                  fill
                  // Grid only ever requests a small, optimized thumbnail size.
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
          </motion.div>

          <PhotoLightbox
            items={filtered}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={setLightboxIndex}
          />
        </>
      )}
    </section>
  );
}
