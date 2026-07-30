"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillTag from "@/components/ui/SkillTag";
import { skillsList } from "@/data/skills";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function Skills() {
  return (
    <section id="skills" className="section-container py-28">
      <SectionHeading eyebrow="Capabilities" title="Skills" />

      <motion.div
        variants={staggerContainer(0.03)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-12 flex flex-wrap gap-3"
      >
        {skillsList.map((skill) => (
          <motion.div key={skill} variants={fadeUp}>
            <SkillTag label={skill} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
