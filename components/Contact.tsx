"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, MapPin, Instagram } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

interface ContactItem {
  icon?: LucideIcon;
  label: string;
  value: string;
  href?: string;
  external: boolean;
}

const items: ContactItem[] = [
  {
    icon: Mail,
    label: "Email",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
    external: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/trangkieung",
    href: site.contact.linkedin,
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: site.contact.phone,
    href: `tel:${site.contact.phone.replace(/\s+/g, "")}`,
    external: false,
  },
  {
    icon: MapPin,
    label: "Location",
    value: site.contact.location,
    href: undefined,
    external: false,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "Instagram",
    href: site.contact.instagram,
    external: true,
  },
  {
    // Lucide has no dedicated TikTok mark, so this renders as a clean text
    // link instead of adding an icon library just for one glyph.
    label: "TikTok",
    value: "TikTok",
    href: site.contact.tiktok,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-container py-28">
      <SectionHeading eyebrow="Get In Touch" title="Let's Work Together" align="center" />
      <p className="mx-auto mt-6 max-w-xl text-center text-base leading-relaxed text-secondary">
        If you&apos;re looking for someone passionate about digital marketing,
        content creation, and creative problem-solving, I&apos;d love to
        connect.
      </p>

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {items.map(({ icon: Icon, label, value, href, external }) => {
          const content = (
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-400 hover:border-accent">
              {Icon && <Icon size={20} className="shrink-0 text-accent" />}
              <div className="min-w-0 text-left">
                <p className="text-xs uppercase tracking-[0.2em] text-secondary">
                  {label}
                </p>
                <p className="truncate text-sm text-primary">{value}</p>
              </div>
            </div>
          );

          return (
            <motion.div key={label} variants={fadeUp}>
              {href ? (
                <a
                  href={href}
                  aria-label={label}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </motion.div>
          );
        })}
      </motion.div>

      <div className="mt-12 flex justify-center">
        <Button href={`mailto:${site.contact.email}`}>Send Email</Button>
      </div>
    </section>
  );
}
