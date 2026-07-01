import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-8 md:mb-12", className)}>
      <div className="flex items-center gap-3 mb-2">
        <div className="h-px w-8 bg-primary" />
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-sm text-muted-foreground max-w-xl mt-1 pl-11">
          {subtitle}
        </p>
      )}
    </div>
  );
}
