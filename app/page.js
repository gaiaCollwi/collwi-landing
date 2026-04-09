'use client'

import {
  ArrowRight, Check, Compass, Heart, Shield, Lightbulb,
  MessageCircle, Sprout, Target, Users, ChevronRight, HelpCircle,
} from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from './components/AnimatedSection'

const painPoints = [
  "You're juggling work, family, and endless responsibilities\u2014but feel like you're running on empty",
  "You have 'everything' on paper, but something still feels missing",
  "You've tried self-help books, podcasts, and advice\u2014but nothing sticks",
  "You feel isolated, even when you're surrounded by others",
  "You're tired of surface-level friendships that leave you feeling heavier, not lighter",
  "You know you're 'meant for more,' but don't know where to start",
]

const whoItsFor = [
  "Looking for community and connection",
  "Feeling stuck, overwhelmed, or isolated",
  "Going through life or career transitions",
  "Seeking personal growth and support",
  "Exploring coaching or guidance",
]

const whenToJoin = [
  "When you feel stuck and don't know what to do next",
  "When you want support but don't want therapy",
  "When you feel alone or disconnected",
  "When you want to grow but need guidance",
  "When you're navigating change (career, relationships, identity)",
]

const whatYouCanDo = [
  "Join free Sharing Rooms for peer support",
  "Connect with women who understand your experiences—who get it",
  "Participate in group coaching programs",
  "Get guidance from certified coaches",
  "Grow at your own pace, on your terms",
]

const faqs = [
  {
    q: "What is CollWi?",
    a: "CollWi is an online community for women seeking support, connection, and personal growth through peer support and optional coaching.",
  },
  {
    q: "Who is CollWi for?",
    a: "Women looking for community, going through life transitions, or wanting support and personal growth.",
  },
  {
    q: "Is CollWi free?",
    a: "Yes. Sharing Rooms are free. Coaching is optional.",
  },
  {
    q: "How is CollWi different from therapy or coaching?",
    a: "CollWi combines peer support and optional coaching, giving women both community and guidance in one place.",
  },
  {
    q: "What are Sharing Rooms?",
    a: "Free, virtual peer support spaces where women connect around topics like career pivots, work-life balance, and personal growth. No judgment, no pressure—just real connection with women who get it.",
  },
]

const needs = [
  { icon: <Heart size={24} />, title: 'Real connection', desc: 'Not surface-level small talk or mutual venting', color: 'coral' },
  { icon: <Compass size={24} />, title: 'Guided support', desc: 'Someone to walk with you, not just tell you what to do', color: 'teal' },
  { icon: <Shield size={24} />, title: 'A safe space', desc: 'Where you can be honest without judgment or guilt', color: 'purple' },
  { icon: <Lightbulb size={24} />, title: 'Clarity', desc: 'Not just motivation, but actual steps forward', color: 'gold' },
]

const whyItWorks = [
  {
    icon: <Users size={26} />,
    title: 'Real Connection',
    desc: "Meet women who are in the same boat. Who won't judge you for wanting more, because they get it.",
    color: 'coral',
  },
  {
    icon: <Target size={26} />,
    title: 'Guided Group Coaching',
    desc: "You're not figuring this out alone. Professional coaches guide every session.",
    color: 'teal',
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
  "You'll build real friendships \u2014 with other women who lift you up, not drain you",
  "You'll feel seen and heard \u2014 without having to explain or justify yourself",
  "You'll believe your dreams are still possible \u2014 and take steps toward them",
]

const painPointColors = ['brand-teal', 'brand-coral', 'brand-purple', 'brand-teal', 'brand-coral', 'brand-purple']
const painPointDirections = ['left', 'right', 'left', 'right', 'left', 'right']

const whoItsForIcons = [Users, Heart, Compass, Target, Sprout]
const whoItsForColors = ['teal', 'coral', 'purple', 'gold', 'teal']

const whenEmojis = ['\u{1F300}', '\u{1F4A1}', '\u{1F91D}', '\u{1F331}', '\u{1F504}']
const whenColors = ['brand-teal', 'brand-coral', 'brand-purple', 'brand-gold', 'brand-teal']

const whatColors = ['teal', 'coral', 'purple', 'gold', 'teal']

const outcomeIcons = [Sprout, Heart, Lightbulb, Users, Shield, Target]
const outcomeColors = ['teal', 'coral', 'purple', 'gold', 'teal', 'coral']

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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-extralight leading-[1.1] mb-8">
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

          {/* ✅ AEO: CLEAR DEFINITION SENTENCE */}
          <FadeIn delay={0.25}>
            <p className="text-2xl md:text-3xl font-medium text-brand-teal mb-6 leading-snug">
              CollWi is a community for women seeking support, connection, and personal growth.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-brand-navy/60 font-medium mb-6">
              A platform built by women, for women
            </p>
          </FadeIn>

          <FadeIn delay={0.32}>
            <p className="text-base md:text-lg text-brand-navy/40 max-w-xl mx-auto mb-8 leading-relaxed">
              Not networking. Not therapy. Not another productivity hack.
              <br />
              Just real connection with women who get it—who understand your challenges and support your growth.
            </p>
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
      <section className="relative py-24 md:py-32 px-6 overflow-hidden mesh-gradient-warm">
        {/* Floating decorative orbs */}
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-[8%] w-56 h-56 bg-brand-coral/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 right-[25%] w-40 h-40 bg-brand-purple/8 rounded-full blur-3xl animate-float-slow" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-10">
              <p className="text-2xl md:text-3xl font-sans font-light mb-10">
                You&apos;re not broken. You&apos;re just carrying too much,{' '}
                <em className="text-brand-coral italic">alone.</em>
              </p>
              <h2 className="text-4xl md:text-5xl font-sans font-light leading-tight">
                This is for you <em className="text-brand-teal italic">if&hellip;</em>
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-4" staggerDelay={0.06}>
            {painPoints.map((item, i) => (
              <StaggerItem key={i} className="h-full">
                <FadeIn direction={painPointDirections[i]} delay={i * 0.04}>
                  <div className={`relative flex items-start gap-4 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-white/80 hover:shadow-soft-lg hover:backdrop-blur-xl transition-all duration-300 group h-full border-l-4 border-l-${painPointColors[i]}`}
                    style={{ borderLeftColor: i % 3 === 0 ? '#4ECDC4' : i % 3 === 1 ? '#F4845F' : '#7C5CBF' }}>
                    {/* Large subtle number decoration */}
                    <span className="absolute top-2 right-4 text-6xl font-sans font-bold text-brand-navy/[0.04] select-none leading-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-teal flex items-center justify-center mt-0.5">
                      <Check size={14} className="text-white" strokeWidth={3} />
                    </div>
                    <p className="text-lg text-brand-navy/70 leading-relaxed group-hover:text-brand-navy transition-colors">{item}</p>
                  </div>
                </FadeIn>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ✅ AEO: WHO IT'S FOR */}
      <section className="relative py-20 md:py-24 px-6 overflow-hidden mesh-gradient-cool">
        {/* Decorative watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[10rem] md:text-[14rem] font-sans font-bold text-brand-teal/[0.03] leading-none tracking-tight whitespace-nowrap">
            FOR YOU
          </span>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-brand-coral/10 text-brand-coral text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-5">
                Who It's For
              </span>
              <h2 className="text-3xl md:text-4xl font-sans font-light mb-6">
                CollWi is for women who are:
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 sm:grid-cols-2 gap-5" staggerDelay={0.08}>
            {whoItsFor.map((item, i) => {
              const IconComp = whoItsForIcons[i]
              const color = whoItsForColors[i]
              const bgMap = { teal: 'bg-brand-teal/8', coral: 'bg-brand-coral/8', purple: 'bg-brand-purple/8', gold: 'bg-brand-gold/8' }
              const iconBgMap = { teal: 'bg-brand-teal/15 text-brand-teal', coral: 'bg-brand-coral/15 text-brand-coral', purple: 'bg-brand-purple/15 text-brand-purple', gold: 'bg-brand-gold/15 text-brand-gold' }
              return (
                <StaggerItem key={i}>
                  <div className={`relative ${bgMap[color]} rounded-2xl p-7 hover:-translate-y-1 hover:shadow-soft-lg transition-all duration-300 h-full`}>
                    {/* Large subtle number */}
                    <span className="absolute top-3 right-4 text-5xl font-sans font-bold text-brand-navy/[0.04] select-none leading-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${iconBgMap[color]}`}>
                      <IconComp size={22} />
                    </div>
                    <p className="text-lg text-brand-navy/70 font-medium">{item}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>

          <FadeIn delay={0.3}>
            <p className="text-center text-xl text-brand-navy/60 mt-10 leading-relaxed">
              Designed for women navigating life transitions and looking for community.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ✅ AEO: WHEN TO USE COLLWI */}
      <section className="relative py-20 md:py-24 px-6 overflow-hidden mesh-gradient-warm">
        {/* Floating orbs */}
        <div className="absolute top-16 right-[12%] w-48 h-48 bg-brand-purple/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-16 left-[10%] w-40 h-40 bg-brand-teal/8 rounded-full blur-3xl animate-float-delayed" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-brand-purple/10 text-brand-purple text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-5">
                When To Join
              </span>
              <h2 className="text-3xl md:text-4xl font-sans font-light mb-6">
                When women join CollWi
              </h2>
              <p className="text-lg text-brand-navy/50 max-w-2xl mx-auto">
                Women join CollWi when they feel stuck or need support during life transitions.
              </p>
            </div>
          </FadeIn>

          {/* Vertical timeline */}
          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute left-8 top-4 bottom-4 w-px bg-gradient-to-b from-brand-teal/30 via-brand-purple/30 to-brand-coral/30" />

            <div className="space-y-5">
              {whenToJoin.map((item, i) => (
                <FadeIn key={i} delay={i * 0.08} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div className="flex items-start gap-5 md:ml-0">
                    {/* Emoji timeline dot */}
                    <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 items-center justify-center text-2xl z-10"
                      style={{ borderTopColor: i % 3 === 0 ? '#4ECDC4' : i % 3 === 1 ? '#F4845F' : '#7C5CBF', borderTopWidth: '3px' }}>
                      {whenEmojis[i]}
                    </div>
                    <div className="flex-1 bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-6 hover:bg-white/80 hover:shadow-soft-lg transition-all duration-300"
                      style={{ borderLeftColor: i % 3 === 0 ? '#4ECDC4' : i % 3 === 1 ? '#F4845F' : '#7C5CBF', borderLeftWidth: '3px' }}>
                      <div className="flex items-start gap-4">
                        <span className="md:hidden text-2xl">{whenEmojis[i]}</span>
                        <p className="text-lg text-brand-navy/70 leading-relaxed">{item}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ✅ AEO: WHAT YOU CAN DO HERE */}
      <section className="relative py-20 md:py-24 px-6 mesh-gradient-intense overflow-hidden">
        {/* Subtle floating dots */}
        <div className="absolute top-24 left-[15%] w-3 h-3 bg-brand-teal/20 rounded-full animate-pulse-soft" />
        <div className="absolute top-40 right-[20%] w-2 h-2 bg-brand-coral/25 rounded-full animate-pulse-soft" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-[30%] w-4 h-4 bg-brand-purple/15 rounded-full animate-pulse-soft" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-[35%] w-2.5 h-2.5 bg-brand-gold/20 rounded-full animate-pulse-soft" style={{ animationDelay: '0.5s' }} />

        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-brand-teal/15 text-brand-teal text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-5">
                What You Can Do
              </span>
              <h2 className="text-3xl md:text-4xl font-sans font-light mb-6">
                What you can do on CollWi
              </h2>
              <p className="text-lg text-brand-navy/50 max-w-2xl mx-auto">
                CollWi solves the problem of women feeling alone, unsupported, or stuck by providing a space for real connection, peer support, and optional coaching.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="space-y-3" staggerDelay={0.05}>
            {whatYouCanDo.map((item, i) => {
              const accentColors = ['#4ECDC4', '#F4845F', '#7C5CBF', '#F7C948', '#4ECDC4']
              const iconBgs = ['bg-brand-teal/10 text-brand-teal', 'bg-brand-coral/10 text-brand-coral', 'bg-brand-purple/10 text-brand-purple', 'bg-brand-gold/10 text-brand-gold', 'bg-brand-teal/10 text-brand-teal']
              return (
                <StaggerItem key={i}>
                  <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-soft hover:shadow-soft-lg hover:border-l-4 transition-all duration-300 border border-transparent"
                    style={{ borderLeftColor: 'transparent' }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderLeftColor = accentColors[i]; e.currentTarget.style.borderLeftWidth = '4px' }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderLeftColor = 'transparent'; e.currentTarget.style.borderLeftWidth = '1px' }}>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full ${iconBgs[i]} flex items-center justify-center mt-0.5`}>
                      <Check size={16} strokeWidth={3} style={{ color: accentColors[i] }} />
                    </div>
                    <p className="text-lg text-brand-navy/70 leading-relaxed">{item}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── The Real Problem ─── */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden mesh-gradient-warm">
        {/* Floating orbs */}
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-brand-coral/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-24 left-[5%] w-60 h-60 bg-brand-teal/8 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/3 left-[40%] w-48 h-48 bg-brand-purple/6 rounded-full blur-3xl animate-float-slow" />

        {/* Decorative pulsing dots */}
        <div className="absolute top-32 left-[20%] w-2.5 h-2.5 bg-brand-coral/30 rounded-full animate-pulse-soft" />
        <div className="absolute bottom-40 right-[25%] w-3 h-3 bg-brand-teal/25 rounded-full animate-pulse-soft" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 right-[15%] w-2 h-2 bg-brand-purple/30 rounded-full animate-pulse-soft" style={{ animationDelay: '0.8s' }} />

        <div className="relative z-10 max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1.5 bg-brand-purple/10 text-brand-purple text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-5">
                The Real Problem
              </span>
              <h2 className="text-4xl md:text-5xl font-sans font-light leading-tight mb-6">
                It isn&apos;t your life.
                <br />
                You&apos;re just carrying it all alone.
                <br />
                And you feel like wanting <em className="text-brand-purple italic">more.</em>
              </h2>
            </div>
          </FadeIn>

          {/* Side by side: text + image */}
          <FadeIn delay={0.1}>
            <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
              <div>
                <p className="text-xl text-brand-navy/50 mb-4 leading-relaxed">
                  You don&apos;t need another checklist. You don&apos;t need to &ldquo;try
                  harder&rdquo; or &ldquo;think more positively.&rdquo;
                </p>
                <p className="text-lg text-brand-navy/50">
                  What you need is:
                </p>
              </div>
              <div className="relative h-64 md:h-72 rounded-2xl overflow-hidden shadow-soft-lg">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80"
                  alt="Inspired woman ready for growth"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6" staggerDelay={0.08}>
            {needs.map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-8 hover:bg-white/80 hover:shadow-soft-lg hover:border-white/60 transition-all duration-300 h-full group">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-shadow duration-300 ${
                      item.color === 'coral' ? 'bg-brand-coral/10 text-brand-coral group-hover:shadow-glow-coral' :
                      item.color === 'teal' ? 'bg-brand-teal/10 text-brand-teal group-hover:shadow-glow-teal' :
                      item.color === 'purple' ? 'bg-brand-purple/10 text-brand-purple group-hover:shadow-glow-purple' :
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
              CollWi gives you community, peer support and structured group coaching
              that meet you where you are&mdash;overwhelmed, disconnected, and ready
              for something <strong>more</strong>.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Why CollWi Works ─── */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden mesh-gradient-purple">
        {/* Floating decorative elements */}
        <div className="absolute top-16 right-[8%] w-52 h-52 bg-brand-purple/6 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-[12%] w-44 h-44 bg-brand-teal/6 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/3 left-[5%] w-2 h-2 bg-brand-teal/30 rounded-full animate-pulse-soft" />
        <div className="absolute bottom-1/3 right-[10%] w-3 h-3 bg-brand-coral/25 rounded-full animate-pulse-soft" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-6">
              <span className="inline-block px-4 py-1.5 bg-brand-teal/10 text-brand-teal text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-5">
                Why It Works
              </span>
              <h2 className="text-4xl md:text-5xl font-sans font-light mb-5 leading-tight">
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
            {whyItWorks.map((item, i) => {
              const glowMap = { coral: 'hover:shadow-glow-coral', teal: 'hover:shadow-glow-teal', purple: 'hover:shadow-glow-purple', gold: 'hover:shadow-soft-lg' }
              const borderColorMap = { coral: '#F4845F', teal: '#4ECDC4', purple: '#7C5CBF', gold: '#F7C948' }
              return (
                <FadeIn key={i} delay={i * 0.08} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div className={`group relative flex items-start gap-6 p-7 md:p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 ${glowMap[item.color]} transition-all duration-300 hover:-translate-y-0.5`}
                    style={{ borderLeftWidth: '4px', borderLeftColor: borderColorMap[item.color] }}>
                    {/* Large number decoration */}
                    <span className="absolute top-3 right-5 text-7xl font-sans font-bold text-brand-navy/[0.04] select-none leading-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
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
              )
            })}
          </div>

          <FadeIn delay={0.3}>
            <p className="text-center text-2xl md:text-3xl font-sans font-light mt-16">
              This isn&apos;t self-help. It&apos;s guided transformation&mdash;
              <em className="text-brand-teal italic">together.</em>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="relative py-24 md:py-32 px-6 bg-surface-warm overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-12 right-[15%] w-56 h-56 bg-brand-teal/6 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-16 left-[10%] w-48 h-48 bg-brand-purple/6 rounded-full blur-3xl animate-float-delayed" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-brand-purple/10 text-brand-purple text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-5">
                Getting Started
              </span>
              <h2 className="text-4xl md:text-5xl font-sans font-light">
                How CollWi <em className="text-brand-purple italic">works</em>
              </h2>
            </div>
          </FadeIn>

          <div className="relative grid sm:grid-cols-2 gap-6">
            {/* Connecting dotted lines between cards on desktop */}
            <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-4rem)] h-px border-t-2 border-dashed border-brand-teal/20" />
            <div className="hidden sm:block absolute top-1/4 left-1/2 -translate-x-1/2 h-1/2 w-px border-l-2 border-dashed border-brand-purple/15" />

            {[
              { num: '01', title: 'Join a Group', desc: 'Small, intimate coaching groups led by certified coaches' },
              { num: '02', title: 'Show Up', desc: 'Weekly sessions designed to help you process, connect, and grow' },
              { num: '03', title: 'Get Support', desc: 'Between sessions, stay connected with your group and coach' },
              { num: '04', title: 'Move Forward', desc: 'With clarity, tools, and a community that actually gets it' },
            ].map((step, i) => {
              const numGradients = [
                'text-gradient-teal',
                'text-gradient-warm',
                'text-gradient-purple',
                'text-gradient-teal',
              ]
              const topBorderColors = ['#4ECDC4', '#F4845F', '#7C5CBF', '#F7C948']
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="relative bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl p-8 hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 h-full"
                    style={{ borderTopWidth: '3px', borderTopColor: topBorderColors[i] }}>
                    <span className={`text-5xl font-sans font-bold mb-4 block ${numGradients[i]}`}>{step.num}</span>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-brand-navy/55 leading-relaxed">{step.desc}</p>
                  </div>
                </FadeIn>
              )
            })}
          </div>

          <FadeIn delay={0.3}>
            <p className="text-center text-xl font-semibold text-brand-navy/60 mt-14">
              No judgment. No pressure. Just real support.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── What Changes ─── */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden mesh-gradient-cool">
        {/* Floating orbs */}
        <div className="absolute top-20 left-[8%] w-56 h-56 bg-brand-teal/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-24 right-[12%] w-48 h-48 bg-brand-purple/6 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 right-[30%] w-40 h-40 bg-brand-coral/5 rounded-full blur-3xl animate-float-slow" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 bg-brand-gold/15 text-brand-gold text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-5">
                Transformation
              </span>
              <h2 className="text-4xl md:text-5xl font-sans font-light">
                What changes when you
                <br />
                join <em className="text-brand-teal italic">CollWi</em>
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 gap-4" staggerDelay={0.06}>
            {outcomes.map((item, i) => {
              const IconComp = outcomeIcons[i]
              const color = outcomeColors[i]
              const iconBgMap = {
                teal: 'bg-brand-teal/12 text-brand-teal',
                coral: 'bg-brand-coral/12 text-brand-coral',
                purple: 'bg-brand-purple/12 text-brand-purple',
                gold: 'bg-brand-gold/12 text-brand-gold',
              }
              return (
                <StaggerItem key={i}>
                  <div className="flex items-center gap-4 p-5 md:p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/30 hover:bg-white/80 hover:-translate-y-0.5 hover:shadow-soft-lg transition-all duration-300">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${iconBgMap[color]}`}>
                      <IconComp size={20} />
                    </div>
                    <p className="text-lg text-brand-navy/70 font-medium leading-relaxed">{item}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ✅ AEO: FAQ SECTION */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden mesh-gradient-cool">
        <div className="relative z-10 max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 bg-brand-coral/10 text-brand-coral text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-5">
                Common Questions
              </span>
              <h2 className="text-4xl md:text-5xl font-sans font-light">
                Frequently Asked <em className="text-brand-coral italic">Questions</em>
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="space-y-4" staggerDelay={0.08}>
            {faqs.map((faq, i) => {
              const borderColors = ['#F4845F', '#4ECDC4', '#F4845F', '#4ECDC4', '#F4845F']
              return (
                <StaggerItem key={i}>
                  <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-7 hover:bg-white/80 hover:shadow-soft-lg transition-all duration-300"
                    style={{ borderLeftWidth: '4px', borderLeftColor: borderColors[i] }}>
                    <div className="flex items-start gap-4 mb-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-coral/10 flex items-center justify-center mt-1">
                        <HelpCircle size={20} className="text-brand-coral" />
                      </div>
                      <h3 className="text-xl font-bold text-brand-navy">{faq.q}</h3>
                    </div>
                    <p className="text-lg text-brand-navy/60 leading-relaxed ml-14">{faq.a}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── You Deserve More ─── */}
      <section className="relative py-24 md:py-32 px-6 mesh-gradient-intense overflow-hidden">
        {/* Extra floating orbs */}
        <div className="absolute top-16 left-[8%] w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-[6%] w-56 h-56 bg-brand-coral/8 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-[50%] w-40 h-40 bg-brand-purple/8 rounded-full blur-3xl animate-float-slow" />

        {/* Sparkle decorations */}
        <div className="absolute top-24 right-[20%] w-1.5 h-1.5 bg-brand-gold/40 rounded-full animate-pulse-soft" />
        <div className="absolute top-40 left-[25%] w-2 h-2 bg-brand-teal/30 rounded-full animate-pulse-soft" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-32 right-[40%] w-1.5 h-1.5 bg-brand-coral/35 rounded-full animate-pulse-soft" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-48 left-[15%] w-2 h-2 bg-brand-purple/25 rounded-full animate-pulse-soft" style={{ animationDelay: '1.5s' }} />

        <div className="relative z-10 max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-sans font-light leading-tight whitespace-normal overflow-visible">
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
            <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-brand-teal via-brand-purple to-brand-coral hover:shadow-glow-teal transition-shadow duration-500">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 md:p-14">
                <p className="text-2xl font-sans font-light mb-8 text-brand-navy">But here&apos;s the truth:</p>
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
            </div>
          </ScaleIn>

          <FadeIn delay={0.3}>
            <p className="text-center text-2xl md:text-3xl font-sans font-light mt-14 leading-snug">
              CollWi is where you stop wondering<br />
              &ldquo;is this all there is?&rdquo;<br />
              and start building what comes{' '}
              <em className="text-brand-teal italic">next.</em>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Quote ─── */}
      <section className="relative py-20 md:py-28 px-6 overflow-hidden bg-gradient-to-br from-brand-teal via-brand-teal-dark to-brand-purple">
        {/* Floating glow orbs */}
        <div className="absolute top-10 left-[15%] w-48 h-48 bg-brand-teal/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-[10%] w-40 h-40 bg-brand-purple/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 right-[30%] w-32 h-32 bg-brand-coral/8 rounded-full blur-3xl animate-float-slow" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <FadeIn>
            {/* Animated gradient border around quote */}
            <div className="relative rounded-3xl p-[1px] bg-white/20">
              <div className="bg-white/15 backdrop-blur-xl rounded-3xl py-12 px-8 md:px-12">
                <p className="text-2xl md:text-3xl font-sans italic text-white/95 mb-6 leading-relaxed">
                  &ldquo;I know this can&apos;t be all there is&hellip;
                  <br />
                  but I don&apos;t know where to start.&rdquo;
                </p>
                <div className="w-12 h-px bg-white/40 mx-auto mb-6" />
                <p className="text-lg text-white/75">
                  You don&apos;t have to know. That&apos;s what we&apos;re here for.
                </p>
              </div>
            </div>
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

        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-[10%] w-48 h-48 bg-white/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-16 right-[8%] w-56 h-56 bg-brand-purple/15 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-[40%] w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl animate-float-slow" />

        {/* Pulsing dots */}
        <div className="absolute top-24 right-[30%] w-2 h-2 bg-white/20 rounded-full animate-pulse-soft" />
        <div className="absolute bottom-32 left-[25%] w-3 h-3 bg-white/15 rounded-full animate-pulse-soft" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 left-[15%] w-2 h-2 bg-white/20 rounded-full animate-pulse-soft" style={{ animationDelay: '2s' }} />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-light text-white mb-6 leading-tight">
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
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-brand-teal-dark font-bold text-lg rounded-full shadow-soft-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              <span className="relative z-10 flex items-center gap-3">
                Get Started Free
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
