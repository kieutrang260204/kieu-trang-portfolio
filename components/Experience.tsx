"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience, education } from "@/data/experience";
import { fadeUp, viewportOnce } from "@/lib/animations";

export default function Experience() {
  return (
    <section id="experience" className="section-container py-28">
      <SectionHeading eyebrow="Journey" title="Experience" />

      <div className="relative mt-16 ml-2 max-w-2xl border-l border-border pl-8 sm:ml-4">
        {experience.map((item, i) => (
          <motion.div
            key={item.role}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative mb-14 last:mb-0"
          >
            <span className="absolute -left-[38px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent sm:-left-[42px]" />
            <p className="mb-1 text-xs uppercase tracking-[0.2em] text-accent">
              {item.duration}
            </p>
            <h3 className="font-heading text-2xl font-medium text-primary">
              {item.role}
            </h3>
            <p className="text-sm text-secondary">{item.org}</p>
            {item.location && (
              <p className="mb-5 mt-1 text-sm text-secondary">
                {item.location}
              </p>
            )}

            {item.subsections ? (
              <div className="space-y-7">
                {item.subsections.map((subsection) => (
                  <div key={subsection.title}>
                    <h4 className="mb-3 font-heading text-xl font-medium text-primary">
                      {subsection.title}
                    </h4>
                    <ul className="space-y-2">
                      {subsection.responsibilities.map((responsibility) => (
                        <li
                          key={responsibility}
                          className="text-sm leading-relaxed text-secondary"
                        >
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="mt-4 space-y-2">
                {item.responsibilities?.map((responsibility) => (
                  <li
                    key={responsibility}
                    className="text-sm leading-relaxed text-secondary"
                  >
                    {responsibility}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}

        {/* Education */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative"
        >
          <span className="absolute -left-[38px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg sm:-left-[42px]" />
          <p className="mb-1 text-xs uppercase tracking-[0.2em] text-accent">
            Education
          </p>
          <h3 className="font-heading text-2xl font-medium text-primary">
            {education.degree}
          </h3>
          <p className="text-sm text-secondary">{education.school}</p>
          <p className="mt-1 text-sm font-medium text-accent">
            {education.duration}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
