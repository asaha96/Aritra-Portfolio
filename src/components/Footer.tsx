import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 py-10">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <p className="font-display text-2xl">Aritra Saha</p>
            <p className="text-sm text-muted-foreground">
              AI, data systems, and interfaces that ship with intent.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:asaha96@gatech.edu"
              className="p-2 rounded-full bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Email Aritra Saha"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/asaha96"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Aritra Saha's GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/aritra-saha-522373261/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Aritra Saha's LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Aritra Saha. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <p className="mono-label text-[0.6rem]">Atlanta, GA</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
