import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PhoneMockup } from '@/components/PhoneMockup';
import { Download, Code, Layers, TestTube, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const skillsCardRef = useRef<HTMLDivElement>(null);
  const deviceRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

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
        },
      });

      // ENTRANCE (0-30%)
      scrollTl.fromTo(
        pillRef.current,
        { scale: 0.94, opacity: 0 },
        { scale: 1, opacity: 0.5, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        title1Ref.current,
        { x: '-12vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        title2Ref.current,
        { x: '-12vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.05
      );

      scrollTl.fromTo(
        skillsCardRef.current,
        { x: '-18vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.1
      );

      scrollTl.fromTo(
        deviceRef.current,
        { x: '18vw', rotateZ: 10, opacity: 0 },
        { x: 0, rotateZ: 0, opacity: 1, ease: 'none' },
        0.1
      );

      scrollTl.fromTo(
        labelRef.current,
        { y: '2vh', opacity: 0 },
        { y: 0, opacity: 0.7, ease: 'none' },
        0.15
      );

      // SETTLE (30-70%): Elements hold position

      // EXIT (70-100%)
      scrollTl.fromTo(
        skillsCardRef.current,
        { x: 0, opacity: 1 },
        { x: '-14vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        deviceRef.current,
        { x: 0, rotateZ: 0, opacity: 1 },
        { x: '14vw', rotateZ: -8, opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        [title1Ref.current, title2Ref.current],
        { y: 0, opacity: 1 },
        { y: '-10vh', opacity: 0, ease: 'power2.in' },
        0.75
      );

      scrollTl.fromTo(
        pillRef.current,
        { scale: 1, opacity: 0.5 },
        { scale: 1.05, opacity: 0, ease: 'power2.in' },
        0.8
      );

      scrollTl.fromTo(
        labelRef.current,
        { opacity: 0.7 },
        { opacity: 0, ease: 'power2.in' },
        0.8
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const skills = [
    {
      icon: Code,
      title: 'Architecture',
      description: 'MVC / Clean Architecture / SOLID',
    },
    {
      icon: Layers,
      title: 'State Management',
      description: 'BLoC • Provider • GetX',
    },
    {
      icon: TestTube,
      title: 'Testing',
      description: 'Unit • Widget • Integration',
    },
    {
      icon: Rocket,
      title: 'DevOps',
      description: 'Codemagic • Firebase • GitHub Actions',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-pinned bg-[#F4F6F8]"
      style={{ zIndex: 150 }}
    >
      {/* Background Pill */}
      <div
        ref={pillRef}
        className="absolute bg-pill"
        style={{
          left: '6vw',
          top: '22vh',
          width: '88vw',
          height: '56vh',
          opacity: 0,
        }}
      />

      {/* Giant Outline Title - CLEAN */}
      <h1
        ref={title1Ref}
        className="font-display font-black text-outline absolute pointer-events-none select-none"
        style={{
          left: '6vw',
          top: '12vh',
          fontSize: 'clamp(64px, 10vw, 150px)',
          letterSpacing: '-0.04em',
          lineHeight: 1,
          opacity: 0,
        }}
      >
        CLEAN
      </h1>

      {/* Giant Outline Title - CODE */}
      <h1
        ref={title2Ref}
        className="font-display font-black text-outline absolute pointer-events-none select-none"
        style={{
          left: '6vw',
          bottom: '10vh',
          fontSize: 'clamp(64px, 10vw, 150px)',
          letterSpacing: '-0.04em',
          lineHeight: 1,
          opacity: 0,
        }}
      >
        CODE
      </h1>

      {/* Skills Card */}
      <div
        ref={skillsCardRef}
        className="absolute"
        style={{
          left: '10vw',
          top: '38vh',
          width: 'clamp(300px, 34vw, 480px)',
          transform: 'translateY(-50%)',
          opacity: 0,
        }}
      >
        <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-foreground mb-3">
          Clean Code & Architecture
        </h2>
        <p className="text-foreground/70 text-sm md:text-base mb-5 leading-relaxed">
          I design apps that scale: modular layers, clear contracts, and tests
          that matter. From BLoC to CI/CD, I keep delivery predictable.
        </p>
        <div className="space-y-3 mb-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 rounded-xl bg-white/60 backdrop-blur-sm"
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <skill.icon size={18} />
              </div>
              <div>
                <h4 className="font-medium text-sm text-foreground">
                  {skill.title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="btn-primary interactive inline-flex items-center gap-2">
          <Download size={16} />
          Download Resume
        </button>
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
          maxWidth: '360px',
          maxHeight: '720px',
          opacity: 0,
        }}
      >
        <PhoneMockup
          imageSrc="/skills_settings_ui.jpg"
          alt="Skills Settings"
          className="w-full h-full"
        />
      </div>

      {/* Label */}
      <div
        ref={labelRef}
        className="absolute font-mono text-xs text-muted-foreground"
        style={{
          left: '10vw',
          bottom: '10vh',
          opacity: 0,
        }}
      >
        about/skills
      </div>
    </section>
  );
}
