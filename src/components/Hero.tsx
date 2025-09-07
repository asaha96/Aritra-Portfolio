import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const skills = [
    'Python', 'React', 'Canvas LTI', 'Pandas', 'Azure', 'HPC', 'Data Viz'
  ];

  const highlights = [
    'Processed 100M+ BSMs for emergency response optimization',
    'Achieved 85% agreement with instructor grading using LLM evaluation',
    'Reduced emergency decision time by ~30% with ML analytics',
    'Built systems serving 5,000+ students with <200ms p95 latency'
  ];

  return (
    <section id="home" className="min-h-screen flex items-center hero-gradient">
      <div className="max-w-7xl mx-auto container-padding w-full">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Technical builder.{' '}
                <span className="text-gradient">UX minded.</span>{' '}
                Data driven.
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
                I design and ship AI, data, and UX systems that solve clear problems and show measurable impact.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-hero">
                <a href="#resume" aria-label="View resume section">
                  <Download className="mr-2 h-5 w-5" />
                  View Resume
                </a>
              </Button>
              
              <Button variant="outline" asChild className="btn-outline">
                <a href="#portfolio" aria-label="View portfolio section">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Skills badges */}
            <div className="flex flex-wrap gap-2 justify-center">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Key Achievements</h3>
              <ul className="space-y-2 max-w-2xl mx-auto text-left">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;