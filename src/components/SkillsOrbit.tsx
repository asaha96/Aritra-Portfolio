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

  const center = ORBIT_SIZE / 2;
  const points = techStack.map((tech, index) => {
    const theta = (index / techStack.length) * Math.PI * 2 - Math.PI / 2;
    const x = Math.cos(theta) * ORBIT_RADIUS;
    const y = Math.sin(theta) * ORBIT_RADIUS;
    return { tech, x, y };
  });

  return (
    <section className="section">
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
            <motion.div
              aria-label="Rotating skills orbit"
              className="relative select-none"
              style={{ width: ORBIT_SIZE, height: ORBIT_SIZE }}
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
                width={ORBIT_SIZE}
                height={ORBIT_SIZE}
                viewBox={`0 0 ${ORBIT_SIZE} ${ORBIT_SIZE}`}
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

              {/* Center node */}
              <div
                className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/70 bg-card shadow-sm"
                aria-hidden="true"
              />

              {/* Orbiting nodes */}
              {points.map(({ tech, x, y }) => (
                <div
                  key={tech.name}
                  className="absolute left-1/2 top-1/2"
                  style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
                >
                  <motion.a
                    href={tech.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${tech.name}`}
                    title={`Open ${tech.name}`}
                    className="group block h-12 w-12 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    // Counter-rotate so icons don't spin while the orbit container rotates.
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: ROTATION_DURATION_SECONDS,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                  >
                    <div className="h-full w-full flex items-center justify-center">
                      {tech.iconUrl ? (
                        <img
                          src={tech.iconUrl}
                          alt=""
                          className={tech.iconClassName ?? "h-7 w-7"}
                          loading="lazy"
                          draggable={false}
                        />
                      ) : (
                        <div className="h-7 w-7 flex items-center justify-center font-mono text-[0.65rem] tracking-[0.22em] text-muted-foreground">
                          {tech.label ?? tech.name}
                        </div>
                      )}
                    </div>
                  </motion.a>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsOrbit;


