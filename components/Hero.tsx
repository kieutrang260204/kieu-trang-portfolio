"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
    <section
      id="hero"
      className="section-container flex min-h-screen flex-col-reverse items-center gap-12 pt-32 pb-20 md:flex-row md:gap-16 md:pt-0"
    >
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        animate="show"
        className="flex-1 text-center md:text-left"
      >
        <motion.p
          variants={fadeUp}
          className="mb-4 text-xs uppercase tracking-[0.3em] text-accent"
        >
          {site.title}
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="font-signature text-7xl leading-[1.15] text-primary sm:text-8xl lg:text-9xl"
        >
          {site.name}
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-md text-base leading-relaxed text-secondary md:mx-0"
        >
          {site.intro}
        </motion.p>
        <motion.div
          variants={fadeUp}
          className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start"
        >
          <Button href="#projects">Explore My Work</Button>
          <Button href={site.cvFile} variant="secondary" download>
            Download Resume
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full max-w-xs shrink-0 md:max-w-sm"
      >
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-border">
          <Image
            src={site.profileImage}
            alt={`Portrait of ${site.name}`}
            fill
            priority
            sizes="(max-width: 768px) 320px, 400px"
            className="grayscale-hover object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
