"use client";

import { cn } from "@/lib/utils";
import { skillIconMap } from "@/lib/data";

interface SkillTagProps {
  label: string;
  className?: string;
}

export function SkillTag({ label, className }: SkillTagProps) {
  const iconClass = skillIconMap[label];

  return (
    <span
      className={cn(
        "group/skill inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium",
        "rounded-sm border border-border/60 bg-muted/60 text-muted-foreground",
        "transition-colors hover:bg-primary/10 hover:text-primary hover:border-primary/30",
        className
      )}
    >
      {iconClass && (
        <i
          className={cn(
            iconClass,
            "text-sm transition-all duration-300",
            "grayscale group-hover/skill:grayscale-0 opacity-60 group-hover/skill:opacity-100"
          )}
        />
      )}
      {label}
    </span>
  );
}
