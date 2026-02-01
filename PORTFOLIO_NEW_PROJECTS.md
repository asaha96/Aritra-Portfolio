# New Portfolio Projects — Proposed Content

This document describes the exact content that will be added to the portfolio for **Playproof** and **TerraWatt**, in the same structure as existing projects in `src/components/Portfolio.tsx`.

---

## 1. Playproof

### Data to add to the `projects` array

| Field | Value |
|-------|--------|
| **id** | 7 |
| **title** | Playproof |
| **subtitle** | Game-Based Human Verification |
| **image** | `/lovable-uploads/playproof-hero.png` *(or copy from assets: `Playprooflogo-eba77f61-0654-4c67-9177-46eb10fd0ecd.png` → save as this path in `public/`)* |
| **imageAlt** | Playproof dashboard showing deployments overview and bubble pop verification game preview |
| **description** | Universal, plug-and-play SDK that enables human verification through AI-generated mini-games, with ML-powered behavioral detection and seamless branding. |
| **problem** | Traditional CAPTCHAs are being beaten by models (e.g. YOLOv8, LLM agents at 60–90% accuracy). The "dead internet" of bot activity drives billions in wasted spend and fraud; human verification had to change. |
| **impact** | Defends against 99.9% of attacks in testing, with a universal SDK and full end-to-end system so organizations can deploy branded, game-based verification in minutes. |
| **highlights** | See list below. |
| **metrics** | `["99.9% defense", "10s max game", "Universal SDK"]` |
| **tags** | `["TypeScript", "Three.js", "Next.js", "Convex", "LiveKit", "Woodwide"]` |
| **category** | `"Systems"` |
| **links** | See below. |

#### Highlights (bullet list for “View details”)

- **Fast-paced games:** Simple mini-games (e.g. Bubble Pop, Archery) that require human-like reaction time and movement, built with a Three.js 3D engine.
- **ML-powered detection:** Integrates with Woodwide for anomaly detection using granular movement features (velocity, acceleration, jerk, path efficiency, jitter) to distinguish humans from bots.
- **Smart observability:** Monitors gameplay events and regenerates new games if suspicious patterns are detected; dashboard with live telemetry visualization.
- **Seamless branding:** Customize colors, sprites, and visual elements so verification feels native to the product.
- **Full stack:** Client SDK (TypeScript + Three.js), Next.js backend with Woodwide ML, Convex for deployments and results, and an admin dashboard for managing deployments and viewing attempts.

#### Links

- **demo:** `https://www.youtube.com/watch?v=2GKhTWCBUb4&t=43s`
- **devpost:** `https://devpost.com/software/playproof?ref_content=my-projects-tab&ref_feature=my_projects`
- **repo:** `https://github.com/asaha96/Playproof`

---

## 2. TerraWatt

### Data to add to the `projects` array

| Field | Value |
|-------|--------|
| **id** | 8 |
| **title** | TerraWatt |
| **subtitle** | Solar Planning for Farms |
| **image** | `/lovable-uploads/terrawatt-hero.png` *(or copy from assets: `terawattlogo-dec3e2a5-9825-4dac-bf0a-20310dc93072.png` → save as this path in `public/`)* |
| **imageAlt** | TerraWatt landing page: “See What Your Land Can Power” with Start Planning and Learn More buttons |
| **description** | Plug-and-plan solar simulator for farms: draw your field, set a budget and goal, and get a site-specific crop + solar layout with CAPEX, kWh, and payback—in minutes instead of months. |
| **problem** | Farmers often pay $10k–$50k and wait 4–12 weeks for a feasibility study to learn if solar makes sense on their land. Most aren’t GIS or energy experts and need a plain answer: “Can I add solar without losing my best acres, and will it pay off?” |
| **impact** | Takes farmers from sketch to full hybrid crop + solar layout with payback estimates in one sitting; farmer-controllable layouts and voice-first analytics explain tradeoffs in plain language. |
| **highlights** | See list below. |
| **metrics** | `["2nd Place EnergyHack@GT", "Minutes not months", "Voice-first analytics"]` |
| **tags** | `["React", "Next.js", "TypeScript", "Google Earth Engine", "NASA POWER", "ElevenLabs", "RAG"]` |
| **category** | `"Systems"` |
| **links** | See below. |

#### Highlights (bullet list for “View details”)

- **Digital Twin:** Google Earth Engine + NASA POWER API + RAG for elevation, irradiance, and zoning so site-specific field models respect real constraints and farmer operations.
- **3D simulator:** React + Three.js canvas where crops and solar arrays coexist; fields rendered as blocks, rows, and access paths instead of abstract formulas.
- **Energy Architect:** Heuristic optimization turns goals like “max kWh under $50k” into feasible crop + solar layouts that respect terrain, setbacks, and equipment access.
- **Voice layer (ElevenLabs):** “Interview your land”—spoken questions drive scenario changes with audio explanations synced to the visual layout.
- **Farmer in control:** Lock regions for crops and rerun layouts so the tool feels like a collaborator; compare “Max Output” vs “Cost Optimized” scenarios with clear tradeoffs.

#### Links

- **demo:** `https://www.youtube.com/watch?v=tDP2SVwtaeI`
- **devpost:** `https://devpost.com/software/the-test-test`
- **repo:** `https://github.com/asaha96/EnergyHacks2026`

---

## Summary: Exact `Project` objects (for copy-paste into TSX)

Below is the JavaScript/TS structure you would push into the `projects` array. Image paths assume you place the hero/screenshot images in `public/lovable-uploads/` with the names below (or update paths after copying the provided logo/screenshot assets).

### Playproof

```ts
{
  id: 7,
  title: "Playproof",
  subtitle: "Game-Based Human Verification",
  image: "/lovable-uploads/playproof-hero.png",
  imageAlt: "Playproof dashboard showing deployments overview and bubble pop verification game preview",
  description:
    "Universal, plug-and-play SDK that enables human verification through AI-generated mini-games, with ML-powered behavioral detection and seamless branding.",
  problem:
    "Traditional CAPTCHAs are being beaten by models (e.g. YOLOv8, LLM agents at 60–90% accuracy). The \"dead internet\" of bot activity drives billions in wasted spend and fraud; human verification had to change.",
  impact:
    "Defends against 99.9% of attacks in testing, with a universal SDK and full end-to-end system so organizations can deploy branded, game-based verification in minutes.",
  highlights: [
    "Fast-paced games: Simple mini-games (e.g. Bubble Pop, Archery) that require human-like reaction time and movement, built with a Three.js 3D engine.",
    "ML-powered detection: Integrates with Woodwide for anomaly detection using granular movement features (velocity, acceleration, jerk, path efficiency, jitter) to distinguish humans from bots.",
    "Smart observability: Monitors gameplay events and regenerates new games if suspicious patterns are detected; dashboard with live telemetry visualization.",
    "Seamless branding: Customize colors, sprites, and visual elements so verification feels native to the product.",
    "Full stack: Client SDK (TypeScript + Three.js), Next.js backend with Woodwide ML, Convex for deployments and results, and an admin dashboard for managing deployments and viewing attempts.",
  ],
  metrics: ["99.9% defense", "10s max game", "Universal SDK"],
  tags: ["TypeScript", "Three.js", "Next.js", "Convex", "LiveKit", "Woodwide"],
  links: {
    demo: "https://www.youtube.com/watch?v=2GKhTWCBUb4&t=43s",
    devpost: "https://devpost.com/software/playproof?ref_content=my-projects-tab&ref_feature=my_projects",
    repo: "https://github.com/asaha96/Playproof",
  },
  category: "Systems",
},
```

### TerraWatt

```ts
{
  id: 8,
  title: "TerraWatt",
  subtitle: "Solar Planning for Farms",
  image: "/lovable-uploads/terrawatt-hero.png",
  imageAlt: "TerraWatt landing page: See What Your Land Can Power with Start Planning and Learn More buttons",
  description:
    "Plug-and-plan solar simulator for farms: draw your field, set a budget and goal, and get a site-specific crop + solar layout with CAPEX, kWh, and payback—in minutes instead of months.",
  problem:
    "Farmers often pay $10k–$50k and wait 4–12 weeks for a feasibility study to learn if solar makes sense on their land. Most aren't GIS or energy experts and need a plain answer: \"Can I add solar without losing my best acres, and will it pay off?\"",
  impact:
    "Takes farmers from sketch to full hybrid crop + solar layout with payback estimates in one sitting; farmer-controllable layouts and voice-first analytics explain tradeoffs in plain language.",
  highlights: [
    "Digital Twin: Google Earth Engine + NASA POWER API + RAG for elevation, irradiance, and zoning so site-specific field models respect real constraints and farmer operations.",
    "3D simulator: React + Three.js canvas where crops and solar arrays coexist; fields rendered as blocks, rows, and access paths instead of abstract formulas.",
    "Energy Architect: Heuristic optimization turns goals like \"max kWh under $50k\" into feasible crop + solar layouts that respect terrain, setbacks, and equipment access.",
    "Voice layer (ElevenLabs): \"Interview your land\"—spoken questions drive scenario changes with audio explanations synced to the visual layout.",
    "Farmer in control: Lock regions for crops and rerun layouts so the tool feels like a collaborator; compare \"Max Output\" vs \"Cost Optimized\" scenarios with clear tradeoffs.",
  ],
  metrics: ["2nd Place EnergyHack@GT", "Minutes not months", "Voice-first analytics"],
  tags: ["React", "Next.js", "TypeScript", "Google Earth Engine", "NASA POWER", "ElevenLabs", "RAG"],
  links: {
    demo: "https://www.youtube.com/watch?v=tDP2SVwtaeI",
    devpost: "https://devpost.com/software/the-test-test",
    repo: "https://github.com/asaha96/EnergyHacks2026",
  },
  category: "Systems",
},
```

---

## Image setup before implementation

1. **Playproof**  
   Use the screenshot you provided (deployments + bubble pop preview) as the hero image. Save it as `public/lovable-uploads/playproof-hero.png` (or `.jpg` and update the path). Alternatively, copy from `.cursor/projects/.../assets/Playprooflogo-eba77f61-0654-4c67-9177-46eb10fd0ecd.png` if you prefer the logo; then reference that path in `image`.

2. **TerraWatt**  
   Use the landing page screenshot (“See What Your Land Can Power”) as the hero image. Save it as `public/lovable-uploads/terrawatt-hero.png` (or `.jpg`). Or use the TerraWatt logo from `.cursor/projects/.../assets/terawattlogo-dec3e2a5-9825-4dac-bf0a-20310dc93072.png` and reference that path.

Once you confirm this content (and image paths), the next step is to add these two objects to the `projects` array in `Portfolio.tsx` and ensure the Demo link uses the existing `project.links.demo` pattern (it’s already supported in the component).
