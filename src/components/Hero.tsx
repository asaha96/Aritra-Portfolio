import { ArrowUpRight } from "lucide-react";
import useReveal from "@/hooks/use-reveal";

const Hero = () => {
  const introRef = useReveal<HTMLDivElement>();
  const metricsRef = useReveal<HTMLDivElement>();

  const metrics = [
    { value: "100M+", label: "BSM records processed" },
    { value: "5K+", label: "student users served" },
    { value: "85%", label: "grading agreement" },
    { value: "30%", label: "faster response decisions" },
  ];

  const now = [
    { label: "Now", value: "BS/MS Computer Science at Georgia Tech" },
    { label: "Labs", value: "ITS & CAV Lab + AI Makerspace" },
    { label: "Focus", value: "HCI, AI, data systems" },
  ];

  return (
    <section id="home" className="section min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div ref={introRef} className="lg:col-span-7 space-y-8 reveal">
            <div className="space-y-4">
              <p className="mono-label">Aritra Saha / Atlanta, GA</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[0.9] text-balance">
                Building AI and data systems that feel inevitable to use.
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                I design the pipeline, the interface, and the story between them. My work lives in
                transportation, education, and privacy-first AI.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#work" className="button-primary">
                View selected work
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="button-ghost">
                Start a collaboration
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <div className="card-floating p-6 space-y-6 lg:-translate-y-4">
              <div className="space-y-2">
                <p className="mono-label">Current</p>
                <p className="text-base font-medium">BS/MS Computer Science at Georgia Tech</p>
                <p className="text-sm text-muted-foreground">
                  Human-centered AI, data systems, and applied research.
                </p>
              </div>
              <div className="h-px bg-foreground/10" />
              <div className="space-y-4">
                {now.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="mono-label w-20 text-[0.65rem]">{item.label}</span>
                    <p className="text-sm text-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          ref={metricsRef}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 reveal"
          style={{ transitionDelay: "120ms" }}
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="signal-card">
              <p className="text-2xl font-semibold text-foreground">{metric.value}</p>
              <p className="mono-label mt-2 text-[0.6rem]">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
