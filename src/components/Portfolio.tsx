import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink, Github, FileText } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useReveal from "@/hooks/use-reveal";
import vehicleTrajectory from "@/assets/vehicle-trajectory.png";
import leitFlashcards from "@/assets/leit-flashcards.png";
import chatgtImage from "@/assets/chatgt.png";
import atlmetrovisImage from "@/assets/atlmetrovis.png";

type Project = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  imageClassName?: string;
  imageHoverClassName?: string;
  description: string;
  impact: string;
  highlights: string[];
  metrics: string[];
  tags: string[];
  category: "AI" | "Data" | "HCI" | "Viz" | "Systems";
  featured?: boolean;
  links: Record<string, string>;
};

const Portfolio = () => {
  const revealRef = useReveal<HTMLDivElement>();
  const [openProjectId, setOpenProjectId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<"All" | Project["category"]>("All");
  const [modalProjectId, setModalProjectId] = useState<number | null>(null);

  const getFirstSentence = (text: string) => {
    const match = text.trim().match(/^(.+?[.!?])(\s|$)/);
    return match ? match[1] : text;
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "Emergency Response CAV Analytics",
      subtitle: "ITS & CAV Lab",
      image: vehicleTrajectory,
      imageAlt: "Visualization of emergency vehicle trajectories over North Avenue Bridge",
      description:
        "Large-scale data pipelines and dashboards for connected vehicle telemetry that support real-time emergency response decisions.",
      impact:
        "Reduced emergency decision time by about 30 percent with reliable, analysis-ready data products.",
      highlights: [
        "Converted live PCAP streams into multi-terabyte, versioned datasets.",
        "Built PyDeck and Altair dashboards for situational awareness.",
        "Designed anomaly detection for emergency routing optimization.",
      ],
      metrics: ["100M+ BSMs", "30% faster decisions", "Multi-TB pipeline"],
      tags: ["Python", "Pandas", "PyDeck", "Altair", "HPC"],
      links: {},
      category: "Data",
      featured: true,
    },
    {
      id: 2,
      title: "Leit - Canvas LTI Flashcards",
      subtitle: "EdTech Research",
      image: leitFlashcards,
      imageAlt:
        "AI-powered spaced repetition flashcard interface showing a study question and feedback options.",
      description:
        "Canvas LTI 1.3 study system with AI-driven flashcards, quizzes, and rubric-guided evaluation.",
      impact:
        "Achieved 85 percent agreement with instructor grading and prepared for scale across 5,000+ students.",
      highlights: [
        "Delivered LTI 1.3 app with 1,000+ flashcards and quizzes.",
        "Built a Python + PostgreSQL backend for robust data management.",
        "Optimized APIs to stay under 200ms p95 latency.",
      ],
      metrics: ["5K+ students", "85% agreement", "<200ms p95"],
      tags: ["Python", "React", "PostgreSQL", "Canvas LTI"],
      links: {
        demo: "https://drive.google.com/file/d/1VbbJK7WuFmNf7sG2uch6thGEfBHOcD1d/view?usp=sharing",
        repo: "https://github.com/asaha96/Leit",
      },
      category: "HCI",
    },
    {
      id: 5,
      title: "Layout AI",
      subtitle: "Layout, Professional Floor Plan Design Platform",
      image: "/lovable-uploads/original.jpg",
      imageClassName: "scale-[1.12]",
      imageHoverClassName: "group-hover:scale-[1.18]",
      imageAlt: "Layout AI web-based floor plan editor interface",
      description:
        "Built at HackGT. AI powered floor plan editor with real time collaboration and intelligent design assistance. A web based floor plan design platform with CAD like precision, Figma like canvas interactions, and an AI assistant for layout creation and suggestions.",
      impact:
        "Helps architects and designers create detailed layouts faster with guided placement, automated generation, and collaborative editing.",
      highlights: [
        "Built a Konva powered 2D canvas with smooth zoom, pan, multi select, and snapping.",
        "Implemented CAD like tools for walls, dimensions, and precise placement with a snap manager.",
        "Added an AI assistant with natural language commands, suggestions, and automated layout generation.",
        "Enabled real time collaboration with live updates, roles, and shareable links using Supabase.",
        "Shipped plan management with versioning and revision history.",
      ],
      metrics: ["HackGT", "Real time collab", "AI assisted layout"],
      tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind", "Konva", "Supabase", "OpenAI", "Mastra", "SQLite", "Zod"],
      links: {
        demo: "https://drive.google.com/file/d/1EijsEQ0MvyZTbC2yIkp7yWwKjCDIaR8N/view?usp=sharing",
        devpost: "https://devpost.com/software/layout-ai",
        repo: "https://github.com/Sectonic/Vene",
      },
      category: "Systems",
    },
    {
      id: 3,
      title: "ChatGT - Local AI Study Assistant",
      subtitle: "Privacy-first AI",
      image: chatgtImage,
      imageAlt: "ChatGT privacy-first AI study assistant interface",
      description:
        "On-device study assistant with dual-mode chat, local RAG, and PDF-to-flashcard workflows.",
      impact:
        "Enables private study support with zero data egress, ready for deployment to 5,000+ GT students.",
      highlights: [
        "Built streaming chat with page-level citations for RAG sessions.",
        "Integrated local models via Ollama for 100 percent privacy.",
        "Shipped flashcard pipelines with Anki exports for learners.",
      ],
      metrics: ["5K+ students", "100% local", "Streaming RAG"],
      tags: ["React", "TypeScript", "Ollama", "PDF.js", "Supabase", "Local RAG"],
      links: {
        demo: "https://drive.google.com/file/d/1Wc8allTp_IdQYf6Okii8t2Y0ZReQ2wXJ/view?usp=sharing",
      },
      category: "AI",
    },
    {
      id: 4,
      title: "ATLMetroVis - Mobility Inequity Explorer",
      subtitle: "Data Visualization",
      image: atlmetrovisImage,
      imageAlt: "ATLMetroVis dashboard showing Atlanta commute and crash data visualization",
      description:
        "Interactive dashboard that merges commute burdens with crash patterns across the Atlanta metro region.",
      impact:
        "Gives planners and community groups a shared map of inequities and safety hotspots.",
      highlights: [
        "Integrated commute and crash data across 538 cities.",
        "Built linked choropleth, symbol map, and scatterplot views.",
        "Designed tasks for region-level scanning and city drilldowns.",
      ],
      metrics: ["538 cities", "5 years data", "2 datasets"],
      tags: ["Tableau", "Python", "Pandas", "Geospatial Analysis"],
      links: {
        dashboard: "https://drive.google.com/file/d/1eGMIeuGIRABQVb8C2lTqlN2vMjkucv29/view?usp=sharing",
        demo: "https://drive.google.com/file/d/1JIbJbD8Is26EcSnW3WfA1zLrAnCyGgE7/view?usp=sharing",
        writeup:
          "https://docs.google.com/document/d/14j6O590rOv84XYtV5HQhU37G1FThFgIaNa9CXxckbX8/edit?usp=sharing",
      },
      category: "Viz",
    },
  ];

  const categories: Array<"All" | Project["category"]> = ["All", "AI", "Data", "HCI", "Viz", "Systems"];

  const ordered = [...projects].sort((a, b) => {
    const af = a.featured ? 1 : 0;
    const bf = b.featured ? 1 : 0;
    if (af !== bf) return bf - af;
    return a.id - b.id;
  });

  const visibleProjects =
    activeCategory === "All" ? ordered : ordered.filter((p) => p.category === activeCategory);

  const modalProject = projects.find((p) => p.id === modalProjectId) ?? null;

  return (
    <section id="work" className="section">
      <div className="max-w-7xl mx-auto container-padding">
        <div ref={revealRef} className="space-y-12 reveal">
          <div className="space-y-4 max-w-3xl">
            <p className="mono-label">Selected Work</p>
            <h2 className="section-title">Case studies that move real systems.</h2>
            <p className="section-lede">
              Each project pairs technical depth with clear UX outcomes, from emergency response to
              learning systems.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={[
                  "chip transition",
                  activeCategory === cat ? "border-primary/40 text-foreground bg-accent/50" : "",
                ].join(" ")}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-10">
            {visibleProjects.map((project, index) => {
              const reversed = index % 2 === 1;
              const isOpen = openProjectId === project.id;
              const description = isOpen ? project.description : getFirstSentence(project.description);
              return (
                <div key={project.id} className="project-card group">
                  <div className="grid lg:grid-cols-12 gap-8 items-start lg:items-center">
                    <div
                      className={`col-span-12 lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}
                    >
                      <div className="relative overflow-hidden rounded-2xl border border-border">
                        <button
                          type="button"
                          onClick={() => setModalProjectId(project.id)}
                          className="block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                          aria-label={`Open ${project.title} quick view`}
                        >
                          <img
                            src={project.image}
                            alt={project.imageAlt}
                            className={`w-full object-cover transition-transform duration-500 ${
                              project.imageClassName ?? ""
                            } ${project.imageHoverClassName ?? "group-hover:scale-105"}`}
                            loading="lazy"
                            onError={(e) => {
                              // Prevent broken-image UI if a local public/ asset is missing.
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = "/placeholder.svg";
                            }}
                          />
                        </button>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.metrics.map((metric) => (
                          <span key={metric} className="chip">
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div
                      className={`col-span-12 lg:col-span-5 space-y-5 ${
                        reversed ? "lg:order-1" : ""
                      }`}
                    >
                      <p className="mono-label text-[0.6rem]">{project.subtitle}</p>
                      <h3 className="text-3xl lg:text-4xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground">{description}</p>

                      <p className="text-sm text-muted-foreground">
                        <span className="mono-label mr-2 text-[0.6rem]">Impact</span>
                        <span className="text-foreground">{project.impact}</span>
                      </p>

                      <div className="flex flex-wrap gap-3">
                        <button
                          type="button"
                          onClick={() => setOpenProjectId(isOpen ? null : project.id)}
                          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground link-underline"
                          aria-expanded={isOpen}
                          aria-controls={`project-details-${project.id}`}
                        >
                          {isOpen ? (
                            <>
                              <ChevronUp className="h-4 w-4" />
                              Hide details
                            </>
                          ) : (
                            <>
                              <ChevronDown className="h-4 w-4" />
                              View details
                            </>
                          )}
                        </button>
                      </div>

                      {isOpen && (
                        <div id={`project-details-${project.id}`} className="space-y-5">
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {project.highlights.map((highlight) => (
                              <li key={highlight} className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span key={tag} className="chip">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-4 text-sm">
                        {project.links.dashboard && (
                          <a
                            href={project.links.dashboard}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground link-underline"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Dashboard
                          </a>
                        )}
                        {project.links.demo && (
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground link-underline"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Demo
                          </a>
                        )}
                        {project.links.devpost && (
                          <a
                            href={project.links.devpost}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground link-underline"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Devpost
                          </a>
                        )}
                        {project.links.repo && (
                          <a
                            href={project.links.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground link-underline"
                          >
                            <Github className="h-4 w-4" />
                            Repository
                          </a>
                        )}
                        {project.links.writeup && (
                          <a
                            href={project.links.writeup}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground link-underline"
                          >
                            <FileText className="h-4 w-4" />
                            Writeup
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quick view modal */}
      <Dialog
        open={modalProjectId !== null}
        onOpenChange={(open) => {
          if (!open) setModalProjectId(null);
        }}
      >
        <DialogContent className="max-w-3xl">
          {modalProject && (
            <>
              <DialogHeader>
                <DialogTitle>{modalProject.title}</DialogTitle>
                <DialogDescription>{modalProject.subtitle}</DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl border border-border">
                  <img
                    src={modalProject.image}
                    alt={modalProject.imageAlt}
                    className={`w-full object-cover ${modalProject.imageClassName ?? ""}`}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                </div>

                <p className="text-sm text-muted-foreground">{modalProject.description}</p>
                <p className="text-sm text-muted-foreground">
                  <span className="mono-label mr-2 text-[0.6rem]">Impact</span>
                  <span className="text-foreground">{modalProject.impact}</span>
                </p>

                <ul className="space-y-2 text-sm text-muted-foreground">
                  {modalProject.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {modalProject.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 text-sm">
                  {modalProject.links.dashboard && (
                    <a
                      href={modalProject.links.dashboard}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground link-underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Dashboard
                    </a>
                  )}
                  {modalProject.links.demo && (
                    <a
                      href={modalProject.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground link-underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  )}
                  {modalProject.links.devpost && (
                    <a
                      href={modalProject.links.devpost}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground link-underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Devpost
                    </a>
                  )}
                  {modalProject.links.repo && (
                    <a
                      href={modalProject.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground link-underline"
                    >
                      <Github className="h-4 w-4" />
                      Repository
                    </a>
                  )}
                  {modalProject.links.writeup && (
                    <a
                      href={modalProject.links.writeup}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground link-underline"
                    >
                      <FileText className="h-4 w-4" />
                      Writeup
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
