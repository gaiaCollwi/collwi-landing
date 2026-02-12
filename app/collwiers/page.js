'use client'

import {
  ArrowRight, Check, Compass, Heart, Shield, Lightbulb,
  MessageCircle, Sprout, Target, Users, ChevronRight,
} from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from '../components/AnimatedSection'

const painPoints = [
  "You're juggling work, family, and endless responsibilities\u2014but feel like you're running on empty",
  "You have 'everything' on paper, but something still feels missing",
  "You've tried self-help books, podcasts, and advice\u2014but nothing sticks",
  "You feel isolated, even when you're surrounded by people",
  "You're tired of surface-level friendships that leave you feeling heavier, not lighter",
  "You know you're 'meant for more,' but don't know where to start",
]

const needs = [
  { icon: <Heart size={24} />, title: 'Real connection', desc: 'Not surface-level small talk or mutual venting', color: 'coral' },
  { icon: <Compass size={24} />, title: 'Guided support', desc: 'Someone to walk with you, not just tell you what to do', color: 'teal' },
  { icon: <Shield size={24} />, title: 'A safe space', desc: 'Where you can be honest without judgment or guilt', color: 'purple' },
  { icon: <Lightbulb size={24} />, title: 'Clarity', desc: 'Not just motivation, but actual steps forward', color: 'gold' },
]

const whyItWorks = [
  {
    icon: <Target size={26} />,
    title: 'Guided Group Coaching',
    desc: "You're not figuring this out alone. Professional coaches guide every session.",
    color: 'teal',
  },
  {
    icon: <Users size={26} />,
    title: 'Real Connection',
    desc: "Meet women who are in the same boat. Who won't judge you for wanting more, because they get it.",
    color: 'coral',
  },
  {
    icon: <Shield size={26} />,
    title: 'Structured, Not Overwhelming',
    desc: 'No endless content. No "do more" pressure. Just clear, intentional sessions.',
    color: 'purple',
  },
  {
    icon: <MessageCircle size={26} />,
    title: 'Personalized Support',
    desc: "Your coach knows your name, your story, your struggles. This isn't a YouTube video.",
    color: 'gold',
  },
  {
    icon: <Sprout size={26} />,
    title: 'Growth, Not Venting',
    desc: "We go deeper than complaining. You'll leave sessions with clarity and direction.",
    color: 'teal',
  },
]

const outcomes = [
  "You'll stop carrying everything alone \u2014 and finally feel supported",
  "You'll reconnect with yourself \u2014 beyond your roles as partner, parent, or employee",
  "You'll gain clarity \u2014 on what's missing and what to do about it",
  "You'll build real friendships \u2014 with women who lift you up, not drain you",
  "You'll feel seen and heard \u2014 without having to explain or justify yourself",
  "You'll believe your dreams are still possible \u2014 and take steps toward them",
]

export default function CollWiersPage() {
  return (
    <div className="min-h-screen">
      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-intense" />
        <div className="absolute top-32 right-[5%] w-80 h-80 bg-brand-purple/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-[8%] w-72 h-72 bg-brand-coral/8 rounded-full blur-3xl animate-float-delayed" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-32 pb-20">
          <FadeIn delay={0.1}>
            <span className="inline-block px-5 py-2 bg-brand-coral/10 text-brand-coral text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-8">
              For Members
            </span>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-8">
              You&apos;re exhausted.
              <br />
              You&apos;re overwhelmed.
              <br />
              <span className="text-brand-navy/50 text-[0.85em]">
                And from the outside,
                <br className="sm:hidden" /> your life looks{' '}
                <em className="text-brand-coral italic">fine.</em>
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="text-xl md:text-2xl text-brand-navy/55 max-w-2xl mx-auto mb-12 leading-relaxed">
              If you&apos;ve been carrying everything&mdash;work, family, everyone&apos;s
              needs&mdash;and wondering when it&apos;s finally your turn&hellip; you&apos;re in
              the right place.
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <a
              href="https://collwi.com/register"
              className="group inline-flex items-center gap-2.5 px-10 py-4.5 bg-brand-teal text-white font-semibold text-lg rounded-full shadow-teal hover:bg-brand-teal-dark hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Start Your Journey (Free)
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="mt-4 text-sm text-brand-navy/35">No credit card required</p>
          </FadeIn>
        </div>
      </section>

      {/* ─── This Is For You ─── */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                This is for you <em className="text-brand-teal italic">if&hellip;</em>
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-4" staggerDelay={0.06}>
            {painPoints.map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-surface-warm hover:bg-brand-teal-light/50 transition-colors duration-300 group">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-teal flex items-center justify-center mt-0.5">
                    <Check size={14} className="text-white" strokeWidth={3} />
                  </div>
                  <p className="text-lg text-brand-navy/70 leading-relaxed group-hover:text-brand-navy transition-colors">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.3}>
            <div className="mt-14 text-center">
              <p className="text-2xl md:text-3xl font-serif font-bold">
                You&apos;re not broken. You&apos;re just carrying too much,{' '}
                <em className="text-brand-coral italic">alone.</em>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── The Real Problem ─── */}
      <section className="py-24 md:py-32 px-6 mesh-gradient-intense">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-6">
              <span className="inline-block px-4 py-1.5 bg-brand-purple/10 text-brand-purple text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-5">
                The Real Problem
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
                It isn&apos;t your life.
                <br />
                It&apos;s that you&apos;re living it{' '}
                <em className="text-brand-purple italic">alone.</em>
              </h2>
              <p className="text-xl text-brand-navy/50 max-w-2xl mx-auto">
                You don&apos;t need another checklist. You don&apos;t need to &ldquo;try
                harder&rdquo; or &ldquo;think more positively.&rdquo;
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-center text-lg text-brand-navy/50 mb-14 max-w-xl mx-auto">
              What you need is:
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6" staggerDelay={0.08}>
            {needs.map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white rounded-2xl p-8 shadow-soft card-hover h-full">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                      item.color === 'coral' ? 'bg-brand-coral/10 text-brand-coral' :
                      item.color === 'teal' ? 'bg-brand-teal/10 text-brand-teal' :
                      item.color === 'purple' ? 'bg-brand-purple/10 text-brand-purple' :
                      'bg-brand-gold/10 text-brand-gold'
                    }`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-brand-navy/55 leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.3}>
            <p className="text-center text-xl text-brand-navy/60 mt-14 max-w-3xl mx-auto leading-relaxed">
              CollWi gives you structured group coaching that meets you where you
              are&mdash;overwhelmed, disconnected, and ready for something{' '}
              <strong>real</strong>.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Why CollWi Works ─── */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-6">
              <span className="inline-block px-4 py-1.5 bg-brand-teal/10 text-brand-teal text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-5">
                Why It Works
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-5 leading-tight">
                Why CollWi works when<br />
                everything else <em className="text-brand-teal italic">hasn&apos;t</em>
              </h2>
              <p className="text-lg text-brand-navy/50 max-w-2xl mx-auto">
                Most support feels generic. Impersonal. Like it&apos;s designed for
                &ldquo;everyone&rdquo; but speaks to no one.
              </p>
            </div>
          </FadeIn>

          <div className="mt-14 space-y-5">
            {whyItWorks.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="group flex items-start gap-6 p-7 md:p-8 rounded-2xl border border-gray-100 card-hover">
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
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <p className="text-center text-2xl md:text-3xl font-serif font-bold mt-16">
              This isn&apos;t self-help. It&apos;s guided transformation&mdash;
              <em className="text-brand-teal italic">together.</em>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="py-24 md:py-32 px-6 bg-surface-warm">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-brand-purple/10 text-brand-purple text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-5">
                Getting Started
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold">
                How CollWi <em className="text-brand-purple italic">works</em>
              </h2>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { num: '01', title: 'Join a Group', desc: 'Small, intimate coaching groups led by certified coaches' },
              { num: '02', title: 'Show Up', desc: 'Weekly sessions designed to help you process, connect, and grow' },
              { num: '03', title: 'Get Support', desc: 'Between sessions, stay connected with your group and coach' },
              { num: '04', title: 'Move Forward', desc: 'With clarity, tools, and a community that actually gets it' },
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-soft card-hover h-full">
                  <span className="text-4xl font-serif font-bold text-brand-teal/20 mb-4 block">{step.num}</span>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-brand-navy/55 leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <p className="text-center text-xl font-semibold text-brand-navy/60 mt-14">
              No judgment. No pressure. Just real support.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── What Changes ─── */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 bg-brand-gold/15 text-brand-gold text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-5">
                Transformation
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold">
                What changes when you
                <br />
                join <em className="text-brand-teal italic">CollWi</em>
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="space-y-4" staggerDelay={0.06}>
            {outcomes.map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex items-center gap-5 p-5 md:p-6 rounded-2xl bg-gradient-to-r from-surface-cool to-brand-teal-light/30 hover:from-brand-teal-light/50 hover:to-brand-teal-light/40 transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-teal/10 rounded-xl flex items-center justify-center">
                    <Sprout size={20} className="text-brand-teal" />
                  </div>
                  <p className="text-lg text-brand-navy/70 font-medium leading-relaxed">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── You Deserve More ─── */}
      <section className="py-24 md:py-32 px-6 mesh-gradient-intense">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                You deserve more than{' '}
                <em className="text-brand-coral italic">&ldquo;fine.&rdquo;</em>
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-5 text-lg md:text-xl text-brand-navy/55 mb-14 leading-relaxed text-center">
              <p>You&apos;ve spent years taking care of everyone else.</p>
              <p>You&apos;ve silenced your own needs because your life looks &ldquo;good enough&rdquo; from the outside.</p>
              <p>You&apos;ve told yourself you should be grateful&mdash;and used that gratitude to ignore what&apos;s missing.</p>
            </div>
          </FadeIn>

          <ScaleIn delay={0.2}>
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-soft-xl border border-gray-100">
              <p className="text-2xl font-serif font-bold mb-8 text-brand-navy">But here&apos;s the truth:</p>
              <div className="space-y-5 text-xl text-brand-navy/65 leading-relaxed">
                <p>
                  You can be grateful <em className="text-brand-teal font-semibold italic">and</em> want more.
                </p>
                <p>
                  You can have a stable life <em className="text-brand-teal font-semibold italic">and</em> crave
                  meaning, connection, and purpose.
                </p>
                <p>
                  You don&apos;t have to wait until everything falls apart to ask for support.
                </p>
              </div>
            </div>
          </ScaleIn>

          <FadeIn delay={0.3}>
            <p className="text-center text-2xl md:text-3xl font-serif font-bold mt-14 leading-snug">
              CollWi is where you stop wondering<br />
              &ldquo;is this all there is?&rdquo;<br />
              and start building what comes{' '}
              <em className="text-brand-teal italic">next.</em>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Quote ─── */}
      <section className="py-20 md:py-28 px-6 mesh-gradient-dark">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <p className="text-2xl md:text-3xl font-serif italic text-white/85 mb-6 leading-relaxed">
              &ldquo;I know this can&apos;t be all there is&hellip;
              <br />
              but I don&apos;t know where to start.&rdquo;
            </p>
            <div className="w-12 h-px bg-brand-teal mx-auto mb-6" />
            <p className="text-lg text-white/50">
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Ready to stop carrying<br />it all alone?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl text-white/80 mb-4">
              Join CollWi today. It&apos;s free to start.
            </p>
            <p className="text-lg text-white/60 mb-12">
              No credit card. No pressure. Just real support, real connection, and a path forward.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
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
