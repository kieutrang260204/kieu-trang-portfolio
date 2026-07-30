import { Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="section-container flex flex-col items-center gap-4 text-center">
        <p className="text-sm text-secondary">
          Designed &amp; Developed by KieuTrang © 2026
        </p>
        <div className="flex items-center gap-5">
          <a
            href={site.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-secondary transition-colors duration-400 hover:text-accent"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${site.contact.email}`}
            aria-label="Email"
            className="text-secondary transition-colors duration-400 hover:text-accent"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
