import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Aritra Saha</h3>
            <p className="text-background/70 text-sm">
              Building AI and data systems that create measurable impact
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-6 justify-center">
            <a 
              href="#about" 
              className="text-background/70 hover:text-background transition-colors text-sm"
            >
              About
            </a>
            <a 
              href="#resume" 
              className="text-background/70 hover:text-background transition-colors text-sm"
            >
              Resume
            </a>
            <a 
              href="#portfolio" 
              className="text-background/70 hover:text-background transition-colors text-sm"
            >
              Portfolio
            </a>
            <a 
              href="#contact" 
              className="text-background/70 hover:text-background transition-colors text-sm"
            >
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-end space-x-4">
            <a
              href="mailto:asaha94@gatech.edu"
              className="p-2 bg-background/10 hover:bg-background/20 rounded-lg transition-colors"
              aria-label="Email Aritra Saha"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/aritrasaha"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-background/10 hover:bg-background/20 rounded-lg transition-colors"
              aria-label="Aritra Saha's GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/aritrasaha"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-background/10 hover:bg-background/20 rounded-lg transition-colors"
              aria-label="Aritra Saha's LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/70 text-sm">
              © {currentYear} Aritra Saha. Built with React, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-background/70 text-sm flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> at Georgia Tech
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;