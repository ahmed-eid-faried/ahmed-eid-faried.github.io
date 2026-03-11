import { useEffect, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PhoneMockup } from '@/components/PhoneMockup';

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const titleAhmedRef = useRef<HTMLHeadingElement>(null);
  const titleMadyRef = useRef<HTMLHeadingElement>(null);
  const textBlockRef = useRef<HTMLDivElement>(null);
  const deviceRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);

  // Auto-play entrance animation on load
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // Background pill
      tl.fromTo(
        pillRef.current,
        { opacity: 0, scale: 0.96 },
        { opacity: 0.55, scale: 1, duration: 1, ease: 'power3.out' },
        0
      );

      // "AHMED" title
      tl.fromTo(
        titleAhmedRef.current,
        { x: '-6vw', opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        0.1
      );

      // "MADY" title
      tl.fromTo(
        titleMadyRef.current,
        { x: '-6vw', opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        0.2
      );

      // Text block with stagger
      tl.fromTo(
        textBlockRef.current?.children || [],
        { y: '4vh', opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' },
        0.3
      );

      // Device frame
      tl.fromTo(
        deviceRef.current,
        { x: '10vw', rotateZ: 6, opacity: 0 },
        { x: 0, rotateZ: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        0.2
      );

      // Code snippet
      tl.fromTo(
        codeRef.current,
        { y: '2vh', opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        0.5
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Scroll-driven exit animation
  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset all elements to visible when scrolling back to top
            gsap.set([pillRef.current, titleAhmedRef.current, titleMadyRef.current], {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
            });
            gsap.set(textBlockRef.current?.children || [], {
              opacity: 1,
              x: 0,
            });
            gsap.set(deviceRef.current, {
              opacity: 1,
              x: 0,
              rotateZ: 0,
            });
            gsap.set(codeRef.current, {
              opacity: 1,
              y: 0,
            });
          },
        },
      });

      // ENTRANCE (0-30%): Hold - elements already visible from load animation
      // SETTLE (30-70%): Static

      // EXIT (70-100%)
      scrollTl.fromTo(
        textBlockRef.current,
        { x: 0, opacity: 1 },
        { x: '-18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        deviceRef.current,
        { x: 0, rotateZ: 0, opacity: 1 },
        { x: '18vw', rotateZ: 8, opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        [titleAhmedRef.current, titleMadyRef.current],
        { y: 0, opacity: 1 },
        { y: '-10vh', opacity: 0, ease: 'power2.in' },
        0.75
      );

      scrollTl.fromTo(
        pillRef.current,
        { scale: 1, opacity: 0.55 },
        { scale: 1.06, opacity: 0, ease: 'power2.in' },
        0.8
      );

      scrollTl.fromTo(
        codeRef.current,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.75
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="section-pinned bg-[#F4F6F8] z-10"
    >
      {/* Background Pill */}
      <div
        ref={pillRef}
        className="absolute bg-pill"
        style={{
          left: '6vw',
          top: '18vh',
          width: '88vw',
          height: '64vh',
          opacity: 0,
        }}
      />

      {/* Giant Outline Title - AHMED */}
      <h1
        ref={titleAhmedRef}
        className="font-display font-black text-outline absolute pointer-events-none select-none"
        style={{
          left: '6vw',
          top: '10vh',
          fontSize: 'clamp(80px, 11vw, 170px)',
          letterSpacing: '-0.04em',
          lineHeight: 1,
          opacity: 0,
        }}
      >
        AHMED
      </h1>

      {/* Giant Outline Title - MADY */}
      <h1
        ref={titleMadyRef}
        className="font-display font-black text-outline absolute pointer-events-none select-none"
        style={{
          left: '6vw',
          bottom: '8vh',
          fontSize: 'clamp(80px, 11vw, 170px)',
          letterSpacing: '-0.04em',
          lineHeight: 1,
          opacity: 0,
        }}
      >
        MADY
      </h1>

      {/* Text Block */}
      <div
        ref={textBlockRef}
        className="absolute"
        style={{
          left: '10vw',
          top: '44vh',
          width: 'clamp(300px, 34vw, 500px)',
          transform: 'translateY(-50%)',
        }}
      >
        <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-3 leading-tight">
          Crafting Mobile Experiences with Precision
        </h2>
        <p className="text-muted-foreground text-sm md:text-base mb-4">
          Flutter Developer • Cairo, Egypt
        </p>
        <p className="text-foreground/80 text-sm md:text-base mb-6 leading-relaxed">
          I build polished, high-performance apps for iOS and Android—clean
          architecture, smooth animations, and thoughtful UX.
        </p>
        <div className="flex gap-3">
          <button onClick={scrollToWork} className="btn-primary interactive">
            View Projects
          </button>
          <button onClick={scrollToContact} className="btn-secondary interactive">
            Contact Me
          </button>
        </div>
      </div>

      {/* Device Frame */}
      <div
        ref={deviceRef}
        className="absolute"
        style={{
          left: '58vw',
          top: '18vh',
          width: '34vw',
          height: '64vh',
          maxWidth: '380px',
          maxHeight: '760px',
          opacity: 0,
        }}
      >
        <PhoneMockup
          imageSrc="/hero_app_ui.jpg"
          alt="Hero App Preview"
          className="w-full h-full"
        />
      </div>

      {/* Code Snippet */}
      <div
        ref={codeRef}
        className="absolute code-snippet"
        style={{
          left: '10vw',
          bottom: '10vh',
          opacity: 0,
        }}
      >
        <pre className="whitespace-pre-wrap">
          {`// lib/main.dart
void main() => runApp(const MyApp());`}
        </pre>
      </div>
    </section>
  );
}
