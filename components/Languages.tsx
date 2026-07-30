"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { languages } from "@/data/skills";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function Languages() {
  return (
    <section id="languages" className="section-container py-28">
      <SectionHeading eyebrow="Fluency" title="Languages" />

      <motion.div
        variants={staggerContainer(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-12 max-w-xl divide-y divide-border border-y border-border"
      >
        {languages.map((lang) => (
          <motion.div
            key={lang.name}
            variants={fadeUp}
            className="flex items-baseline justify-between py-4"
          >
            <span className="font-heading text-xl text-primary">
              {lang.name}
            </span>
            <span className="text-sm text-secondary">{lang.level}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
