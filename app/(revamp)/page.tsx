'use client'

import Image from 'next/image';
import Link from 'next/link';
import ReviewComponent from "../components/revamp/Review";
import { useState, useEffect, useRef, useCallback, useLayoutEffect } from "react";
import useMediaQuery from "../components/revamp/useMediaQuery";
import useMeasure from "react-use-measure";
import { animate, motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { LANDING_PAGE_REVIEWS } from "@/utils/defaults";
import { UserReviewSimple } from "@/types/models";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import heroImg from "@/assets/images/landing/landingpage collwier image 1.png";
import imgCoach from "@/assets/images/landing/landingpage coach image 1.png";
import imgMember from "@/assets/images/landing/landingpage image community member 1.png";
import imgStep1 from "@/assets/images/landing/landingpage image 2.png";
import imgStep2 from "@/assets/images/landing/landingpage collwier image 2.png";
import imgStep3 from "@/assets/images/landing/landingpage collwier image 3.png";
import imgAbout from "@/assets/images/landing/landingpage about image 1.png";
import imgCollwier3 from "@/assets/images/landing/landingpage image 3.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ═══════════════════════════════════════
   HOOKS
   ═══════════════════════════════════════ */

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

// Magnetic button effect
function useMagnetic(ref: React.RefObject<HTMLElement | null>, strength: number = 0.3) {
  useEffect(() => {
    const el = ref.current;
    if (!el || window.innerWidth < 768) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(el, { x: x * strength, y: y * strength, duration: 0.4, ease: "power2.out" });
    };
    const handleLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.3)" });
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => { el.removeEventListener("mousemove", handleMove); el.removeEventListener("mouseleave", handleLeave); };
  }, [ref, strength]);
}

// Hero entrance timeline
function useHeroEntrance(containerRef: React.RefObject<HTMLElement | null>) {
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      // Badge
      tl.fromTo(".hero-badge",
        { opacity: 0, y: 30, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power2.out" }
      );

      // Headline words
      tl.fromTo(".hero-word",
        { opacity: 0, y: 80, rotateX: -40 },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.08, ease: "power3.out" },
        "-=0.3"
      );

      // Gradient word
      tl.fromTo(".hero-gradient-word",
        { opacity: 0, y: 60, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "back.out(1.2)" },
        "-=0.5"
      );

      // Underline draw
      tl.fromTo(".hero-underline",
        { scaleX: 0 },
        { scaleX: 1, duration: 1, ease: "power2.inOut" },
        "-=0.4"
      );

      // Subtitle
      tl.fromTo(".hero-subtitle",
        { opacity: 0, y: 25, filter: "blur(6px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power2.out" },
        "-=0.5"
      );

      // Role rotator
      tl.fromTo(".hero-role",
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        "-=0.3"
      );

      // CTAs
      tl.fromTo(".hero-cta",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
        "-=0.3"
      );

      // Social proof
      tl.fromTo(".hero-social",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.2"
      );

      // Image mosaic — staggered from different directions
      tl.fromTo(".mosaic-main",
        { opacity: 0, scale: 0.88, filter: "blur(20px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out" },
        0.3
      );
      tl.fromTo(".mosaic-secondary",
        { opacity: 0, x: 60, filter: "blur(12px)" },
        { opacity: 1, x: 0, filter: "blur(0px)", duration: 0.9, ease: "power3.out" },
        0.6
      );
      tl.fromTo(".mosaic-tertiary",
        { opacity: 0, y: 40, filter: "blur(12px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, ease: "power3.out" },
        0.75
      );

      // Floating elements
      tl.fromTo(".hero-float",
        { opacity: 0, scale: 0.8, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "back.out(1.4)" },
        "-=0.6"
      );

      // Scroll indicator
      tl.fromTo(".hero-scroll",
        { opacity: 0 },
        { opacity: 0.5, duration: 0.8 },
        "-=0.2"
      );

      // ── Background animations ──

      gsap.to(".hero-aurora", {
        x: "15%", y: "-5%", rotation: 3,
        duration: 20, ease: "sine.inOut", repeat: -1, yoyo: true,
      });
      gsap.to(".hero-aurora-2", {
        x: "-12%", y: "8%", rotation: -2,
        duration: 25, ease: "sine.inOut", repeat: -1, yoyo: true,
      });
      gsap.to(".hero-orb", {
        keyframes: [
          { x: "3%", y: "2%", duration: 8 },
          { x: "-2%", y: "-3%", duration: 10 },
          { x: "1%", y: "4%", duration: 9 },
          { x: "0%", y: "0%", duration: 8 },
        ],
        ease: "sine.inOut", repeat: -1, stagger: 2.5,
      });

      document.querySelectorAll(".hero-particle").forEach((p, i) => {
        const dur = 6 + (i % 4) * 2;
        gsap.to(p, {
          keyframes: [
            { opacity: 0, y: 0, duration: 0 },
            { opacity: 0.3 + (i % 3) * 0.15, y: -30, duration: dur * 0.3, ease: "power1.out" },
            { opacity: 0.5 + (i % 3) * 0.1, y: -80, duration: dur * 0.4, ease: "none" },
            { opacity: 0, y: -140, duration: dur * 0.3, ease: "power1.in" },
          ],
          repeat: -1, delay: i * 0.4,
        });
        gsap.to(p, {
          x: `${(i % 2 === 0 ? 1 : -1) * (15 + i * 3)}`,
          duration: dur * 1.2, ease: "sine.inOut", repeat: -1, yoyo: true, delay: i * 0.4,
        });
      });

    }, containerRef);
    return () => ctx.revert();
  }, [containerRef]);
}

// Scroll-triggered section reveal
function useScrollReveal(ref: React.RefObject<HTMLElement | null>, options?: { stagger?: number; y?: number }) {
  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const children = el.querySelectorAll('.reveal-child');
    const targets = children.length > 0 ? children : [el];

    const ctx = gsap.context(() => {
      gsap.fromTo(targets,
        { opacity: 0, y: options?.y ?? 60, filter: "blur(6px)" },
        {
          opacity: 1, y: 0, filter: "blur(0px)",
          duration: 0.9, stagger: options?.stagger ?? 0.12, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        }
      );
    });
    return () => ctx.revert();
  }, [ref, options?.stagger, options?.y]);
}

// Parallax with scrub
function useParallaxScrub(ref: React.RefObject<HTMLElement | null>, speed: number = 0.3) {
  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return;
    if (window.innerWidth < 768) return;
    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        y: speed * 150 * -1, ease: "none",
        scrollTrigger: {
          trigger: ref.current!.parentElement,
          start: "top bottom", end: "bottom top", scrub: 1.5,
        },
      });
    });
    return () => ctx.revert();
  }, [ref, speed]);
}

// Steps section staggered reveal
function useStepsReveal(containerRef: React.RefObject<HTMLElement | null>) {
  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      // Intro text
      gsap.fromTo(".steps-intro",
        { opacity: 0, y: 60, filter: "blur(8px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 75%", once: true } }
      );
      // Cards stagger in from below with rotation
      gsap.fromTo(".step-card",
        { opacity: 0, y: 80, rotateX: -15, filter: "blur(6px)" },
        { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)",
          duration: 0.8, stagger: 0.2, ease: "power3.out",
          scrollTrigger: { trigger: ".step-card", start: "top 85%", once: true } }
      );
      // CTA
      gsap.fromTo(".steps-cta",
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.4)",
          scrollTrigger: { trigger: ".steps-cta", start: "top 90%", once: true } }
      );
      // Connecting lines draw in
      gsap.fromTo(".step-connector",
        { scaleY: 0 },
        { scaleY: 1, duration: 0.6, stagger: 0.3, ease: "power2.inOut",
          scrollTrigger: { trigger: ".step-card", start: "top 85%", once: true } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [containerRef]);
}

const roles = ["mothers", "leaders", "dreamers", "healers", "creators", "builders"];

/* ═══════════════════════════════════════
   PAGE
   ═══════════════════════════════════════ */
export default function Home() {
  const reviews: UserReviewSimple[] = LANDING_PAGE_REVIEWS;
  const [focusedReviewId, setFocusedReviewId] = useState("");
  const [focusedReviewIndex, setFocusedReviewIndex] = useState(0);
  const [measureRef, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const isMobile = useMediaQuery('(max-width:768px)');
  const indexOffset = isMobile ? 1.6 : 2;

  // Refs
  const heroRef = useRef<HTMLElement>(null);
  const whyRef = useRef<HTMLElement>(null);
  const bentoRef = useRef<HTMLElement>(null);
  const pathsRef = useRef<HTMLElement>(null);
  const stepsContainerRef = useRef<HTMLElement>(null);
  const impactRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const parallaxBlob1 = useRef<HTMLDivElement>(null);
  const parallaxBlob2 = useRef<HTMLDivElement>(null);
  const parallaxBlob3 = useRef<HTMLDivElement>(null);
  const magneticCta = useRef<HTMLAnchorElement>(null);

  // Rotating hero word
  const [roleIdx, setRoleIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 2200);
    return () => clearInterval(id);
  }, []);

  // Animations
  useHeroEntrance(heroRef);
  useScrollReveal(whyRef, { stagger: 0.15 });
  useScrollReveal(bentoRef, { stagger: 0.1 });
  useScrollReveal(pathsRef, { stagger: 0.2 });
  useScrollReveal(impactRef, { stagger: 0.12 });
  useScrollReveal(testimonialsRef);
  useParallaxScrub(parallaxBlob1, 0.2);
  useParallaxScrub(parallaxBlob2, 0.4);
  useParallaxScrub(parallaxBlob3, 0.3);
  useMagnetic(magneticCta, 0.25);
  useStepsReveal(stepsContainerRef);

  // Image curtain reveals
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      document.querySelectorAll('.curtain-reveal').forEach(el => {
        const overlay = el.querySelector('.curtain-overlay');
        const img = el.querySelector('.curtain-img');
        if (!overlay || !img) return;
        const tl = gsap.timeline({
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        });
        tl.fromTo(overlay,
          { xPercent: 0 },
          { xPercent: 105, duration: 0.9, ease: "power3.inOut" }
        );
        tl.fromTo(img,
          { scale: 1.3, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" },
          "-=0.7"
        );
      });
    });
    return () => ctx.revert();
  }, []);

  // Text split reveal
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      document.querySelectorAll('.text-split-reveal').forEach(el => {
        const words = el.textContent?.split(' ') || [];
        el.innerHTML = words.map(w =>
          `<span class="inline-block overflow-hidden"><span class="split-word inline-block" style="transform:translateY(100%);opacity:0">${w}</span></span>`
        ).join('<span class="inline-block">&nbsp;</span>');

        gsap.to(el.querySelectorAll('.split-word'), {
          y: '0%', opacity: 1, duration: 0.7, stagger: 0.04, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  // Counter animation for bento stats
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      document.querySelectorAll('.count-up').forEach(el => {
        const target = parseInt(el.getAttribute('data-target') || '0');
        gsap.fromTo(el, { textContent: 0 }, {
          textContent: target,
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  // Review carousel
  const gotoNextReview = useCallback((index?: number) => {
    const idx = index ?? focusedReviewIndex + 1;
    let _idx = focusedReviewIndex;
    const finalPos = -width / indexOffset;
    const single = finalPos / reviews.length;
    let computeIdx = idx;

    if (idx < 2 || idx > 7) {
      const cur = single * (_idx - indexOffset);
      if (idx < 2) { computeIdx = idx + 5; _idx += 5; }
      else { computeIdx = idx - 5; _idx -= 5; }
      const next = single * (_idx - indexOffset);
      animate(xTranslation, [cur, next], { ease: 'linear', duration: 0 });
    }

    const cur = single * (_idx - indexOffset);
    const next = single * (computeIdx - indexOffset);
    animate(xTranslation, [cur, next], { ease: 'linear', duration: 0.3 });
    setFocusedReviewId(reviews[computeIdx % reviews.length].id);
    setFocusedReviewIndex(computeIdx);
  }, [focusedReviewIndex, width, indexOffset, reviews, xTranslation]);

  useEffect(() => {
    let idx = focusedReviewIndex;
    const interval = setInterval(() => { idx += 1; gotoNextReview(idx); }, 5000);
    return () => clearInterval(interval);
  }, [reviews, focusedReviewIndex, gotoNextReview]);

  const marqueeItems = [
    "Life Coaching", "Stress Management", "Career Pivots", "Mindfulness",
    "Confidence", "Work-Life Balance", "Self-Discovery", "Leadership",
    "Wellness", "Personal Growth", "Relationships", "Accountability",
  ];

  // Mouse parallax for hero mosaic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const mosaicX = useTransform(springX, [-500, 500], [-8, 8]);
  const mosaicY = useTransform(springY, [-500, 500], [-8, 8]);
  const mosaicX2 = useTransform(springX, [-500, 500], [6, -6]);
  const mosaicY2 = useTransform(springY, [-500, 500], [6, -6]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  return (
    <div className="w-full overflow-x-hidden bg-[#FAFAF8]">

      {/* ══════════════════════════════════════
          HERO
          ══════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#FAFAF8]">
        {/* ── Living gradient mesh background ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden hero-bg">
          <div ref={parallaxBlob1} className="hero-orb absolute w-[80vw] max-w-[1000px] aspect-square rounded-full animate-blob-morph"
            style={{ top: '-25%', right: '-20%', background: 'radial-gradient(circle, rgba(78,205,196,0.15) 0%, rgba(78,205,196,0.04) 50%, transparent 70%)', filter: 'blur(80px)' }} />
          <div ref={parallaxBlob2} className="hero-orb absolute w-[65vw] max-w-[800px] aspect-square rounded-full animate-blob-morph"
            style={{ bottom: '-20%', left: '-15%', background: 'radial-gradient(circle, rgba(255,107,53,0.1) 0%, rgba(255,107,53,0.03) 50%, transparent 70%)', filter: 'blur(80px)', animationDelay: '-4s' }} />
          <div ref={parallaxBlob3} className="hero-orb absolute w-[45vw] max-w-[550px] aspect-square rounded-full animate-blob-morph"
            style={{ top: '10%', left: '30%', background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, rgba(124,58,237,0.02) 50%, transparent 70%)', filter: 'blur(60px)', animationDelay: '-8s' }} />

          <div className="hero-aurora absolute w-[150%] h-[40%] top-[20%] -left-[25%] opacity-[0.07] blur-[100px] rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent 0%, #4ECDC4 20%, #7C3AED 40%, #FF6B35 60%, #4ECDC4 80%, transparent 100%)' }} />
          <div className="hero-aurora-2 absolute w-[120%] h-[30%] bottom-[15%] -right-[10%] opacity-[0.04] blur-[80px] rounded-full"
            style={{ background: 'linear-gradient(270deg, transparent 0%, #4ECDC4 25%, #EC4899 50%, #FF6B35 75%, transparent 100%)' }} />

          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="hero-particle absolute rounded-full"
              style={{
                width: `${3 + (i % 4) * 2}px`, height: `${3 + (i % 4) * 2}px`,
                left: `${8 + (i * 7.5) % 85}%`, top: `${15 + (i * 13) % 70}%`,
                background: i % 3 === 0 ? '#4ECDC4' : i % 3 === 1 ? '#FF6B35' : '#7C3AED',
                opacity: 0,
              }}
            />
          ))}

          <div className="absolute inset-0 opacity-[0.015]"
            style={{ backgroundImage: 'radial-gradient(circle, #0F172A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="noise-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-[1fr,1.1fr] gap-10 lg:gap-8 items-center pt-10 pb-20 lg:py-0">

          {/* Left: Copy */}
          <div className="max-w-2xl">
            <div className="hero-badge inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-xl border border-white/40 shadow-soft text-xs font-semibold text-slate-600 mb-10 select-none" style={{ opacity: 0 }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
              </span>
              Built by women, for women
            </div>

            <h1 className="font-display text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.8rem] leading-[0.88] tracking-[-0.05em] font-bold text-slate-900 mb-8" style={{ perspective: 600 }}>
              <span className="hero-word inline-block" style={{ opacity: 0 }}>Grow</span>{' '}
              <span className="hero-word inline-block" style={{ opacity: 0 }}>with</span>
              <br />
              <span className="hero-word inline-block" style={{ opacity: 0 }}>women</span>{' '}
              <span className="hero-word inline-block" style={{ opacity: 0 }}>who</span>
              <br />
              <span className="relative inline-block">
                <span className="hero-gradient-word italic text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #4ECDC4, #2BA89F, #4ECDC4)", opacity: 0 }}>
                  get it
                </span>
                <span className="hero-underline absolute -bottom-2 left-0 right-0 h-[5px] rounded-full origin-left" style={{ background: "linear-gradient(90deg, #4ECDC4, #2BA89F)", opacity: 0.3, transform: 'scaleX(0)' }} />
              </span>
              <span className="hero-word inline-block" style={{ opacity: 0 }}>.</span>
            </h1>

            <p className="hero-subtitle text-lg md:text-xl text-slate-400 max-w-md leading-relaxed mb-6 font-light" style={{ opacity: 0 }}>
              Small, intimate coaching circles led by women who understand.
              Not therapy. Not networking. Just growth, together.
            </p>

            <div className="hero-role flex items-center gap-3 text-lg md:text-xl text-slate-500 mb-10 h-8" style={{ opacity: 0 }}>
              <span className="font-medium">A space for</span>
              <div className="relative overflow-hidden h-8 min-w-[140px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIdx}
                    initial={{ y: 32, opacity: 0, filter: "blur(6px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -32, opacity: 0, filter: "blur(6px)" }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-0 font-bold text-transparent bg-clip-text"
                    style={{ backgroundImage: "linear-gradient(135deg, #4ECDC4, #2BA89F)" }}
                  >
                    {roles[roleIdx]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link ref={magneticCta} href="https://collwi.com/register" className="hero-cta group relative overflow-hidden bg-slate-900 text-white font-semibold py-4 px-10 rounded-full text-base transition-all duration-500 hover:shadow-[0_20px_60px_rgba(15,23,42,0.4)] flex items-center gap-3" style={{ opacity: 0 }}>
                <span className="relative z-10">Start for Free</span>
                <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary-dark translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              </Link>
              <Link href="/how-it-works/community-member" className="hero-cta group text-slate-500 font-medium py-4 px-6 text-sm hover:text-slate-900 transition-colors duration-300 flex items-center gap-2" style={{ opacity: 0 }}>
                See how it works
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="hero-social flex items-center gap-5" style={{ opacity: 0 }}>
              <div className="flex -space-x-3">
                {[
                  { initials: 'SM', gradient: 'from-secondary to-teal-600' },
                  { initials: 'AL', gradient: 'from-tertiary to-orange-500' },
                  { initials: 'KJ', gradient: 'from-primary to-violet-600' },
                  { initials: 'RW', gradient: 'from-pink-400 to-rose-500' },
                  { initials: 'DN', gradient: 'from-amber-400 to-yellow-500' },
                ].map((a, i) => (
                  <div key={i} className={`w-10 h-10 rounded-full bg-gradient-to-br ${a.gradient} border-[2.5px] border-[#FAFAF8] shadow-sm flex items-center justify-center`}>
                    <span className="text-[10px] font-bold text-white/90">{a.initials}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-slate-700">Join women worldwide</span>
                <span className="text-xs text-slate-400">Free to start, always</span>
              </div>
            </div>
          </div>

          {/* Right: Image mosaic with mouse parallax */}
          <div className="relative hidden lg:block h-[600px]">
            {/* Main image — large, offset */}
            <motion.div
              className="mosaic-main absolute top-4 left-8 w-[72%] h-[85%] rounded-[2rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.12)] z-10"
              style={{ x: mosaicX, y: mosaicY, opacity: 0 }}
            >
              <Image src={heroImg} alt="Woman in growth journey" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />

              {/* Glass overlay card */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/20 backdrop-blur-xl rounded-2xl p-4 border border-white/30">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white text-sm font-semibold">Your circle awaits</div>
                    <div className="text-white/60 text-xs mt-0.5">Join free coaching sessions</div>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Secondary image — smaller, overlapping right */}
            <motion.div
              className="mosaic-secondary absolute top-0 right-0 w-[42%] h-[45%] rounded-[1.5rem] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.1)] z-20 border-4 border-[#FAFAF8]"
              style={{ x: mosaicX2, y: mosaicY2, opacity: 0 }}
            >
              <Image src={imgStep2} alt="Women connecting" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/20" />
            </motion.div>

            {/* Tertiary image — bottom right accent */}
            <motion.div
              className="mosaic-tertiary absolute bottom-0 right-4 w-[35%] h-[38%] rounded-[1.5rem] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.08)] z-20 border-4 border-[#FAFAF8]"
              style={{ x: mosaicX, y: mosaicY2, opacity: 0 }}
            >
              <Image src={imgStep3} alt="Community growth" fill className="object-cover" />
            </motion.div>

            {/* Floating pill */}
            <div className="hero-float absolute -right-2 top-[48%] bg-white rounded-full py-2.5 px-5 shadow-heavy border border-slate-100 z-30" style={{ opacity: 0 }}>
              <div className="flex items-center gap-2 text-xs font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-slate-700">Sessions live</span>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 left-0 w-32 h-32 rounded-full border border-dashed border-secondary/15 -z-10 animate-[spin_40s_linear_infinite]" />
            <div className="absolute -top-4 right-[30%] w-16 h-16 rounded-full border border-dashed border-tertiary/10 -z-10 animate-[spin_30s_linear_infinite_reverse]" />
          </div>

          {/* Mobile hero image */}
          <div className="mosaic-main lg:hidden relative" style={{ opacity: 0 }}>
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.1)] aspect-[4/3]">
              <Image src={heroImg} alt="Woman in growth journey" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/20 backdrop-blur-xl rounded-xl p-3 border border-white/30">
                <div className="flex items-center justify-between">
                  <div className="text-white text-xs font-semibold">Your circle awaits</div>
                  <div className="flex items-center gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3" style={{ opacity: 0 }}>
          <span className="text-[10px] uppercase tracking-[0.2em] text-slate-300 font-medium">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-slate-300 to-transparent animate-[pulse_2s_ease-in-out_infinite]" />
        </div>
      </section>

      {/* ══════════════════════════════════════
          MARQUEE
          ══════════════════════════════════════ */}
      <section className="py-6 bg-white border-y border-slate-100/60 overflow-hidden">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex animate-marquee whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="mx-6 text-sm font-medium text-slate-300 flex items-center gap-3 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary/40" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TRUST BAR — Topics + credibility
          ══════════════════════════════════════ */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold text-slate-300 uppercase tracking-[0.2em] mb-8">Coaching topics women explore on CollWi</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {["Stress Relief", "Career Transitions", "Confidence", "Anxiety", "Work-Life Balance", "Self-Discovery", "Relationships", "Burnout", "Leadership", "Parenting", "Mindfulness", "Personal Growth"].map((topic, i) => (
              <span key={i} className="topic-pill px-4 py-2 rounded-full bg-white border border-slate-100 text-xs font-medium text-slate-500 hover:border-secondary/30 hover:text-secondary transition-all duration-300 cursor-default">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY COLLWI — Bento Grid
          ══════════════════════════════════════ */}
      <section ref={whyRef} className="py-28 md:py-36 bg-[#FAFAF8] relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="reveal-child text-center mb-20 max-w-2xl mx-auto">
            <span className="text-[0.7rem] font-bold text-secondary uppercase tracking-[0.25em] block mb-5">Why CollWi</span>
            <h2 className="text-split-reveal font-display text-[2.8rem] md:text-[3.5rem] lg:text-[4rem] font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Not therapy. Not networking. Something new.
            </h2>
            <p className="reveal-child text-lg text-slate-400 leading-relaxed">
              A space where women come together in small, intimate coaching
              circles — to be heard, to heal, and to grow.
            </p>
          </div>

          {/* Bento grid */}
          <div ref={bentoRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {/* Large feature card */}
            <div className="reveal-child md:col-span-2 group relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] p-10 overflow-hidden cursor-default min-h-[280px] flex flex-col justify-end hover:scale-[1.01] transition-transform duration-500">
              <div className="absolute top-0 right-0 w-[60%] h-full opacity-20">
                <Image src={imgMember} alt="" fill className="object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">Safe & Private</h3>
                <p className="text-slate-400 leading-relaxed text-[0.95rem] max-w-md">
                  Judgment-free sessions with women who understand. Your stories stay in the circle — always.
                </p>
              </div>
              <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-secondary/5 blur-3xl group-hover:bg-secondary/10 transition-colors duration-700" />
            </div>

            {/* Tall accent card */}
            <div className="reveal-child group relative bg-gradient-to-b from-secondary to-teal-600 rounded-[2rem] p-8 overflow-hidden cursor-default min-h-[280px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-500">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">Always Free to Start</h3>
                <p className="text-white/70 leading-relaxed text-[0.92rem]">
                  Join sessions at no cost. Explore, connect, grow — upgrade only when you&apos;re ready.
                </p>
              </div>
              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full border border-white/10" />
              <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full border border-white/10" />
            </div>

            {/* Bottom row: two equal cards */}
            <div className="reveal-child group relative bg-white rounded-[2rem] p-8 border border-slate-100 overflow-hidden cursor-default hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.06)] transition-all duration-500">
              <div className="w-12 h-12 rounded-2xl bg-tertiary/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-1.5">Women-Led Coaching</h3>
              <p className="text-slate-400 leading-relaxed text-[0.92rem]">
                Small group programs led by certified women coaches across life, career, and wellness.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-tertiary/0 via-tertiary/40 to-tertiary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="reveal-child md:col-span-2 group relative bg-white rounded-[2rem] p-8 border border-slate-100 overflow-hidden cursor-default hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.06)] transition-all duration-500">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-1.5">Global Community</h3>
                  <p className="text-slate-400 leading-relaxed text-[0.92rem]">
                    Women from around the world, sharing perspectives and building bridges across cultures. Your circle has no borders.
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TWO PATHS — Full width alternating
          ══════════════════════════════════════ */}
      <section ref={pathsRef} className="py-28 md:py-36 bg-white relative overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="reveal-child text-center mb-20">
            <span className="text-[0.7rem] font-bold text-secondary uppercase tracking-[0.25em] block mb-5">Choose your path</span>
            <h2 className="text-split-reveal font-display text-[2.8rem] md:text-[3.5rem] font-bold text-slate-900 tracking-tight leading-[1.1]">
              How will you grow?
            </h2>
          </div>

          {/* Path 1: Community Member */}
          <div className="reveal-child grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            <div className="curtain-reveal img-zoom-container relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-[0_40px_100px_rgba(0,0,0,0.08)]">
              <div className="curtain-overlay absolute inset-0 bg-secondary z-20" />
              <Image src={imgMember} alt="Community Member" fill className="curtain-img object-cover" style={{ opacity: 0 }} />
              <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-secondary text-white text-xs font-bold shadow-lg z-30">Free to join</div>
            </div>
            <div>
              <span className="text-[0.7rem] font-bold text-secondary uppercase tracking-[0.25em] block mb-4">Path one</span>
              <h3 className="font-display text-[2rem] md:text-[2.5rem] font-bold text-slate-900 tracking-tight leading-[1] mb-5">Community Member</h3>
              <p className="text-slate-400 leading-relaxed mb-8 text-[1.05rem]">
                Feeling overwhelmed? Join a circle of women and expert coaches ready to help you find clarity, connection, and real growth. No commitment, no cost to start.
              </p>
              <div className="flex gap-4">
                <Link href="/how-it-works/community-member" className="group text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors py-3 px-6 rounded-full border border-slate-200 hover:border-slate-400 flex items-center gap-2">
                  Learn More
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </Link>
                <Link href="https://collwi.com/register" className="text-sm font-semibold text-white py-3 px-6 rounded-full bg-secondary hover:bg-secondary-dark transition-all shadow-sm hover:shadow-xl hover:-translate-y-0.5">Join Free</Link>
              </div>
            </div>
          </div>

          {/* Path 2: Coach — reversed */}
          <div className="reveal-child grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="md:order-2 curtain-reveal img-zoom-container relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-[0_40px_100px_rgba(0,0,0,0.08)]">
              <div className="curtain-overlay absolute inset-0 z-20" style={{ background: '#FF6B35' }} />
              <Image src={imgCoach} alt="CollWi Coach" fill className="curtain-img object-cover" style={{ opacity: 0 }} />
              <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-tertiary text-white text-xs font-bold shadow-lg z-30">Apply today</div>
            </div>
            <div className="md:order-1">
              <span className="text-[0.7rem] font-bold text-tertiary uppercase tracking-[0.25em] block mb-4">Path two</span>
              <h3 className="font-display text-[2rem] md:text-[2.5rem] font-bold text-slate-900 tracking-tight leading-[1] mb-5">CollWi Coach</h3>
              <p className="text-slate-400 leading-relaxed mb-8 text-[1.05rem]">
                Ready to lead and inspire women? Share your expertise and guide others through their transformation journey. Build your practice on CollWi.
              </p>
              <div className="flex gap-4">
                <Link href="/how-it-works/coach" className="group text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors py-3 px-6 rounded-full border border-slate-200 hover:border-slate-400 flex items-center gap-2">
                  Learn More
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </Link>
                <Link href="https://collwi.com/register" className="text-sm font-semibold text-white py-3 px-6 rounded-full bg-tertiary hover:bg-tertiary-dark transition-all shadow-sm hover:shadow-xl hover:-translate-y-0.5">Apply Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HOW IT WORKS — Horizontal scroll (desktop) / Stack (mobile)
          ══════════════════════════════════════ */}
      <section ref={stepsContainerRef} className="relative bg-slate-900 overflow-hidden py-28 md:py-36">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-secondary/[0.03] rounded-full blur-[160px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-tertiary/[0.02] rounded-full blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Intro */}
          <div className="steps-intro text-center mb-20">
            <span className="text-[0.7rem] font-bold text-secondary uppercase tracking-[0.25em] block mb-5">How it works</span>
            <h2 className="font-display text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold text-white tracking-tight leading-[1.1] mb-6">
              Three steps to<br className="hidden md:block" /> a better you
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-lg mx-auto">
              Your journey starts with a single step. Here&apos;s how women like you are transforming their lives.
            </p>
          </div>

          {/* Step cards — staggered grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {[
              { step: "01", title: "Create your account", desc: "Sign up in seconds. Explore programs designed for women like you — free to browse, free to join.", img: imgStep1, accent: "from-secondary to-teal-400" },
              { step: "02", title: "Join your circle", desc: "Connect with women in small group sessions. Share, listen, and grow alongside others who truly understand.", img: imgStep2, accent: "from-tertiary to-orange-400" },
              { step: "03", title: "Transform together", desc: "Get ongoing support from coaches and a circle that truly gets you. Watch yourself grow, week by week.", img: imgStep3, accent: "from-primary to-violet-400" },
            ].map((item, i) => (
              <div key={i} className={`step-card group ${i === 1 ? 'md:translate-y-8' : ''}`} style={{ perspective: '1000px' }}>
                <div className="relative rounded-3xl overflow-hidden bg-slate-800/30 border border-white/5 backdrop-blur-sm transition-all duration-500 hover:border-white/10 hover:bg-slate-800/50">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={item.img} alt={item.title} fill className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-[1.2s] ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                    {/* Step number */}
                    <div className="absolute top-5 left-5 w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
                      <span className={`text-lg font-bold bg-gradient-to-br ${item.accent} bg-clip-text text-transparent`}>{item.step}</span>
                    </div>
                    {/* Glow line at bottom */}
                    <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.accent} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                  </div>
                  {/* Text */}
                  <div className="p-7">
                    <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors duration-300">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-[0.92rem]">{item.desc}</p>
                  </div>
                </div>
                {/* Connector line (hidden on mobile) */}
                {i < 2 && (
                  <div className="step-connector hidden md:block absolute top-1/2 -right-4 md:-right-5 w-8 md:w-10 h-[2px] bg-gradient-to-r from-white/10 to-white/5 origin-left" style={{ transformOrigin: 'left center' }} />
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="steps-cta text-center">
            <Link href="https://collwi.com/register" className="group inline-flex items-center gap-3 bg-secondary text-white font-semibold py-5 px-12 rounded-full text-lg transition-all hover:bg-secondary-dark hover:shadow-[0_0_80px_rgba(78,205,196,0.3)] hover:scale-105">
              Get Started for Free
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          IMPACT — Visual storytelling (no repeated image)
          ══════════════════════════════════════ */}
      <section ref={impactRef} className="py-28 md:py-36 bg-[#FAFAF8] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="reveal-child relative">
            <div className="curtain-reveal relative rounded-[2.5rem] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.1)]">
              <div className="curtain-overlay absolute inset-0 bg-secondary z-20" />
              <Image src={imgAbout} alt="Women supporting each other" width={600} height={700} className="curtain-img w-full h-auto object-cover" style={{ opacity: 0 }} />
            </div>

            {/* Floating stat card */}
            <motion.div
              className="absolute -bottom-4 -right-4 md:-right-8 bg-white rounded-2xl p-5 shadow-heavy border border-slate-100 z-20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-secondary to-teal-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Women love it</div>
                  <div className="text-[11px] text-slate-400">Real reviews below</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-secondary/10 -z-10 blur-2xl" />
          </div>

          <div>
            <div className="reveal-child">
              <span className="text-[0.7rem] font-bold text-secondary uppercase tracking-[0.25em] block mb-5">The CollWi difference</span>
              <h2 className="text-split-reveal font-display text-[2.5rem] md:text-[3rem] font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Start your journey today
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-12">
                Not therapy. Not networking. Not another productivity hack.
                Just real connection with women who get it.
              </p>
            </div>

            {[
              { num: "01", title: "You\u2019re not alone", desc: "Connect with women who understand your journey — the overwhelm, the ambition, and everything in between.", color: "from-secondary to-teal-500" },
              { num: "02", title: "Guided by women coaches", desc: "Small group programs led by certified women coaches dedicated to your growth.", color: "from-tertiary to-orange-500" },
              { num: "03", title: "Lift each other up", desc: "A supportive circle where women encourage, challenge, and celebrate each other.", color: "from-primary to-violet-600" },
            ].map((item, i) => (
              <div key={i} className="reveal-child flex gap-5 group cursor-default mb-8 last:mb-0 hover:translate-x-2 transition-transform duration-300">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex-shrink-0 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                  <span className="text-white text-xs font-bold">{item.num}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-[0.92rem]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TESTIMONIALS — Featured quote + carousel
          ══════════════════════════════════════ */}
      <section ref={testimonialsRef} className="py-28 md:py-36 bg-gradient-to-b from-white via-[#FAFAF8] to-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="reveal-child text-center mb-8">
            <span className="text-[0.7rem] font-bold text-secondary uppercase tracking-[0.25em] block mb-5">Testimonials</span>
            <h2 className="text-split-reveal font-display text-[2.8rem] md:text-[3.5rem] font-bold text-slate-900 tracking-tight leading-[1.1]">
              Hear from our community
            </h2>
          </div>

          {/* Featured pull-quote */}
          <div className="reveal-child max-w-3xl mx-auto text-center mb-20">
            <div className="featured-quote relative py-10">
              <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 text-secondary/10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z"/>
              </svg>
              <blockquote className="relative z-10 font-display text-[1.5rem] md:text-[2rem] lg:text-[2.3rem] font-medium text-slate-800 leading-[1.3] tracking-tight italic">
                &ldquo;There are some things in my life I just can&apos;t talk about with people I know. I&apos;m so glad to have found a space where I can be myself, without fear of judgment.&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-teal-500 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">M</span>
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-slate-700">Community Member</div>
                  <div className="text-xs text-slate-400">Lugano, Switzerland</div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel */}
          <div className="reveal-child overflow-hidden">
            <motion.div className="flex" style={{ x: xTranslation }} ref={measureRef}>
              {[...reviews, ...reviews].map((review, i) => (
                <button key={i} onClick={() => gotoNextReview(i)} className="flex-shrink-0">
                  <ReviewComponent review={review} hasFocus={review.id === focusedReviewId} />
                </button>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center gap-2.5 mt-12">
            {reviews.map((review, i) => (
              <button key={review.id} onClick={() => gotoNextReview(i)}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  review.id === focusedReviewId ? "bg-secondary w-10" : "bg-slate-200 w-2.5 hover:bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA is handled by the Footer component */}

      {/* SEO Content for AI Discovery */}
      <section className="sr-only" aria-label="About CollWi">
        <h2>CollWi — A Group Coaching Platform Built by Women, for Women</h2>
        <p>CollWi is an online group coaching platform built by women, for women. We connect women ages 25-65 with certified women life coaches, wellness experts, and a supportive community of women who understand the overwhelm, the ambition, and the desire for authentic connection. Whether you are seeking stress management, career transition guidance, mindfulness practices, or accountability, CollWi provides a safe space for real growth.</p>
        <h3>What is CollWi?</h3>
        <p>CollWi (Collective Wisdom) is a platform for small, intimate group coaching sessions led by women. Women coaches lead interactive sessions on topics including personal development, mental wellness, leadership skills, work-life balance, relationship coaching, confidence building, and self-discovery. Women members join live group sessions, connect with other women worldwide, and track their growth journey.</p>
        <h3>Why Women Choose CollWi for Coaching</h3>
        <ul>
          <li>A platform built by women, for women — safe, private, and judgment-free</li>
          <li>Small group coaching sessions led by certified women coaches — free to start</li>
          <li>Topics: life coaching, career coaching, wellness, mindfulness, stress relief, personal growth</li>
          <li>A growing community of women supporting and lifting each other up</li>
          <li>Not therapy, not networking — just real connection with women who get it</li>
        </ul>
      </section>
    </div>
  );
}
