'use client'

import Image from "next/image";
import BreadcrumbSchema from '@/app/components/revamp/BreadcrumbSchema';
import image_1 from "@/assets/images/landing/landingpage about image 1.png";
import Link from "next/link";

export default function About() {
  return (
    <div className="w-full">
      {/* ─── CINEMATIC HERO ─── */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0F172A 0%, #1E293B 40%, #0F172A 100%)",
        }}
      >
        {/* Atmospheric gradient orbs */}
        <div
          className="absolute top-[-80px] left-[-100px] w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(78,205,196,0.20) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-120px] right-[10%] w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[30%] right-[30%] w-[350px] h-[350px] rounded-full blur-3xl pointer-events-none animate-blob-morph"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Noise texture */}
        <div className="noise-overlay absolute inset-0 pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-24">
          {/* Left: text */}
          <div className="flex flex-col gap-6 animate-fade-in-up">
            <span className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-body">
              Our Story
            </span>
            <h1 className="font-display text-display-lg text-white leading-[1.1]">
              About Us
            </h1>
            <p className="font-body text-lg md:text-xl text-white/60 max-w-lg leading-relaxed">
              We are a vibrant community of &ldquo;CollWiers&rdquo; united by a
              passion for personal growth and a commitment to empowering each
              other on our unique journeys.
            </p>
            <div className="mt-4 h-[3px] w-24 rounded-full bg-gradient-to-r from-secondary to-tertiary" />
          </div>

          {/* Right: hero image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative glow behind image */}
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-secondary/20 via-transparent to-tertiary/20 blur-2xl" />
              <Image
                src={image_1}
                alt="Woman coach"
                width={560}
                height={560}
                className="relative rounded-2xl object-cover shadow-heavy"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ─── SECTION HEADER ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="font-display text-display-md md:text-display-lg text-slate-900 leading-tight">
            Building{" "}
            <span className="text-gradient-teal italic">Community</span>{" "}
            Together
          </h2>
          <p className="font-body text-slate-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Three pillars define everything we do — who we are, the mission
            that drives us, and the beliefs that hold us together.
          </p>
        </div>
      </section>

      {/* ─── CONTENT SECTIONS ─── */}

      {/* 01 — Who We Are */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Number accent */}
          <div className="lg:col-span-3 flex lg:justify-center">
            <span
              className="font-display text-[120px] md:text-[160px] leading-none font-bold select-none"
              style={{
                background:
                  "linear-gradient(135deg, #4ECDC4 0%, #4ECDC4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                opacity: 0.15,
              }}
            >
              01
            </span>
          </div>
          {/* Content */}
          <div className="lg:col-span-9">
            <div className="border-l-4 border-secondary pl-8 md:pl-12">
              <h3 className="font-display text-display-sm text-slate-900 mb-4">
                Who <span className="text-gradient-teal italic">We Are</span>
              </h3>
              <p className="font-body text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
                CollWi is a digital platform designed to foster collaboration,
                connection, and growth through virtual social groups,
                professional group coaching programs, and topic-based sharing
                rooms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Our Mission */}
      <section className="py-20 md:py-28" style={{ background: "#FFF8F0" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content (swapped to left) */}
          <div className="lg:col-span-9 order-2 lg:order-1">
            <div className="border-l-4 border-tertiary pl-8 md:pl-12">
              <h3 className="font-display text-display-sm text-slate-900 mb-4">
                Our{" "}
                <span className="text-gradient-warm italic">Mission</span>
              </h3>
              <p className="font-body text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
                Our mission is to empower individuals and communities to thrive
                by providing a safe, innovative, and inclusive environment where
                they can learn, share, and grow together.
              </p>
            </div>
          </div>
          {/* Number accent (swapped to right) */}
          <div className="lg:col-span-3 flex lg:justify-center order-1 lg:order-2">
            <span
              className="font-display text-[120px] md:text-[160px] leading-none font-bold select-none"
              style={{
                background:
                  "linear-gradient(135deg, #FF6B35 0%, #FF6B35 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                opacity: 0.15,
              }}
            >
              02
            </span>
          </div>
        </div>
      </section>

      {/* 03 — Our Belief */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Number accent */}
          <div className="lg:col-span-3 flex lg:justify-center">
            <span
              className="font-display text-[120px] md:text-[160px] leading-none font-bold select-none"
              style={{
                background:
                  "linear-gradient(135deg, #7C3AED 0%, #7C3AED 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                opacity: 0.15,
              }}
            >
              03
            </span>
          </div>
          {/* Content */}
          <div className="lg:col-span-9">
            <div className="border-l-4 border-primary pl-8 md:pl-12">
              <h3 className="font-display text-display-sm text-slate-900 mb-4">
                Our <span className="italic text-primary">Belief</span>
              </h3>
              <p className="font-body text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
                At CollWi, we believe in the transformative power of collective
                wisdom and shared experiences. Our group coaching sessions offer
                a supportive and dynamic space where you can engage with diverse
                perspectives, discover fresh insights, and build valuable
                skills. Our mission is to help you reach your goals and achieve
                your full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section
        className="relative py-28 md:py-36 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0F172A 0%, #1E293B 40%, #0F172A 100%)",
        }}
      >
        {/* Orbs */}
        <div
          className="absolute top-[-60px] right-[-60px] w-[350px] h-[350px] rounded-full blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(78,205,196,0.20) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-80px] left-[10%] w-[300px] h-[300px] rounded-full blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
          }}
        />
        <div className="noise-overlay absolute inset-0 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-8">
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-body">
            Take the Next Step
          </span>
          <h2 className="font-display text-display-md md:text-display-lg text-white leading-tight">
            Ready to join our{" "}
            <span className="text-gradient-teal italic">community</span>?
          </h2>
          <p className="font-body text-white/50 text-lg max-w-xl leading-relaxed">
            Become a CollWier today and start your journey of growth,
            connection, and shared wisdom.
          </p>
          <Link href="https://collwi.com/register" className="btn-teal mt-4">
            Get Started
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "About CollWi",
            description: "Learn about CollWi — a digital platform designed to foster collaboration, connection, and growth through group coaching.",
            url: "https://collwi.com/about"
          })
        }}
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://collwi.com" },
        { name: "About Us", url: "https://collwi.com/about" },
      ]} />
    </div>
  );
}
