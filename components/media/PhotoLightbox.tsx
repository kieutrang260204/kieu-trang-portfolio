"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PhotographyItem } from "@/data/photography";

interface PhotoLightboxProps {
  items: PhotographyItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function PhotoLightbox({
  items,
  index,
  onClose,
  onNavigate,
}: PhotoLightboxProps) {
  const isOpen = index !== null;
  const total = items.length;

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate((index! - 1 + total) % total);
      if (e.key === "ArrowRight") onNavigate((index! + 1) % total);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, index, total, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-bg/95 p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Photo preview"
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={onClose}
            className="absolute right-5 top-5 text-primary transition-colors duration-400 hover:text-accent"
          >
            <X size={28} />
          </button>

          {total > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate((index! - 1 + total) % total);
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-primary transition-colors duration-400 hover:text-accent sm:left-8"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate((index! + 1) % total);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-primary transition-colors duration-400 hover:text-accent sm:right-8"
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
              src={items[index ?? 0].image}
              alt={items[index ?? 0].title ?? "Photography"}
              fill
              sizes="90vw"
              className="object-contain"
              // Full-resolution view only loads once the lightbox opens.
              loading="eager"
            />
          </div>

          {items[index ?? 0].title && (
            <p
              className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-secondary"
              onClick={(e) => e.stopPropagation()}
            >
              {items[index ?? 0].title}
            </p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
