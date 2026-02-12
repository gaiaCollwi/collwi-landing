'use client'

import {
  ArrowRight, Check, Users, Zap, Globe, Heart,
  Award, BarChart3, Headphones, ChevronRight,
} from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from '../components/AnimatedSection'

const coachFitItems = [
  'Wants to scale beyond 1:1 sessions without losing the personal touch',
  'Believes in the power of community and peer support',
  "Is ready to help people who are overwhelmed, isolated, and ready for real change",
  'Values connection, emotional safety, and transformation over quick fixes',
]

const benefits = [
  {
    icon: <Users size={26} />,
    title: 'Reach More People',
    desc: 'Deliver group programs that serve multiple clients at once\u2014without sacrificing quality or impact.',
    color: 'teal',
  },
  {
    icon: <Heart size={26} />,
    title: 'Built-In Community',
    desc: 'Your participants get peer support between sessions, creating momentum and accountability.',
    color: 'coral',
  },
  {
    icon: <Headphones size={26} />,
    title: 'Platform & Support',
    desc: 'We handle the tech, marketing, and logistics. You focus on coaching.',
    color: 'purple',
  },
  {
    icon: <Globe size={26} />,
    title: 'Mission-Driven',
    desc: "You're not just building a business\u2014you're helping solve the loneliness crisis affecting millions.",
    color: 'gold',
  },
]

const steps = [
  { title: 'Design Your Program', desc: 'Create group coaching experiences aligned with your expertise' },
  { title: 'Launch Your Cohort', desc: 'We help you attract the right participants' },
  { title: 'Lead & Facilitate', desc: 'Guide live sessions with small groups (typically 8\u201312 people)' },
  { title: 'Build Community', desc: 'Foster peer connections that extend beyond sessions' },
  { title: 'Grow Your Practice', desc: 'Scale your impact while maintaining quality' },
]

const qualifications = [
  'Certified coaches (ICF, BCC, or equivalent credential)',
  'Experience with group facilitation (or willingness to learn)',
  'Commitment to emotional safety and inclusive practices',
  'Belief in the power of collective wisdom and peer support',
]

export default function CoachesPage() {
  return (
    <div className="min-h-screen">
      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-intense" />
        <div className="absolute top-32 left-[8%] w-80 h-80 bg-brand-gold/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-[5%] w-72 h-72 bg-brand-purple/8 rounded-full blur-3xl animate-float-delayed" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-32 pb-20">
          <FadeIn delay={0.1}>
            <span className="inline-block px-5 py-2 bg-brand-gold/15 text-brand-gold text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-8">
              For Coaches
            </span>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold leading-[1.1] mb-8">
              Scale your{' '}
              <em className="text-brand-teal italic">impact.</em>
              <br />
              Build your coaching{' '}
              <em className="text-brand-coral italic">practice.</em>
            </h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="text-xl md:text-2xl text-brand-navy/55 max-w-2xl mx-auto mb-12 leading-relaxed">
              CollWi helps certified coaches deliver group coaching programs that
              change lives&mdash;without burning out on 1:1 sessions.
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <a
              href="https://collwi.com/register"
              className="group inline-flex items-center gap-2.5 px-10 py-4.5 bg-brand-teal text-white font-semibold text-lg rounded-full shadow-teal hover:bg-brand-teal-dark hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Join as a Coach
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ─── This Is For You ─── */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-sans font-bold leading-tight">
                This is for you if you&apos;re a
                <br />
                certified coach who<em className="text-brand-teal italic">&hellip;</em>
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="space-y-4 max-w-2xl mx-auto" staggerDelay={0.08}>
            {coachFitItems.map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-surface-warm hover:bg-brand-teal-light/50 transition-colors duration-300 group">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-teal flex items-center justify-center mt-0.5">
                    <Check size={14} className="text-white" strokeWidth={3} />
                  </div>
                  <p className="text-lg text-brand-navy/70 leading-relaxed group-hover:text-brand-navy transition-colors">
                    {item}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Why Coach on CollWi ─── */}
      <section className="py-24 md:py-32 px-6 mesh-gradient-intense">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 bg-brand-purple/10 text-brand-purple text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-5">
                Benefits
              </span>
              <h2 className="text-4xl md:text-5xl font-sans font-bold">
                Why coach on <em className="text-brand-teal italic">CollWi?</em>
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {benefits.map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white rounded-2xl p-8 shadow-soft card-hover h-full">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                      item.color === 'teal' ? 'bg-brand-teal/10 text-brand-teal' :
                      item.color === 'coral' ? 'bg-brand-coral/10 text-brand-coral' :
                      item.color === 'purple' ? 'bg-brand-purple/10 text-brand-purple' :
                      'bg-brand-gold/10 text-brand-gold'
                    }`}
                  >
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

      {/* ─── How It Works ─── */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-brand-teal/10 text-brand-teal text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-5">
                Your Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-sans font-bold">
                How it <em className="text-brand-teal italic">works</em>
              </h2>
            </div>
          </FadeIn>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-8 md:left-10 top-0 bottom-0 w-px bg-gradient-to-b from-brand-teal/30 via-brand-purple/20 to-transparent hidden sm:block" />

            <div className="space-y-6">
              {steps.map((step, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="flex items-start gap-6 md:gap-8">
                    <div className="flex-shrink-0 relative z-10 w-16 md:w-20 h-16 md:h-20 rounded-2xl bg-gradient-to-br from-brand-teal/10 to-brand-purple/10 flex items-center justify-center border border-brand-teal/20">
                      <span className="text-2xl md:text-3xl font-sans font-bold text-brand-teal/60">
                        {i + 1}
                      </span>
                    </div>
                    <div className="pt-2 md:pt-4">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-brand-navy/55 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Who We're Looking For ─── */}
      <section className="py-24 md:py-32 px-6 bg-surface-warm">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 bg-brand-coral/10 text-brand-coral text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-5">
                Requirements
              </span>
              <h2 className="text-4xl md:text-5xl font-sans font-bold">
                Who we&apos;re <em className="text-brand-coral italic">looking for</em>
              </h2>
            </div>
          </FadeIn>

          <ScaleIn delay={0.1}>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft max-w-2xl mx-auto">
              <div className="space-y-5">
                {qualifications.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-coral/10 flex items-center justify-center mt-0.5">
                      <Award size={16} className="text-brand-coral" />
                    </div>
                    <p className="text-lg text-brand-navy/70 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* ─── About CollWi ─── */}
      <section className="py-20 md:py-24 px-6 mesh-gradient-dark">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h3 className="text-2xl md:text-3xl font-sans font-bold text-white/90 mb-6">
              About CollWi
            </h3>
            <p className="text-lg text-white/55 leading-relaxed mb-4">
              CollWi is a social platform that turns personal growth from a lonely journey
              into a shared, guided experience through live group coaching and community.
            </p>
            <p className="text-lg text-white/55 leading-relaxed">
              We&apos;re addressing the loneliness crisis by bringing people together with
              certified coaches in small, supportive groups.
            </p>
            <div className="w-12 h-px bg-brand-teal mx-auto mt-8 mb-6" />
            <p className="text-xl text-white/70 font-sans italic">
              Our mission: make growth social, accessible, and transformative.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="relative py-28 md:py-36 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold via-brand-coral to-brand-purple" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-48 h-48 bg-brand-teal rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white mb-6 leading-tight">
              Ready to make a<br />bigger impact?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl text-white/80 mb-12 max-w-xl mx-auto">
              Join CollWi&apos;s community of coaches who are transforming lives
              through group coaching.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a
              href="https://collwi.com/register"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-brand-coral font-bold text-lg rounded-full shadow-soft-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              Apply to Coach
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
