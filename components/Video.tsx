"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { videoItems } from "@/data/videos";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const isLocalVideo = (path: string) => path.startsWith("/");

export default function Video() {
  // Tracks which local video (if any) has been clicked to load — nothing
  // loads or plays until the user clicks a thumbnail.
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const handleClick = (index: number, video: string) => {
    if (isLocalVideo(video)) {
      setPlayingIndex(index);
    } else {
      window.open(video, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="video" className="section-container py-28">
      <SectionHeading
        eyebrow="In Motion"
        title="Video & Short-form Content"
        subtitle="Selected video editing and social media content."
      />

      {videoItems.length === 0 ? (
        <div className="mt-14 rounded-2xl border border-border py-16 text-center">
          <p className="text-base text-secondary">
            Selected video work will be added soon.
          </p>
        </div>
      ) : (
        <motion.div
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {videoItems.map((item, i) => {
            const local = isLocalVideo(item.video);
            const isPlaying = playingIndex === i && local;

            return (
              <motion.div
                key={item.thumbnail + item.title}
                variants={fadeUp}
                className="overflow-hidden rounded-xl border border-border"
              >
                <div className="relative aspect-[9/16] w-full bg-card">
                  {isPlaying ? (
                    // The <video> tag — and its file — only mounts after a
                    // click, so nothing downloads on page load.
                    <video
                      src={item.video}
                      poster={item.thumbnail}
                      controls
                      autoPlay
                      preload="none"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleClick(i, item.video)}
                      aria-label={
                        local
                          ? `Play video: ${item.title}`
                          : `Open on ${item.platform ?? "external site"}: ${item.title}`
                      }
                      className="group relative h-full w-full"
                    >
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-bg/30 transition-colors duration-400 group-hover:bg-bg/40">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-accent bg-bg/70 text-accent">
                          {local ? (
                            <Play size={22} className="ml-0.5" />
                          ) : (
                            <ExternalLink size={20} />
                          )}
                        </span>
                      </span>
                      {item.platform && (
                        <span className="absolute left-3 top-3 rounded-full border border-border bg-bg/80 px-3 py-1 text-xs text-secondary">
                          {item.platform}
                        </span>
                      )}
                    </button>
                  )}
                </div>
                <p className="px-4 py-3 text-sm text-secondary">
                  {item.title}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </section>
  );
}
