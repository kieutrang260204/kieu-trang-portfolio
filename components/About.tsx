"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/data/site";
import { fadeUp, viewportOnce } from "@/lib/animations";

export default function About() {
  return (
    <section id="about" className="section-container py-28">
      <SectionHeading eyebrow="Introduce" title="About Me" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 max-w-2xl"
      >
        <p className="text-lg leading-relaxed text-secondary">
          {site.about}
        </p>
      </motion.div>
    </section>
  );
}
