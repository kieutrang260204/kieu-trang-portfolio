"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types/project";
import { fadeUp } from "@/lib/animations";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <motion.div layout variants={fadeUp} exit={{ opacity: 0, y: 12 }}>
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="group block w-full overflow-hidden rounded-2xl border border-border bg-card text-left transition-all duration-400 hover:-translate-y-1.5 hover:border-accent hover:shadow-[0_20px_45px_-20px_rgba(216,195,165,0.25)]"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-accent">
            {project.category}
          </p>
          <h3 className="font-heading text-2xl font-medium text-primary">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-secondary">
            {project.summary}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
            View Project
            <ArrowUpRight
              size={16}
              className="transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </button>
    </motion.div>
  );
}
