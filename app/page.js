'use client'

import { ArrowRight, Users, Compass, Shield, Sparkles, Heart, TrendingUp, ChevronRight } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from './components/AnimatedSection'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient">
        {/* Decorative blobs */}
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-brand-teal/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-brand-purple/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-gold/8 rounded-full blur-3xl animate-float-slow" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-28 pb-20">
          <FadeIn delay={0.1}>
            <span className="inline-block px-5 py-2 bg-brand-teal/10 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-8">
              Group Coaching Platform
            </span>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-bold leading-[1.05] mb-8">
              <em className="text-brand-coral not-italic font-sans italic">Expert</em> Coaches.
              <br />
              <em className="text-brand-teal not-italic font-sans italic">Supportive</em> community.
            </h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="text-xl md:text-2xl text-brand-navy/60 max-w-2xl mx-auto mb-4 leading-relaxed">
              Your change starts here.
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <p className="text-lg text-brand-navy/50 max-w-xl mx-auto mb-12 leading-relaxed">
              Our group coaching creates a supportive community where you can overcome
              your challenges and grow alongside others, contributing to each other&apos;s success.
            </p>
          </FadeIn>

          <FadeIn delay={0.55}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://collwi.com/register"
                className="group inline-flex items-center gap-2.5 px-8 py-4 bg-brand-teal text-white font-semibold text-lg rounded-full shadow-teal hover:bg-brand-teal-dark hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Start for Free
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-8 py-4 text-brand-navy/70 font-medium text-lg rounded-full border border-gray-200 hover:border-brand-teal/40 hover:text-brand-teal transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </FadeIn>

          {/* Scroll indicator */}
          <FadeIn delay={0.8}>
            <div className="mt-20 flex flex-col items-center gap-2 text-brand-navy/30">
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <div className="w-px h-8 bg-gradient-to-b from-brand-navy/20 to-transparent" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Two Paths ─── */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-brand-purple/10 text-brand-purple text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-5">
                Choose Your Path
              </span>
              <h2 className="text-4xl md:text-5xl font-sans font-bold mb-5">
                Become a <em className="text-brand-teal italic">CollWier</em>
              </h2>
              <p className="text-lg text-brand-navy/50 max-w-2xl mx-auto">
                Whether you&apos;re seeking growth or guiding others, CollWi has a place for you.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <ScaleIn delay={0.1}>
              <div className="group relative bg-white rounded-3xl border border-gray-100 p-10 card-hover overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-teal to-brand-purple rounded-t-3xl" />
                <div className="w-14 h-14 bg-brand-teal/10 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="text-brand-teal" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Community Member</h3>
                <p className="text-xs font-medium text-brand-navy/40 tracking-wide mb-4">
                  Also called CollWier, pronounced &ldquo;CollWi(ee)er&rdquo;
                </p>
                <p className="text-brand-navy/60 leading-relaxed mb-8">
                  Join a small, guided group where you can be yourself, feel heard,
                  and grow alongside people who truly get it. No judgment, no pressure.
                </p>
                <a
                  href="/collwiers"
                  className="inline-flex items-center gap-2 text-brand-teal font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  Learn More <ChevronRight size={18} />
                </a>
              </div>
            </ScaleIn>

            <ScaleIn delay={0.2}>
              <div className="group relative bg-white rounded-3xl border border-gray-100 p-10 card-hover overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-gold to-brand-coral rounded-t-3xl" />
                <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-6">
                  <Compass className="text-brand-gold" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3">CollWi Coach</h3>
                <p className="text-xs font-medium text-brand-navy/40 tracking-wide mb-4">
                  Certified coaches building their practice
                </p>
                <p className="text-brand-navy/60 leading-relaxed mb-8">
                  Scale your impact with group coaching. We handle the tech, marketing,
                  and logistics so you can focus on what you do best&mdash;changing lives.
                </p>
                <a
                  href="/coaches"
                  className="inline-flex items-center gap-2 text-brand-coral font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  Learn More <ChevronRight size={18} />
                </a>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* ─── The Problem ─── */}
      <section className="py-24 md:py-32 px-6 mesh-gradient-intense">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-brand-coral/10 text-brand-coral text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-5">
                The Problem
              </span>
              <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6 leading-tight">
                Growth shouldn&apos;t be a<br />
                <em className="text-brand-coral italic">lonely journey</em>
              </h2>
              <p className="text-lg text-brand-navy/50 max-w-2xl mx-auto leading-relaxed">
                You&apos;ve tried self-help books, podcasts, and advice&mdash;but real change
                happens when you&apos;re not doing it alone.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {[
              {
                icon: <Users size={24} />,
                title: 'Isolation',
                desc: 'Feeling alone even when surrounded by people. Surface-level connections that leave you feeling emptier.',
              },
              {
                icon: <Shield size={24} />,
                title: 'Overwhelm',
                desc: "Carrying everything\u2014work, family, everyone's needs\u2014and wondering when it's finally your turn.",
              },
              {
                icon: <Sparkles size={24} />,
                title: 'Stagnation',
                desc: 'Your life looks "fine" from the outside, but something essential is missing. You know you\'re meant for more.',
              },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white rounded-2xl p-8 shadow-soft card-hover h-full">
                  <div className="w-12 h-12 bg-brand-coral/10 rounded-xl flex items-center justify-center text-brand-coral mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-brand-navy/55 leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── The Solution ─── */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-brand-teal/10 text-brand-teal text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-5">
                The Solution
              </span>
              <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6 leading-tight">
                What makes CollWi <em className="text-brand-teal italic">different</em>
              </h2>
              <p className="text-lg text-brand-navy/50 max-w-2xl mx-auto">
                Real change happens in community. CollWi brings together expert coaching
                and authentic human connection.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.1}>
            {[
              {
                icon: <Compass size={28} />,
                title: 'Guided Group Coaching',
                desc: "Professional coaches lead every session. You're not figuring this out alone.",
                color: 'teal',
              },
              {
                icon: <Heart size={28} />,
                title: 'Real Human Connection',
                desc: "Small groups of people who truly get it. Not surface-level\u2014real, meaningful bonds.",
                color: 'coral',
              },
              {
                icon: <Shield size={28} />,
                title: 'Safe & Structured',
                desc: 'No endless content. No pressure. Just clear, intentional sessions in a judgment-free space.',
                color: 'purple',
              },
              {
                icon: <TrendingUp size={28} />,
                title: 'Growth, Not Venting',
                desc: "We go beyond complaining. You'll leave with clarity, direction, and concrete steps forward.",
                color: 'gold',
              },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="group flex gap-6 p-8 rounded-2xl border border-gray-100 card-hover">
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center ${
                      item.color === 'teal' ? 'bg-brand-teal/10 text-brand-teal' :
                      item.color === 'coral' ? 'bg-brand-coral/10 text-brand-coral' :
                      item.color === 'purple' ? 'bg-brand-purple/10 text-brand-purple' :
                      'bg-brand-gold/10 text-brand-gold'
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-brand-navy/55 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section id="how-it-works" className="py-24 md:py-32 px-6 bg-surface-warm">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-brand-purple/10 text-brand-purple text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-5">
                Simple & Clear
              </span>
              <h2 className="text-4xl md:text-5xl font-sans font-bold">
                How CollWi <em className="text-brand-purple italic">works</em>
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {[
              {
                num: '01',
                title: 'Join a Group',
                desc: 'Find a small, intimate coaching group that fits your schedule and goals. Led by a certified coach who truly cares.',
              },
              {
                num: '02',
                title: 'Show Up',
                desc: 'Attend weekly live sessions designed to help you process, connect, and grow\u2014at your own pace.',
              },
              {
                num: '03',
                title: 'Get Support',
                desc: 'Stay connected with your group and coach between sessions. You\u2019re never in this alone.',
              },
              {
                num: '04',
                title: 'Move Forward',
                desc: 'With clarity, tools, and a community that actually gets it. Real transformation, together.',
              },
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex items-start gap-6 md:gap-8 p-6 md:p-8 bg-white rounded-2xl shadow-soft card-hover">
                  <span className="flex-shrink-0 text-3xl md:text-4xl font-sans font-bold text-brand-teal/30">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-brand-navy/55 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Quote Section ─── */}
      <section className="py-24 md:py-32 px-6 mesh-gradient-dark">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-3xl md:text-4xl font-sans italic text-white/90 mb-8 leading-relaxed">
              &ldquo;I know this can&apos;t be all there is&hellip; but I don&apos;t know where to start.&rdquo;
            </p>
            <div className="w-16 h-px bg-brand-teal mx-auto mb-8" />
            <p className="text-xl text-white/60">
              You don&apos;t have to know. That&apos;s what we&apos;re here for.
            </p>
          </FadeIn>
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white mb-6 leading-tight">
              Ready to start your<br />journey together?
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
              It&apos;s free to join. No credit card. No pressure.
              Just real support and a path forward.
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <a
              href="https://collwi.com/register"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-brand-teal-dark font-bold text-lg rounded-full shadow-soft-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              Get Started Free
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
