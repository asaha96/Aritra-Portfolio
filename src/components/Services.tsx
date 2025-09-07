import { Database, Brain, Code, Cloud } from 'lucide-react';

const Services = () => {
  const approach = {
    problem: "I start by understanding the specific challenges and requirements",
    process: "Then design and build solutions with user experience and data integrity as priorities",
    outcome: "Finally deliver systems that show measurable impact and can scale effectively"
  };

  const services = [
    {
      icon: Database,
      title: 'Data Engineering & ML Pipelines',
      description: 'Build robust pipelines that process massive datasets and deliver actionable insights for research and production systems.',
      value: 'Turn raw data into reliable, scalable systems that inform critical decisions.'
    },
    {
      icon: Brain,
      title: 'UX-Driven AI & EdTech Prototypes',
      description: 'Design AI-powered educational tools and interfaces that prioritize usability and learning outcomes.',
      value: 'Create AI systems that users actually want to use and that improve learning experiences.'
    },
    {
      icon: Code,
      title: 'Full-Stack Web Development',
      description: 'Develop complete web applications using React, Node.js, and modern frameworks with focus on performance.',
      value: 'Deliver fast, accessible applications that serve real user needs effectively.'
    },
    {
      icon: Cloud,
      title: 'Cloud Automation & API Integration',
      description: 'Implement cloud infrastructure, CI/CD pipelines, and API integrations that scale with organizational needs.',
      value: 'Build reliable systems that reduce manual work and increase operational efficiency.'
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">How I Work</h2>
            <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My approach focuses on understanding problems deeply, building with users in mind, and delivering measurable outcomes.
            </p>
          </div>

          {/* Approach */}
          <div className="bg-accent rounded-lg p-6 lg:p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mx-auto">
                  1
                </div>
                <h3 className="font-semibold text-accent-foreground">Problem</h3>
                <p className="text-sm text-muted-foreground">{approach.problem}</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mx-auto">
                  2
                </div>
                <h3 className="font-semibold text-accent-foreground">Approach</h3>
                <p className="text-sm text-muted-foreground">{approach.process}</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mx-auto">
                  3
                </div>
                <h3 className="font-semibold text-accent-foreground">Outcome</h3>
                <p className="text-sm text-muted-foreground">{approach.outcome}</p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 card-hover"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm font-medium text-primary">
                      Value: {service.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Ready to build something impactful together?
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors"
            >
              Let's discuss your project
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;