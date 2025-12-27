import { ArrowUpRight, GraduationCap, Briefcase } from "lucide-react";
import { motion } from "motion/react";
import useReveal from "@/hooks/use-reveal";
import { useEffect, useRef, useState } from "react";
const Resume = () => {
  const revealRef = useReveal<HTMLDivElement>();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [showResumeCta, setShowResumeCta] = useState(false);

  const resumeUrl =
    "https://drive.google.com/file/d/1yDwr-FbBHqGku06XtcbfSRbJDBkX75Eg/view?usp=sharing";

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

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setShowResumeCta(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        setShowResumeCta(entry.isIntersecting);
      },
      { threshold: 0.2, rootMargin: "0px 0px -35% 0px" },
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="section">
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
                {experience.map((item, index) => (
                  <motion.div
                    key={`${item.org}-${item.role}`}
                    className="space-y-2"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35, margin: "0px 0px -20% 0px" }}
                    transition={{
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.09,
                    }}
                  >
                    <p className="mono-label text-[0.6rem]">{item.period}</p>
                    <div className="flex items-start gap-3">
                      <Briefcase className="h-4 w-4 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-foreground">{item.role}</p>
                        <p className="text-sm text-muted-foreground">{item.org}</p>
                        <p className="text-sm text-muted-foreground">{item.detail}</p>
                      </div>
                    </div>
                  </motion.div>
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
            </div>
          </div>
        </div>
      </div>

      {/* Floating resume CTA (appears near Experience) */}
      <div
        className={[
          "fixed right-4 bottom-4 z-40 transition-all duration-300",
          showResumeCta ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none",
        ].join(" ")}
      >
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary"
        >
          Resume
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};
export default Resume;
