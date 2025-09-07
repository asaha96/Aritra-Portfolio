import { MapPin, Calendar, BookOpen, Code } from 'lucide-react';

const About = () => {
  const quickFacts = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Atlanta, GA'
    },
    {
      icon: BookOpen,
      label: 'Current Role',
      value: 'BS/MS Student at Georgia Tech'
    },
    {
      icon: Code,
      label: 'Focus Areas',
      value: 'HCI, AI, Data Systems'
    },
    {
      icon: Calendar,
      label: 'Current Projects',
      value: 'CV Analytics, EdTech Research'
    }
  ];

  const organizations = [
    { name: 'Georgia Tech', type: 'Education' },
    { name: 'Siemens', type: 'Industry Experience' },
    { name: 'NVIDIA AI Makerspace', type: 'Research' },
    { name: 'Canvas LTI', type: 'EdTech Platform' }
  ];

  return (
    <section id="about" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">About Me</h2>
              <div className="w-16 h-1 bg-primary rounded-full" />
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                I am a Computer Science student at Georgia Tech in the BS/MS track with a focus on Human Computer Interaction and Artificial Intelligence. I work in multiple research labs, including the Intelligent Transportation Systems and Connected and Autonomous Vehicle Lab, where I build data pipelines and analytics for traffic studies, and the AI Makerspace Nexus, where I lead data science workflows and user interface development for high performance computing.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                I also contribute to education technology research with Dr. David Joyner, designing AI-based flashcard and grading tools for learning management systems. Beyond research, I serve as Executive Director of SAILea and as a teaching assistant for PSYC 3040. My interests span UX, AI, data systems, and educational technology, with a focus on building usable, data-driven solutions that create measurable impact for users and organizations.
              </p>
            </div>
          </div>

          {/* Quick Facts & Timeline */}
          <div className="space-y-8">
            {/* Quick Facts Grid */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Quick Facts</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {quickFacts.map((fact, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-card rounded-lg border border-border">
                    <fact.icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">{fact.label}</p>
                      <p className="font-medium text-foreground">{fact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Timeline */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Education</h3>
              <div className="space-y-3">
                <div className="border-l-2 border-primary pl-4 pb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full -ml-6" />
                    <span className="text-sm text-muted-foreground">2025-2027</span>
                  </div>
                  <h4 className="font-semibold text-foreground">MS Computer Science</h4>
                  <p className="text-muted-foreground">Georgia Institute of Technology • ML Concentration</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full -ml-6" />
                    <span className="text-sm text-muted-foreground">2023-2026</span>
                  </div>
                  <h4 className="font-semibold text-foreground">BS Computer Science</h4>
                  <p className="text-muted-foreground">Georgia Institute of Technology • HCI & AI Concentrations</p>
                </div>
              </div>
            </div>

            {/* Affiliations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Affiliations</h3>
              <div className="grid grid-cols-2 gap-2">
                {organizations.map((org, index) => (
                  <div key={index} className="p-3 bg-accent rounded-lg text-center">
                    <p className="font-medium text-accent-foreground text-sm">{org.name}</p>
                    <p className="text-xs text-muted-foreground">{org.type}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;