import { ExternalLink, Github, FileText } from "lucide-react";
import MagneticCard from "@/components/MagneticCard";
import useReveal from "@/hooks/use-reveal";
import vehicleTrajectory from "@/assets/vehicle-trajectory.png";
import leitFlashcards from "@/assets/leit-flashcards.png";
import chatgtImage from "@/assets/chatgt.png";
import atlmetrovisImage from "@/assets/atlmetrovis.png";

const Portfolio = () => {
  const revealRef = useReveal<HTMLDivElement>();

  const projects = [
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
        demo: "https://drive.google.com/file/d/1JIbJbD8Is26EcSnW3WfA1zLrAnCyGgE7/view?usp=sharing",
        writeup:
          "https://docs.google.com/document/d/14j6O590rOv84XYtV5HQhU37G1FThFgIaNa9CXxckbX8/edit?usp=sharing",
      },
    },
  ];

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

          <div className="space-y-10">
            {projects.map((project, index) => {
              const reversed = index % 2 === 1;
              return (
                <MagneticCard key={project.id} className="project-card group">
                  <div className="grid lg:grid-cols-12 gap-8 items-center">
                    <div
                      className={`col-span-12 lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}
                    >
                      <div className="relative overflow-hidden rounded-2xl border border-border">
                        <img
                          src={project.image}
                          alt={project.imageAlt}
                          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
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
                      <p className="text-muted-foreground">{project.description}</p>

                      <div className="border-l-2 border-foreground/20 pl-4 text-sm">
                        <p className="mono-label text-[0.6rem]">Impact</p>
                        <p className="text-foreground">{project.impact}</p>
                      </div>

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

                      <div className="flex flex-wrap gap-4 text-sm">
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
                </MagneticCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
