"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillTag from "@/components/ui/SkillTag";
import { toolsList } from "@/data/skills";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function SoftwareTools() {
  return (
    <section id="software-tools" className="section-container py-28">
      <SectionHeading eyebrow="Toolkit" title="Software & Tools" />

      <motion.div
        variants={staggerContainer(0.03)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-12 flex flex-wrap gap-3"
      >
        {toolsList.map((tool) => (
          <motion.div key={tool} variants={fadeUp}>
            <SkillTag label={tool} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
