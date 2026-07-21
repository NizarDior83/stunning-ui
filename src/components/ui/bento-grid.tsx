"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[15rem]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  className,
  title,
  description,
  icon,
  children,
}: {
  className?: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-xl",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-400/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />
      {children}
      <div className="relative z-10">
        {icon && <div className="mb-3 text-foreground/80">{icon}</div>}
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </motion.div>
  );
}
