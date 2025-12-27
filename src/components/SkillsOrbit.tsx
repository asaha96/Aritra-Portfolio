import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import useReveal from "@/hooks/use-reveal";

type Tech = {
  name: string;
  iconUrl?: string;
  iconClassName?: string;
  label?: string;
  href: string;
};

// Curated from: Languages & Web, AI/ML & Data, Dev Tools & Cloud.
// Icons sourced from Devicon CDN for quick iteration.
const techStack: Tech[] = [
  // Languages & Web
  {
    name: "Java",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    href: "https://www.oracle.com/java/",
  },
  {
    name: "Python",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    href: "https://www.python.org/",
  },
  {
    name: "JavaScript",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "React",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    href: "https://react.dev/",
  },
  {
    name: "Node.js",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    href: "https://nodejs.org/",
  },
  {
    name: "Postgres",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    href: "https://www.postgresql.org/",
  },
  {
    name: "MongoDB",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    href: "https://www.mongodb.com/",
  },
  {
    name: "HTML/CSS",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    href: "https://developer.mozilla.org/en-US/docs/Web",
  },
  {
    name: "C",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    href: "https://en.cppreference.com/w/c",
  },
  {
    name: "C++",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    href: "https://en.cppreference.com/w/",
  },
  { name: "Assembly", label: "ASM", href: "https://en.wikipedia.org/wiki/Assembly_language" },

  // AI/ML & Data
  {
    name: "TensorFlow",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    href: "https://www.tensorflow.org/",
  },
  {
    name: "PyTorch",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    href: "https://pytorch.org/",
  },
  {
    name: "scikit-learn",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
    href: "https://scikit-learn.org/",
  },
  {
    name: "OpenCV",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
    href: "https://opencv.org/",
  },
  { name: "NumPy", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", href: "https://numpy.org/" },
  { name: "Pandas", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", href: "https://pandas.pydata.org/" },
  { name: "RAG", label: "RAG", href: "https://en.wikipedia.org/wiki/Retrieval-augmented_generation" },

  // Dev Tools & Cloud
  { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", href: "https://git-scm.com/" },
  { name: "Docker", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", href: "https://www.docker.com/" },
  {
    name: "Kubernetes",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    href: "https://kubernetes.io/",
  },
  {
    name: "AWS",
    // The `original.svg` asset is missing/unreliable on some CDNs; wordmark is widely available.
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    iconClassName: "h-6 w-auto",
    href: "https://aws.amazon.com/",
  },
  { name: "Azure", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", href: "https://azure.microsoft.com/" },
  {
    name: "VS Code",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    href: "https://code.visualstudio.com/",
  },
  {
    name: "Jupyter",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
    href: "https://jupyter.org/",
  },
];

// Slightly smaller orbit + nodes for tighter layout.
const ORBIT_RADIUS = 205;
const ORBIT_SIZE = 460;
const ROTATION_DURATION_SECONDS = 42;

const SkillsOrbit = () => {
  const revealRef = useReveal<HTMLDivElement>();
  const [hovered, setHovered] = useState<Tech | null>(null);
  const [orbitSize, setOrbitSize] = useState(ORBIT_SIZE);

  useEffect(() => {
    const update = () => {
      // Fit within the viewport on mobile (account for container padding).
      const padding = 48; // ~ 24px left + 24px right
      const next = Math.min(ORBIT_SIZE, Math.max(280, window.innerWidth - padding));
      setOrbitSize(next);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const orbitRadius = (ORBIT_RADIUS / ORBIT_SIZE) * orbitSize;
  const center = orbitSize / 2;
  const points = useMemo(() => {
    return techStack.map((tech, index) => {
      const theta = (index / techStack.length) * Math.PI * 2 - Math.PI / 2;
      const x = Math.cos(theta) * orbitRadius;
      const y = Math.sin(theta) * orbitRadius;
      return { tech, x, y };
    });
  }, [orbitRadius]);

  return (
    <section className="section pt-12 lg:pt-16">
      <div className="max-w-7xl mx-auto container-padding">
        <div ref={revealRef} className="grid lg:grid-cols-12 gap-10 items-center reveal">
          <div className="lg:col-span-5 space-y-4">
            <p className="mono-label">Tools</p>
            <h2 className="section-title">A quick orbit of what I ship with.</h2>
            <p className="section-lede">
              Core languages, frameworks, and infra I use regularly—connected to the center and
              rotating slowly.
            </p>
          </div>

          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="relative">
              <motion.div
                aria-label="Rotating skills orbit"
                className="relative select-none"
                style={{ width: orbitSize, height: orbitSize }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: ROTATION_DURATION_SECONDS,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
              {/* Lines */}
              <svg
                className="absolute inset-0"
                width={orbitSize}
                height={orbitSize}
                viewBox={`0 0 ${orbitSize} ${orbitSize}`}
                aria-hidden="true"
              >
                {points.map(({ tech, x, y }) => (
                  <line
                    key={tech.name}
                    x1={center}
                    y1={center}
                    x2={center + x}
                    y2={center + y}
                    stroke="hsl(var(--foreground) / 0.14)"
                    strokeWidth="1"
                  />
                ))}
              </svg>

              {/* Orbiting nodes */}
              {points.map(({ tech, x, y }) => (
                <div
                  key={tech.name}
                  className="absolute left-1/2 top-1/2"
                  style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
                >
                  {/*
                    Always-on "focus mode":
                    when one icon is hovered/focused, dim the others.
                  */}
                  {(() => {
                    const isActive = hovered?.name === tech.name;
                    const isDimmed = hovered && hovered.name !== tech.name;

                    return (
                  <motion.a
                    href={tech.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${tech.name}`}
                    title={`Open ${tech.name}`}
                    className="group relative block h-10 w-10 sm:h-12 sm:w-12 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-opacity"
                    // Counter-rotate so icons don't spin while the orbit container rotates.
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: ROTATION_DURATION_SECONDS,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                    onMouseEnter={() => setHovered(tech)}
                    onMouseLeave={() => setHovered((curr) => (curr?.name === tech.name ? null : curr))}
                    onFocus={() => setHovered(tech)}
                    onBlur={() => setHovered((curr) => (curr?.name === tech.name ? null : curr))}
                    style={isDimmed ? { opacity: 0.28 } : undefined}
                  >
                    <div className="relative h-full w-full flex items-center justify-center">
                      {tech.iconUrl ? (
                        <img
                          src={tech.iconUrl}
                          alt=""
                          className={tech.iconClassName ?? "h-6 w-6 sm:h-7 sm:w-7"}
                          loading="lazy"
                          draggable={false}
                          style={isActive ? { opacity: 0.35 } : undefined}
                        />
                      ) : (
                        <div className="h-6 w-6 sm:h-7 sm:w-7 flex items-center justify-center font-mono text-[0.6rem] sm:text-[0.65rem] tracking-[0.22em] text-muted-foreground">
                          {tech.label ?? tech.name}
                        </div>
                      )}

                      {/* Hover label */}
                      {isActive && (
                        <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <span className="rounded-full border border-border/60 bg-background/80 px-2.5 py-1 text-[0.65rem] font-medium text-foreground shadow-sm backdrop-blur">
                            {tech.name}
                          </span>
                        </span>
                      )}
                    </div>
                  </motion.a>
                    );
                  })()}
                </div>
              ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsOrbit;


