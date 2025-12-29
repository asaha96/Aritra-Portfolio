import { useEffect, useRef, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const lastScrollY = useRef(0);
  const heroEndY = useRef(0);

  const navItems = [
    { href: '#work', label: 'Work' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const updateHeroEnd = () => {
      const hero = document.getElementById("home");
      if (!hero) {
        heroEndY.current = 420;
        return;
      }
      const rect = hero.getBoundingClientRect();
      heroEndY.current = window.scrollY + rect.top + rect.height - 72;
    };

    updateHeroEnd();
    window.addEventListener("resize", updateHeroEnd);
    return () => window.removeEventListener("resize", updateHeroEnd);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastScrollY.current;
      const pastHero = y > heroEndY.current;

      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - doc.clientHeight);
      const progress = Math.min(1, Math.max(0, y / max));
      setScrollProgress(progress);

      if (!pastHero) {
        setIsHidden(false);
      } else {
        setIsHidden(goingDown);
        if (goingDown) setIsOpen(false);
      }

      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={[
        "fixed top-0 w-full bg-background/85 backdrop-blur-md border-b border-border/60 z-50",
        "transition-transform duration-300",
        isHidden ? "-translate-y-full pointer-events-none" : "translate-y-0",
      ].join(" ")}
    >
      {/* Scroll progress */}
      <div className="absolute left-0 top-0 h-[2px] w-full bg-transparent">
        <div
          className="h-full origin-left bg-primary/70"
          style={{ transform: `scaleX(${scrollProgress})` }}
          aria-hidden="true"
        />
      </div>

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
            <ThemeToggle />
            <a
              href="https://drive.google.com/file/d/1NcpBAfLgt1q1yhjxhs4IeQVMIFsUdA8R/view?usp=sharing"
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
                href="https://drive.google.com/file/d/1NcpBAfLgt1q1yhjxhs4IeQVMIFsUdA8R/view?usp=sharing"
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
