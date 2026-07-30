import { ProjectCategory } from "@/types/project";

interface ProjectFilterProps {
  categories: readonly ProjectCategory[];
  active: ProjectCategory | "All";
  onChange: (category: ProjectCategory | "All") => void;
}

export default function ProjectFilter({
  categories,
  active,
  onChange,
}: ProjectFilterProps) {
  const options: (ProjectCategory | "All")[] = ["All", ...categories];

  return (
    <div className="flex flex-wrap gap-3" role="group" aria-label="Filter projects by category">
      {options.map((option) => {
        const isActive = active === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            aria-pressed={isActive}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-400 ${
              isActive
                ? "border-accent bg-accent text-bg"
                : "border-accent bg-transparent text-primary hover:bg-accent/10"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
