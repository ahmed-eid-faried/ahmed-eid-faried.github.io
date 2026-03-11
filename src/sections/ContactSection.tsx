import { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Youtube, Mail, Copy, Check, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);
  const emailCardRef = useRef<HTMLDivElement>(null);
  const socialCardRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Headline
      gsap.fromTo(
        headlineRef.current,
        { y: '6vh', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 80%',
            end: 'top 45%',
            scrub: 0.5,
          },
        }
      );

      // Subheadline
      gsap.fromTo(
        subheadRef.current,
        { y: '4vh', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: subheadRef.current,
            start: 'top 75%',
            end: 'top 50%',
            scrub: 0.5,
          },
        }
      );

      // Form card
      gsap.fromTo(
        formCardRef.current,
        { x: '10vw', rotateZ: 4, opacity: 0 },
        {
          x: 0,
          rotateZ: 0,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formCardRef.current,
            start: 'top 80%',
            end: 'top 40%',
            scrub: 0.5,
          },
        }
      );

      // Email & Social cards
      gsap.fromTo(
        [emailCardRef.current, socialCardRef.current],
        { y: '6vh', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: emailCardRef.current,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 0.5,
          },
        }
      );

      // Footer
      gsap.fromTo(
        footerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 95%',
            end: 'top 80%',
            scrub: 0.5,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('ahmed_mady22@icloud.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Message sent! (Demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen bg-[#0B0D10] text-white py-20 px-6"
      style={{ zIndex: 200 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Area */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Text */}
          <div>
            <h2
              ref={headlineRef}
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6"
              style={{ opacity: 0 }}
            >
              Let's Work
              <br />
              Together
            </h2>
            <p
              ref={subheadRef}
              className="text-white/60 text-base md:text-lg leading-relaxed max-w-md"
              style={{ opacity: 0 }}
            >
              Have a project in mind? Send a message and let's build something
              reliable, fast, and beautiful.
            </p>
          </div>

          {/* Right - Form Card */}
          <div
            ref={formCardRef}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/10"
            style={{ opacity: 0 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-white/60 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors interactive"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors interactive"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors resize-none interactive"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-primary text-white font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors interactive"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Email Card */}
          <div
            ref={emailCardRef}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10"
            style={{ opacity: 0 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-primary/20 text-primary">
                <Mail size={20} />
              </div>
              <h3 className="font-medium text-white">Email</h3>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/80 text-sm">
                ahmed_mady22@icloud.com
              </span>
              <button
                onClick={copyEmail}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors interactive"
              >
                {copied ? (
                  <Check size={18} className="text-green-400" />
                ) : (
                  <Copy size={18} className="text-white/60" />
                )}
              </button>
            </div>
          </div>

          {/* Social Card */}
          <div
            ref={socialCardRef}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10"
            style={{ opacity: 0 }}
          >
            <h3 className="font-medium text-white mb-4">Connect</h3>
            <div className="flex gap-3">
              <a
                href="https://github.com/ahmed-eid-faried"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center gap-2 interactive"
              >
                <Github size={18} />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center gap-2 interactive"
              >
                <Linkedin size={18} />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center gap-2 interactive"
              >
                <Youtube size={18} />
                <span className="text-sm">YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          ref={footerRef}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ opacity: 0 }}
        >
          <p className="text-white/40 text-sm">
            © 2026 Ahmed Mady. Built with Flutter & React.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-white/40 text-sm hover:text-white transition-colors interactive"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
