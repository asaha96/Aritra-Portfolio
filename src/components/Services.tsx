import { Cpu, Layers, Shield, Sparkles } from "lucide-react";
import useReveal from "@/hooks/use-reveal";

const Services = () => {
  const revealRef = useReveal<HTMLDivElement>();

  const principles = [
    {
      icon: Cpu,
      title: "Signal over noise",
      description:
        "Every system ships with metrics, evaluation loops, and proof of impact. If it cannot be measured, it is not finished.",
      tags: ["Telemetry", "Evaluation", "Outcomes"],
    },
    {
      icon: Sparkles,
      title: "Interfaces that earn trust",
      description:
        "Design is the contract between the system and the user. I aim for clarity, speed, and confidence in every flow.",
      tags: ["UX", "Accessibility", "Usability"],
    },
    {
      icon: Layers,
      title: "Pipelines that hold up",
      description:
        "From ingestion to deployment, I build for repeatability, scale, and low-latency experience.",
      tags: ["Data systems", "Automation", "Performance"],
    },
    {
      icon: Shield,
      title: "Privacy by default",
      description:
        "Sensitive data stays close. I favor local inference and safe data handling in every AI workflow.",
      tags: ["Local AI", "Security", "Governance"],
    },
  ];

  return (
    <section id="practice" className="section bg-surface">
      <div className="max-w-7xl mx-auto container-padding">
        <div ref={revealRef} className="space-y-12 reveal">
          <div className="space-y-4 max-w-3xl">
            <p className="mono-label">Practice</p>
            <h2 className="section-title">How I build systems that last.</h2>
            <p className="section-lede">
              A compact operating system for building AI, data, and UX work that can stand up to
              real users and real stakes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {principles.map((principle) => (
              <div key={principle.title} className="card p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full border border-border/55 bg-background/40 flex items-center justify-center">
                    <principle.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{principle.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{principle.description}</p>
                <div className="flex flex-wrap gap-2">
                  {principle.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
