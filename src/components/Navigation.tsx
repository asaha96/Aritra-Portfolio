import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#resume', label: 'Resume' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
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
            className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
            aria-label="Aritra Saha - Home"
          >
            Aritra Saha
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium focus:text-primary focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
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
            className="md:hidden py-4 border-t border-border"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-muted-foreground hover:text-foreground transition-colors font-medium focus:text-primary focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;