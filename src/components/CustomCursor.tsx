import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const isTouch = useRef(false);

  useEffect(() => {
    // Check if touch device
    isTouch.current = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch.current) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(dot, {
        x: e.clientX - 4,
        y: e.clientY - 4,
        duration: 0.08,
        ease: 'power2.out',
      });
      gsap.to(ring, {
        x: e.clientX - 20,
        y: e.clientY - 20,
        duration: 0.15,
        ease: 'power2.out',
      });
    };

    const onMouseEnterInteractive = () => {
      ring.classList.add('hover');
    };

    const onMouseLeaveInteractive = () => {
      ring.classList.remove('hover');
    };

    // Add listeners
    window.addEventListener('mousemove', onMouseMove);

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, .interactive'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterInteractive);
      el.addEventListener('mouseleave', onMouseLeaveInteractive);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive);
        el.removeEventListener('mouseleave', onMouseLeaveInteractive);
      });
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden lg:block" />
      <div ref={ringRef} className="cursor-ring hidden lg:block" />
    </>
  );
}
