import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // Initial animation
    gsap.fromTo(
      nav,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.5, ease: 'power3.out' }
    );

    // Scroll-based transparency
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[1000] px-6 py-4 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          className="font-mono text-sm font-medium tracking-tight interactive"
        >
          ahmedmady.dev
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('work')}
            className="nav-link text-sm font-medium text-foreground/80 hover:text-foreground transition-colors interactive"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="nav-link text-sm font-medium text-foreground/80 hover:text-foreground transition-colors interactive"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="nav-link text-sm font-medium text-foreground/80 hover:text-foreground transition-colors interactive"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 interactive">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
