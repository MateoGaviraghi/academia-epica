import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "muted" | "gradient";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-background",
      muted: "bg-neutral-100/80",
      gradient: "bg-gradient-to-b from-background via-muted/20 to-background",
    };

    return (
      <section
        ref={ref}
        className={cn("py-20 md:py-28 lg:py-32", variants[variant], className)}
        {...props}
      />
    );
  }
);

Section.displayName = "Section";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  centered?: boolean;
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, centered = true, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "mb-12 md:mb-16 space-y-4",
        centered && "text-center mx-auto max-w-3xl",
        className
      )}
      {...props}
    />
  )
);

SectionHeader.displayName = "SectionHeader";

const SectionTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight",
      className
    )}
    {...props}
  />
));

SectionTitle.displayName = "SectionTitle";

const SectionDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-lg text-muted-foreground max-w-2xl mx-auto", className)}
    {...props}
  />
));

SectionDescription.displayName = "SectionDescription";

export { Section, SectionHeader, SectionTitle, SectionDescription };
