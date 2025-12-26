import { ArrowUpRight, Download, GraduationCap, Briefcase } from "lucide-react";
import useReveal from "@/hooks/use-reveal";
const Resume = () => {
  const revealRef = useReveal<HTMLDivElement>();

  const resumeUrl = "https://drive.google.com/file/d/1kZSNtotDEGhUF048QgLn5tU8EM9Z2PH_/view?usp=sharing";

  const experience = [
    {
      period: "Recent",
      role: "Software Engineering Intern",
      org: "Siemens",
      detail:
        "Full-stack feature delivery, testing/QA, and shipping improvements that held up in production.",
    },
    {
      period: "Current",
      role: "Executive Director",
      org: "SAILea",
      detail:
        "Program design, operations, and community leadership for student AI learning initiatives.",
    },
    {
      period: "Current",
      role: "Teaching Assistant",
      org: "PSYC 3040",
      detail:
        "Course support via office hours, feedback, and learner-facing materials focused on clarity and outcomes.",
    },
  ];

  const education = [
    {
      period: "2025-2027",
      degree: "MS Computer Science",
      focus: "Georgia Tech, ML concentration",
    },
    {
      period: "2023-2026",
      degree: "BS Computer Science",
      focus: "Georgia Tech, HCI + AI concentrations",
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="max-w-7xl mx-auto container-padding">
        <div ref={revealRef} className="space-y-12 reveal">
          <div className="space-y-4 max-w-3xl">
            <p className="mono-label">Experience</p>
            <h2 className="section-title">Work outside the case studies.</h2>
            <p className="section-lede">
              Non-project work: internships, leadership, and teaching focused on shipping and
              community outcomes.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-6 md:border-l md:border-foreground/20 md:pl-6">
                {experience.map((item) => (
                  <div key={item.org} className="space-y-2">
                    <p className="mono-label text-[0.6rem]">{item.period}</p>
                    <div className="flex items-start gap-3">
                      <Briefcase className="h-4 w-4 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-foreground">{item.role}</p>
                        <p className="text-sm text-muted-foreground">{item.org}</p>
                        <p className="text-sm text-muted-foreground">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="card p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <div className="space-y-4">
                  {education.map((item) => (
                    <div key={item.degree} className="border-t border-border/70 pt-4 first:border-t-0 first:pt-0">
                      <p className="mono-label text-[0.6rem]">{item.period}</p>
                      <p className="font-medium text-foreground">{item.degree}</p>
                      <p className="text-sm text-muted-foreground">{item.focus}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card p-6 space-y-4">
                <p className="mono-label">Resume</p>
                <p className="text-sm text-muted-foreground">
                  One-page snapshot with the full project list, publications, and tools.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="https://drive.google.com/uc?export=download&id=1kZSNtotDEGhUF048QgLn5tU8EM9Z2PH_" 
                    className="button-primary"
                  >
                    Download PDF
                    <Download className="h-4 w-4" />
                  </a>
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-ghost"
                  >
                    View in new tab
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
