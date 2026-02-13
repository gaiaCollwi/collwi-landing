'use client'

import { ArrowRight, Users, Target, Heart } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/AnimatedSection'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* ─── Hero Section ─── */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-intense" />
        <div className="absolute top-32 right-[5%] w-80 h-80 bg-brand-purple/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-[8%] w-72 h-72 bg-brand-coral/8 rounded-full blur-3xl animate-float-delayed" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-32 pb-20">
          <FadeIn delay={0.1}>
            <span className="inline-block px-5 py-2 bg-brand-teal/10 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-8">
              About Us
            </span>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-light leading-[1.1] mb-8">
              About Us
            </h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="text-xl md:text-2xl text-brand-navy/60 max-w-3xl mx-auto leading-relaxed">
              We are a vibrant community of &ldquo;CollWiers&rdquo; united by a passion for personal growth 
              and a commitment to empowering each other on our unique journeys.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Building Community Together ─── */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-sans font-light text-center mb-16">
              Building Community <em className="text-brand-teal italic">Together</em>
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.1}>
            <StaggerItem>
              <div className="bg-surface-warm rounded-2xl p-8 h-full hover:shadow-soft transition-shadow duration-300">
                <div className="w-14 h-14 bg-brand-teal/10 rounded-2xl flex items-center justify-center mb-6">
                  <Users size={26} className="text-brand-teal" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-navy">Who We Are</h3>
                <p className="text-lg text-brand-navy/60 leading-relaxed">
                  CollWi is a digital platform designed to foster collaboration, connection, and growth 
                  through virtual social groups, professional group coaching programs, and topic-based sharing rooms.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-surface-warm rounded-2xl p-8 h-full hover:shadow-soft transition-shadow duration-300">
                <div className="w-14 h-14 bg-brand-coral/10 rounded-2xl flex items-center justify-center mb-6">
                  <Target size={26} className="text-brand-coral" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-navy">Our Mission</h3>
                <p className="text-lg text-brand-navy/60 leading-relaxed">
                  Our mission is to empower individuals and communities to thrive by providing a safe, 
                  innovative, and inclusive environment where they can learn, share, and grow together.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-surface-warm rounded-2xl p-8 h-full hover:shadow-soft transition-shadow duration-300">
                <div className="w-14 h-14 bg-brand-purple/10 rounded-2xl flex items-center justify-center mb-6">
                  <Heart size={26} className="text-brand-purple" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-navy">Our Belief</h3>
                <p className="text-lg text-brand-navy/60 leading-relaxed">
                  At CollWi, we believe in the transformative power of collective wisdom and shared experiences. 
                  Our group coaching sessions offer a supportive and dynamic space where you can engage with diverse 
                  perspectives, discover fresh insights, and build valuable skills.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="relative py-28 md:py-36 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal via-brand-teal-dark to-brand-purple" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-48 h-48 bg-brand-gold rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-light text-white mb-6 leading-tight">
              Belong and thrive.
              <br />
              Start your CollWi journey today.
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <a
              href="https://collwi.com/register"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-brand-teal-dark font-bold text-lg rounded-full shadow-soft-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              Join us for free!
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
