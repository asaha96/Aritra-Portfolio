import { Compass, Layers, Sparkles } from "lucide-react";
import useReveal from "@/hooks/use-reveal";

const About = () => {
  const revealRef = useReveal<HTMLDivElement>();

  const roles = [
    {
      title: "ITS & CAV Lab",
      role: "Research Assistant",
      detail: "Connected vehicle analytics, emergency response pipelines, and data visualization.",
    },
    {
      title: "AI Makerspace Nexus",
      role: "Data Science Lead",
      detail: "HPC workflows, UI prototypes, and privacy-preserving AI tools for campus research.",
    },
    {
      title: "Canvas LTI Research",
      role: "EdTech Builder",
      detail: "AI-driven flashcards, grading support, and study tools for thousands of learners.",
    },
  ];

  const focusAreas = ["HCI", "Human-centered AI", "Data Systems", "ML Evaluation", "Visualization"];

  return (
    <section id="profile" className="section bg-surface">
      <div ref={revealRef} className="max-w-7xl mx-auto container-padding reveal">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <p className="mono-label">Profile</p>
              <h2 className="section-title">Designing systems with measurable impact.</h2>
              <p className="section-lede">
                I am a BS/MS Computer Science student at Georgia Tech focused on human-computer
                interaction and AI. I care about systems that feel clear to use, honest in their
                results, and stable at scale.
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                In the Intelligent Transportation Systems and CAV Lab, I build pipelines and
                analytics for emergency response studies. At the NVIDIA AI Makerspace Nexus, I
                lead data science workflows and interface work for high-performance computing.
              </p>
              <p>
                I also contribute to educational technology research with Dr. David Joyner,
                designing AI-driven tools for Canvas that help students study, practice, and get
                feedback faster.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {focusAreas.map((area) => (
                <span key={area} className="chip">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 space-y-6 lg:-mt-6">
            <div className="card p-6 space-y-6">
              <div className="flex items-center gap-3">
                <Compass className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Current Nodes</h3>
              </div>
              <div className="space-y-4">
                {roles.map((role) => (
                  <div key={role.title} className="border-t border-border/70 pt-4 first:border-t-0 first:pt-0">
                    <p className="mono-label text-[0.6rem]">{role.role}</p>
                    <p className="font-medium text-foreground">{role.title}</p>
                    <p className="text-sm text-muted-foreground">{role.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Layers className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Leadership</h3>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>Executive Director, SAILea</p>
                <p>Teaching Assistant, PSYC 3040</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="h-4 w-4 text-primary" />
                Building AI communities that make learning feel human.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
