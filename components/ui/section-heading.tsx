import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  centered = false,
  className
}: SectionHeadingProps) {
  return (
    <div className={cn(
      "mb-10", 
      centered && "text-center",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-xl text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}