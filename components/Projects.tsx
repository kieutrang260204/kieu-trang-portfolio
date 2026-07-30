"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectFilter from "@/components/projects/ProjectFilter";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectDetail from "@/components/projects/ProjectDetail";
import { projects, categories } from "@/data/projects";
import { Project, ProjectCategory } from "@/types/project";
import { staggerContainer, viewportOnce } from "@/lib/animations";

export default function Projects() {
  const [active, setActive] = useState<ProjectCategory | "All">("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  );

  return (
    <section id="projects" className="section-container py-28">
      <SectionHeading eyebrow="Selected Work" title="Projects" />

      <div className="mt-10">
        <ProjectFilter
          categories={categories}
          active={active}
          onChange={setActive}
        />
      </div>

      <motion.div
        variants={staggerContainer(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onOpen={setSelected}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectDetail project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
