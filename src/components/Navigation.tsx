import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#work', label: 'Work' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/85 backdrop-blur-md border-b border-border/60 z-50">
      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content" 
        className="skip-link"
      >
        Skip to main content
      </a>
      
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-baseline gap-3 text-foreground"
            aria-label="Aritra Saha - Home"
          >
            <span className="font-display text-2xl tracking-wide">Aritra Saha</span>
            <span className="mono-label hidden sm:inline">Systems + Interfaces</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <span className="mono-label hidden xl:inline">Atlanta, GA</span>
            <ThemeToggle />
            <a
              href="https://drive.google.com/file/d/1kZSNtotDEGhUF048QgLn5tU8EM9Z2PH_/view?usp=sharing"
              className="button-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            id="mobile-menu"
            className="lg:hidden py-4 border-t border-border/60 space-y-3"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-muted-foreground hover:text-foreground transition-colors link-underline"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <a
                href="https://drive.google.com/file/d/1kZSNtotDEGhUF048QgLn5tU8EM9Z2PH_/view?usp=sharing"
                className="button-primary w-fit"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
