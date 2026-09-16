import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeader = ({
  title,
  description,
  className,
}: SectionHeaderProps) => {
  return (
    <div className={cn("mb-8", className)}>
      <h2 className="mb-2 text-3xl font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground max-w-xl">{description}</p>
      )}
    </div>
  );
};