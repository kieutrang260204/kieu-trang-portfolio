export default function SkillTag({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-full border border-border px-4 py-2 text-sm text-secondary transition-colors duration-400 hover:border-accent hover:text-primary">
      {label}
    </span>
  );
}
