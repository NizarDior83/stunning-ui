"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  showRadialGradient?: boolean;
}

/**
 * Aurora background — a soft animated gradient sweep.
 * Hand-written stand-in inspired by Aceternity's Aurora Background,
 * so you have a working hero backdrop before installing any registry.
 */
export function AuroraBackground({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center bg-background text-foreground transition-bg",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `pointer-events-none absolute -inset-[10px] opacity-50 blur-[10px] will-change-transform
            [--aurora:repeating-linear-gradient(100deg,#3b82f6_10%,#a855f7_15%,#22d3ee_20%,#818cf8_25%,#c084fc_30%)]
            [--dark-gradient:repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)]
            [background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%] [background-position:50%_50%,50%_50%]
            after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference
            after:content-[""] after:animate-aurora`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`
          )}
        />
      </div>
      {children}
    </div>
  );
}
