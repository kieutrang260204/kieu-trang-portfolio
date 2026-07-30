import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  download?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  download = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-all duration-400 focus-visible:outline-2 focus-visible:outline-accent";

  const styles =
    variant === "primary"
      ? "bg-accent text-bg hover:bg-accent-hover hover:-translate-y-0.5"
      : "border border-accent text-primary hover:bg-accent hover:text-bg hover:-translate-y-0.5";

  return (
    <a
      href={href}
      className={`${base} ${styles} ${className}`}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      download={download}
    >
      {children}
    </a>
  );
}
