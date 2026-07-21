"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";
import { motion } from "framer-motion";
import {
  Boxes,
  LayoutGrid,
  MousePointerClick,
  Sparkles,
  Palette,
  Wand2,
} from "lucide-react";

const registries = [
  "Magic UI",
  "Aceternity UI",
  "Cult UI",
  "Animated Beam",
  "Bento Grid",
  "Aurora",
  "Spotlight",
  "Meteors",
  "Marquee",
  "3D Card",
  "Shimmer Button",
  "Wavy Background",
];

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* ---------------- HERO ---------------- */}
      <AuroraBackground className="min-h-[85vh] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            shadcn + 3 free animated registries
          </span>
          <h1 className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
            Build stunning UIs,
            <br /> one command at a time
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            A playground wired to Magic UI, Aceternity UI and Cult UI. Browse the
            registries, then drop in animated heroes, bento grids and backgrounds
            with a single <code className="rounded bg-muted px-1.5 py-0.5 text-sm">shadcn add</code>.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#components"
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Explore components
            </a>
            <a
              href="https://ui.shadcn.com/docs/registry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-card/50 px-6 text-sm font-semibold backdrop-blur transition-colors hover:bg-card"
            >
              Registry docs
            </a>
          </div>
        </motion.div>
      </AuroraBackground>

      {/* ---------------- MARQUEE ---------------- */}
      <section className="border-y border-border bg-background py-6">
        <Marquee pauseOnHover className="[--duration:30s]">
          {registries.map((name) => (
            <div
              key={name}
              className="mx-2 flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-muted-foreground"
            >
              <Palette className="h-4 w-4" />
              {name}
            </div>
          ))}
        </Marquee>
      </section>

      {/* ---------------- BENTO ---------------- */}
      <section id="components" className="mx-auto w-full max-w-6xl px-6 py-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What you can drop in
          </h2>
          <p className="mt-3 text-muted-foreground">
            A taste of the categories available across the three registries.
          </p>
        </div>

        <BentoGrid>
          <BentoCard
            className="md:col-span-2"
            icon={<Boxes className="h-6 w-6" />}
            title="Animated backgrounds"
            description="Aurora, Beams, Meteors, Retro Grid, Ripple, Warp — instant depth for any hero."
          >
            <div className="absolute inset-0 opacity-60">
              <AuroraBackground className="h-full w-full" showRadialGradient={false}>
                <span className="sr-only">Aurora preview</span>
              </AuroraBackground>
            </div>
          </BentoCard>

          <BentoCard
            icon={<Wand2 className="h-6 w-6" />}
            title="Hero sections"
            description="Hero Highlight, Container Scroll, Aurora Text, Sparkles Text."
          />

          <BentoCard
            icon={<MousePointerClick className="h-6 w-6" />}
            title="Interactive buttons"
            description="Shimmer, Rainbow, Shiny, Pulsating, Interactive Hover."
          />

          <BentoCard
            className="md:col-span-2"
            icon={<LayoutGrid className="h-6 w-6" />}
            title="Bento grids & cards"
            description="3D Card, Glare Card, Wobble Card, Animated Testimonials, Infinite Moving Cards."
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-30
              [background-image:linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]
              [background-size:24px_24px]"
              aria-hidden
            />
          </BentoCard>
        </BentoGrid>
      </section>

      {/* ---------------- HOW TO ADD ---------------- */}
      <section className="border-t border-border bg-card/30 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Add more with one command
          </h2>
          <p className="mt-3 text-muted-foreground">
            The three registries are already wired in{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm">components.json</code>.
            Install any component by its namespace:
          </p>
          <pre className="mt-6 overflow-x-auto rounded-xl border border-border bg-background p-5 text-sm leading-relaxed">
            <code>{`# Magic UI
npx shadcn@latest add @magicui/marquee
npx shadcn@latest add @magicui/animated-beam

# Aceternity UI
npx shadcn@latest add @aceternity/bento-grid
npx shadcn@latest add @aceternity/background-beams

# Cult UI
npx shadcn@latest add @cult/texture-card

# Browse a registry
npx shadcn@latest search @aceternity`}</code>
          </pre>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-10 text-center text-sm text-muted-foreground">
        Built with Next.js, Tailwind & shadcn · stunning-ui
      </footer>
    </main>
  );
}
