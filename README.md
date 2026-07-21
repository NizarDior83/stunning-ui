# stunning-ui

A component playground wired to **shadcn** and three free, no-API-key animated
registries: **Magic UI**, **Aceternity UI**, and **Cult UI**.

Built with Next.js 16 · React 19 · Tailwind CSS v3 · shadcn.

## Quick start

```bash
npm install
npm run dev
# open http://localhost:3000
```

## What's already set up

| Piece | Where | Notes |
|-------|-------|-------|
| shadcn config | `components.json` | style `new-york`, CSS variables, `@/*` aliases |
| Three registries | `components.json` → `registries` | `@magicui`, `@aceternity`, `@cult` |
| shadcn MCP server | `.mcp.json` | browse/add components from your editor — no API key |
| Tailwind theme | `tailwind.config.ts` | shadcn tokens + `aurora` / `marquee` / `shimmer` keyframes |
| Demo components | `src/components/` | hand-built Aurora background, Bento grid, Marquee |

## Adding components

The registries are namespaced, so install any item with `@registry/name`:

```bash
# Magic UI  — https://magicui.design
npx shadcn@latest add @magicui/marquee
npx shadcn@latest add @magicui/animated-beam

# Aceternity UI — https://ui.aceternity.com
npx shadcn@latest add @aceternity/bento-grid
npx shadcn@latest add @aceternity/background-beams

# Cult UI — https://cult-ui.com
npx shadcn@latest add @cult/texture-card

# Browse what a registry offers
npx shadcn@latest search @aceternity
npx shadcn@latest view @magicui/marquee
```

## MCP server (browse components from Claude Code / Cursor / etc.)

`.mcp.json` registers the shadcn MCP server:

```json
{
  "mcpServers": {
    "shadcn": { "command": "npx", "args": ["shadcn@latest", "mcp"] }
  }
}
```

**Restart your editor** after opening this project so the MCP server loads, and
approve the project-scoped `shadcn` server when prompted. Then just ask it to
list or preview components from `@magicui`, `@aceternity`, or `@cult`.

## Notes

- **Tailwind v3 on purpose.** These third-party registries mostly target
  Tailwind v3 (they inject keyframes into `tailwind.config.ts`). If you later
  migrate to v4, expect to reconcile a few component animations by hand.
- **Verify registry URLs.** If a `shadcn add` 404s, open the registry URL in a
  browser and confirm the item path in `components.json` is still current.
- Shared deps (`framer-motion`, `clsx`, `tailwind-merge`, `lucide-react`,
  `tailwindcss-animate`) are already installed; `shadcn add` pulls any extras.
