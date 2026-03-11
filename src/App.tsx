import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomCursor } from '@/components/CustomCursor';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/sections/HeroSection';
import { ProjectSection } from '@/sections/ProjectSection';
import { SkillsSection } from '@/sections/SkillsSection';
import { ContactSection } from '@/sections/ContactSection';

gsap.registerPlugin(ScrollTrigger);

// Project data
const projects = [
  {
    id: 'bishyaka',
    outlineTitle1: 'BISHYAKA',
    outlineTitle2: 'FASHION',
    projectTitle: 'Bishyaka Fashion',
    description:
      'A modern e-commerce experience for iOS, Android, and web—real-time notifications, smooth checkout, and responsive UI.',
    tags: ['Flutter', 'BLoC', 'Firebase', 'CI/CD'],
    ctaText: 'Open Case Study',
    ctaLink: 'https://apps.apple.com/eg/app/bishyaka-fashion/id6738314712',
    label: 'projects/bishyaka_fashion',
    imageSrc: '/bishyaka_app_ui.jpg',
    zIndex: 100,
  },
  {
    id: 'happyshop',
    outlineTitle1: 'HAPPY',
    outlineTitle2: 'SHOP',
    projectTitle: 'Happy Shop',
    description:
      'Browse, favorite, and buy with features like maps, order tracking, and secure payments—built for speed and clarity.',
    tags: ['GetX', 'Maps', 'Stripe/PayPal', 'Notifications'],
    ctaText: 'Open Case Study',
    ctaLink: 'https://github.com/ahmed-eid-faried/happyshop',
    label: 'projects/happy_shop',
    imageSrc: '/happy_shop_app_ui.jpg',
    zIndex: 110,
  },
  {
    id: 'delivery',
    outlineTitle1: 'DELIVERY',
    outlineTitle2: 'APP',
    projectTitle: 'Delivery',
    description:
      'Real-time order management, live tracking, and multi-channel support—built to keep operations smooth.',
    tags: ['Maps', 'Geocoding', 'Firebase', 'GetX'],
    ctaText: 'Open Case Study',
    ctaLink: 'https://github.com/ahmed-eid-faried/delivery',
    label: 'projects/delivery',
    imageSrc: '/delivery_app_ui.jpg',
    zIndex: 120,
  },
  {
    id: 'mytasks',
    outlineTitle1: 'MY',
    outlineTitle2: 'TASKS',
    projectTitle: 'My Tasks',
    description:
      'A focused daily planner with calendar views, reminders, and smooth interactions—productivity without the noise.',
    tags: ['Provider', 'Syncfusion Calendar', 'Local Notifications'],
    ctaText: 'Open Case Study',
    ctaLink: 'https://github.com/ahmed-eid-faried/mytasks',
    label: 'projects/mytasks',
    imageSrc: '/mytasks_app_ui.jpg',
    zIndex: 140,
  },
];

function App() {
  // Global scroll snap for pinned sections
  useEffect(() => {
    // Wait for all ScrollTriggers to be created
    const timeout = setTimeout(() => {
      const pinned = ScrollTrigger.getAll()
        .filter((st) => st.vars.pin)
        .sort((a, b) => a.start - b.start);

      const maxScroll = ScrollTrigger.maxScroll(window);
      if (!maxScroll || pinned.length === 0) return;

      // Build ranges and snap targets from pinned sections
      const pinnedRanges = pinned.map((st) => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      ScrollTrigger.create({
        snap: {
          snapTo: (value) => {
            // Check if within any pinned range (allow small buffer)
            const inPinned = pinnedRanges.some(
              (r) => value >= r.start - 0.02 && value <= r.end + 0.02
            );
            if (!inPinned) return value; // Flowing section: free scroll

            // Find nearest pinned center
            const target = pinnedRanges.reduce(
              (closest, r) =>
                Math.abs(r.center - value) < Math.abs(closest - value)
                  ? r.center
                  : closest,
              pinnedRanges[0]?.center ?? 0
            );
            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: 'power2.out',
        },
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  // Refresh ScrollTrigger on resize
  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative">
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />

        {/* Work Section Marker */}
        <div id="work" className="absolute top-[100vh]" />

        {/* Project Sections */}
        {projects.map((project) => (
          <ProjectSection key={project.id} {...project} />
        ))}

        {/* Skills Section */}
        <SkillsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
