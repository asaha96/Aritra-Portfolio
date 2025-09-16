import { ExternalLink, Github, FileText, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
// Using uploaded vehicle dashboard image
const vehicleDashboard = '/lovable-uploads/ee3b6403-dafd-41bc-9fda-014f47452aaf.png';
import leatInterface from '@/assets/leat-interface.png';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Connected Vehicle Data Analytics for Emergency Response',
      image: vehicleDashboard,
      imageAlt: 'Visualization of emergency vehicle trajectories over North Avenue Bridge',
      context: 'ITS and CAV Lab research project processing massive datasets to improve emergency response times',
      impact: 'This work directly enhances emergency responder capabilities by reducing decision-making time during critical incidents, potentially saving lives through faster, more informed emergency response deployment.',
      actions: [
        'Processed over 100,000,000 BSMs by converting live PCAP to CSV with Scapy, PyShark, and tshark',
        'Built real-time visualization dashboards using PyDeck and Altair for situational awareness',
        'Developed anomaly detection algorithms for emergency vehicle optimization',
        'Created versioned Pandas data processing jobs for multi-terabyte CAV datasets'
      ],
      results: [
        'Reduced emergency decision time by approximately 30%',
        'Processed 100M+ BSM records with reliable data pipeline',
        'Informed CAV rollout strategy through comprehensive partner reports',
        'Built scalable infrastructure for real-time traffic analytics'
      ],
      metrics: ['100M+ BSMs', '30% faster decisions', 'Multi-TB data'],
      tags: ['Python', 'Pandas', 'PyDeck', 'Data Viz', 'HPC', 'CAV Analytics'],
      links: {
        demo: '#',
        repo: '#',
        writeup: '#'
      }
    },
    {
      id: 2,
      title: 'Leat - AI-Powered Canvas LTI Flashcard System',
      image: leatInterface,
      imageAlt: 'AI-powered spaced repetition flashcard interface showing a study question, answer, and feedback options to track learner confidence and optimize review intervals.',
      context: 'Educational technology research with Dr. David Joyner focusing on AI-enhanced learning tools',
      impact: 'This system transforms how students learn by providing personalized, data-driven study experiences that adapt to individual learning patterns, helping thousands of students achieve better retention and academic success.',
      actions: [
        'Delivered Canvas LTI 1.3 app with 1,000+ flashcards and interactive quizzes',
        'Built Python REST backend with PostgreSQL for robust data management',
        'Implemented rubric-guided LLM evaluation for automated grading',
        'Optimized endpoints and SQL queries with client-side caching strategies'
      ],
      results: [
        'Achieved over 85% agreement with instructor grading accuracy',
        'Prepared for rollout to 5,000+ students with scalable architecture',
        'Hit under 200ms p95 latency through performance optimization',
        'Created Canvas course template for seamless admin installation'
      ],
      metrics: ['5K+ students', '85% accuracy', '<200ms p95'],
      tags: ['Python', 'React', 'PostgreSQL', 'LTI 1.3', 'Canvas', 'EdTech'],
      links: {
        demo: '#',
        repo: '#',
        slides: '#'
      }
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">Featured Projects</h2>
            <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Data-driven solutions with measurable impact across transportation, education, and AI research
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Project Image */}
                <div className={`space-y-4 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="w-full rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  </div>
                  
                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-bold"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.context}
                    </p>
                    
                    <div className="p-4 bg-accent/50 rounded-lg border-l-4 border-primary">
                      <p className="text-sm leading-relaxed font-medium">
                        <span className="text-primary font-semibold">Impact:</span> {project.impact}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                      Actions
                    </h4>
                    <ul className="space-y-2">
                      {project.actions.map((action, actionIndex) => (
                        <li key={actionIndex} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2 text-success" />
                      Results
                    </h4>
                    <ul className="space-y-2">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-accent text-accent-foreground rounded text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    {project.links.demo && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.links.demo} aria-label={`View ${project.title} demo`}>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {project.links.repo && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.links.repo} aria-label={`View ${project.title} repository`}>
                          <Github className="h-4 w-4 mr-2" />
                          Repository
                        </a>
                      </Button>
                    )}
                    {project.links.writeup && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.links.writeup} aria-label={`Read ${project.title} writeup`}>
                          <FileText className="h-4 w-4 mr-2" />
                          Writeup
                        </a>
                      </Button>
                    )}
                    {project.links.slides && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.links.slides} aria-label={`View ${project.title} slides`}>
                          <FileText className="h-4 w-4 mr-2" />
                          Slides
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;