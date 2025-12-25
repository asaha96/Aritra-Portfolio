import { ExternalLink, Github, BarChart3, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import vehicleTrajectory from '@/assets/vehicle-trajectory.png';
import leitFlashcards from '@/assets/leit-flashcards.png';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Connected Vehicle Data Analytics for Emergency Response',
      image: vehicleTrajectory,
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
      links: {}
    },
    {
      id: 2,
      title: 'Leit - AI-Powered Canvas LTI Flashcard System',
      image: leitFlashcards,
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
        demo: 'https://drive.google.com/file/d/1VbbJK7WuFmNf7sG2uch6thGEfBHOcD1d/view?usp=sharing',
        repo: 'https://github.com/asaha96/Leit'
      }
    },
    {
      id: 3,
      title: 'ChatGT — Local AI Study Assistant for Georgia Tech',
      image: leitFlashcards,
      imageAlt: 'ChatGT privacy-first AI study assistant interface',
      context: 'A privacy-first AI productivity platform using local LLMs, built for 5,000+ GT students',
      impact: 'ChatGT gives students a powerful, private, on-device AI assistant for studying, summarizing, question generation, and flashcard creation. Unlike cloud-based tools, ChatGT processes all data locally using Ollama, keeping sensitive academic documents on the user\'s device. The platform is now ready for deployment to over 5,000 students across Georgia Tech.',
      actions: [
        'Architected dual-mode chat system supporting general AI assistance and strict RAG with page-level citations',
        'Integrated Ollama with multiple local models (Llama-3, Phi-3, Gemma-2) to ensure 100% privacy and zero data egress',
        'Implemented real-time streaming token responses for smooth user experience during long RAG queries',
        'Developed flashcard pipeline that extracts key concepts from PDFs and generates Q&A pairs through prompt engineering',
        'Created adaptive flashcard engine with a 1–5 confidence scoring system for spaced repetition',
        'Built CSV export system for Anki interoperability',
        'Solved cluster deployment for PACE GPUs using SSH tunneling, filesystem fixes, and reproducible automation scripts'
      ],
      results: [
        'Ready for deployment to 5,000+ GT students',
        'Fully local LLM processing with no external data transfer',
        'Real-time streaming chat for long-form reasoning',
        'Automated extraction of study material from complex PDFs',
        'Reproducible PACE deployment workflow for future developers'
      ],
      metrics: ['5K+ students', '100% private', 'Local LLMs'],
      tags: ['React', 'TypeScript', 'Tailwind', 'shadcn', 'Ollama', 'PDF.js', 'Supabase', 'PACE HPC', 'Local RAG', 'LLM Engineering'],
      links: {
        demo: 'https://drive.google.com/file/d/1JIbJbD8Is26EcSnW3WfA1zLrAnCyGgE7/view?usp=sharing'
      }
    },
    {
      id: 4,
      title: 'ATLMetroVis — Atlanta Transportation Inequity & Safety Visualization',
      image: leitFlashcards,
      imageAlt: 'ATLMetroVis dashboard showing Atlanta commute and crash data visualization',
      context: 'Interactive dashboard combining commute times and crash patterns across Georgia',
      impact: 'ATLMetroVis reveals how commute burdens and crash risks overlap across the Atlanta metro region. Planners, policymakers, and community groups can use the tool to quickly identify inequities, hotspots, and neighborhoods that need targeted investment. By merging travel behavior and safety data into one exploratory dashboard, the project supports evidence-based transportation planning.',
      actions: [
        'Processed and cleaned Georgia\'s 2023 commute dataset across 538 cities, engineering derived attributes such as county assignment, remote work ratio, and county-level commute averages',
        'Built analysis-ready crash datasets (2020–2024) with attributes for severity, lighting, surface condition, and driver demographics',
        'Designed linked views: county-level choropleth map, city-level symbol map, and remote work vs commute time scatterplot',
        'Implemented Tableau interactions enabling filtering, zooming, and county-to-city drilldown analysis',
        'Created user tasks enabling planners to identify long commutes, evaluate city-to-county differences, examine crash clusters, and understand potential relationships between commute behavior and safety outcomes'
      ],
      results: [
        'Integrated two major datasets into a single visual analytics tool',
        'Enabled high-level regional scanning and granular city-level exploration',
        'Supported data-driven decision-making for regional planners',
        'Revealed patterns between commute burdens, crash density, and working-from-home behavior'
      ],
      metrics: ['538 cities', '5 years data', '2 datasets'],
      tags: ['Tableau', 'Python', 'Pandas', 'Geospatial Analysis', 'Data Visualization', 'Urban Analytics'],
      links: {
        demo: 'https://drive.google.com/file/d/1JIbJbD8Is26EcSnW3WfA1zLrAnCyGgE7/view?usp=sharing',
        writeup: 'https://docs.google.com/document/d/14j6O590rOv84XYtV5HQhU37G1FThFgIaNa9CXxckbX8/edit?usp=sharing'
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
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} demo`}>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {project.links.repo && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.links.repo} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} repository`}>
                          <Github className="h-4 w-4 mr-2" />
                          Repository
                        </a>
                      </Button>
                    )}
                    {project.links.writeup && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.links.writeup} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} writeup`}>
                          <FileText className="h-4 w-4 mr-2" />
                          Writeup
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