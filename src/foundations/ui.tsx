import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <p className="text-muted-foreground max-w-[70ch] text-sm">{description}</p>
    </div>
  );
}

export function Section({
  title,
  description,
  children,
  className,
}: {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("flex flex-col gap-4", className)}>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        {description && <p className="text-muted-foreground max-w-[70ch] text-sm">{description}</p>}
      </div>
      {children}
    </section>
  );
}

export function Callout({ children, tone = "info" }: { children: ReactNode; tone?: "info" | "warning" }) {
  return (
    <div
      className={cn(
        "rounded-lg border px-4 py-3 text-sm",
        tone === "info" && "border-border bg-muted/40 text-muted-foreground",
        tone === "warning" && "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-400"
      )}
    >
      {children}
    </div>
  );
}
