'use client'

import { useState } from 'react'
import {
  ArrowRight, Users, Compass, Shield, Heart, MessageCircle,
  Sprout, Clock, Calendar, ChevronDown, Sparkles,
} from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from '../components/AnimatedSection'

const faqs = [
  {
    q: 'What exactly is CollWi?',
    a: 'CollWi is a group coaching platform that connects you with certified coaches and a small, supportive community. Think of it as guided personal growth\u2014but you\u2019re not doing it alone. You join a small group (typically 8\u201312 people), attend weekly live sessions with a professional coach, and build real relationships along the way.',
  },
  {
    q: 'How is this different from therapy?',
    a: 'Therapy focuses on healing past trauma and diagnosing conditions. CollWi is about forward momentum\u2014gaining clarity, building connection, and creating the life you actually want. Our coaches are certified professionals, but the focus is on growth, not treatment. Many members do both and find they complement each other beautifully.',
  },
  {
    q: 'How is this different from self-help books or podcasts?',
    a: 'Books and podcasts give you information. CollWi gives you transformation. The difference? Accountability, real human connection, and a coach who knows your story. Information alone rarely changes lives\u2014but community and guided support do.',
  },
  {
    q: 'Do I need to share personal things with strangers?',
    a: 'You share only what you\u2019re comfortable with. Our coaches create emotionally safe spaces with clear guidelines. Most members are surprised by how quickly the group feels like a trusted circle\u2014not strangers. You set your own pace.',
  },
  {
    q: 'How much does it cost?',
    a: 'It\u2019s free to join and explore. We offer different coaching programs at various price points, so there\u2019s something for every budget. You can browse available groups and pricing after creating your free account.',
  },
  {
    q: 'What if I\u2019m too busy?',
    a: 'Sessions are typically 60\u201390 minutes per week. If you\u2019re too busy to invest an hour in yourself, that might be exactly why you need this. We offer groups at various times, including evenings and weekends, to fit different schedules.',
  },
  {
    q: 'What qualifications do your coaches have?',
    a: 'All CollWi coaches hold recognized certifications (ICF, BCC, or equivalent). They\u2019re experienced in group facilitation and committed to emotional safety and inclusive practices. Every coach goes through our vetting process before leading groups.',
  },
  {
    q: 'Can I try it before committing?',
    a: 'Absolutely. You can join for free, explore available groups, and find the right fit before making any commitment. We believe the experience speaks for itself.',
  },
]

const faqBorderColors = [
  'border-l-brand-teal',
  'border-l-brand-coral',
  'border-l-brand-purple',
  'border-l-brand-gold',
  'border-l-brand-teal',
  'border-l-brand-coral',
  'border-l-brand-purple',
  'border-l-brand-gold',
]

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`glassmorphism rounded-xl border-l-4 ${faqBorderColors[index % faqBorderColors.length]} mb-4 last:mb-0 transition-all duration-300 hover:shadow-soft`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 px-6 text-left group"
      >
        <span className="text-lg font-semibold text-brand-navy/80 group-hover:text-brand-navy pr-4 transition-colors">
          {q}
        </span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-brand-navy/30 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-brand-navy/55 leading-relaxed px-6 pr-12">{a}</p>
      </div>
    </div>
  )
}

/* Floating decorative orb */
function FloatingOrb({ className }) {
  return <div className={`absolute rounded-full blur-3xl pointer-events-none ${className}`} />
}

/* Decorative dots cluster */
function DecorativeDots({ className }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <div className="relative">
        <div className="w-2 h-2 rounded-full bg-brand-teal/30 absolute top-0 left-0 animate-pulse-soft" />
        <div className="w-1.5 h-1.5 rounded-full bg-brand-coral/25 absolute top-4 left-6 animate-pulse-soft" style={{ animationDelay: '1s' }} />
        <div className="w-2.5 h-2.5 rounded-full bg-brand-purple/20 absolute top-8 left-2 animate-pulse-soft" style={{ animationDelay: '2s' }} />
        <div className="w-1 h-1 rounded-full bg-brand-gold/30 absolute top-2 left-10 animate-pulse-soft" style={{ animationDelay: '0.5s' }} />
      </div>
    </div>
  )
}

export default function DetailsPage() {
  return (
    <div className="min-h-screen">
      {/* ─── Hero ─── */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden mesh-gradient-intense">
        <FloatingOrb className="top-20 right-[15%] w-64 h-64 bg-brand-purple/12 animate-float" />
        <FloatingOrb className="top-40 left-[10%] w-48 h-48 bg-brand-teal/10 animate-float-delayed" />
        <FloatingOrb className="bottom-10 right-[30%] w-36 h-36 bg-brand-coral/8 animate-float-slow" />
        <FloatingOrb className="bottom-20 left-[20%] w-56 h-56 bg-brand-gold/8 animate-float" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <span className="inline-block px-5 py-2 bg-brand-purple/10 text-brand-purple text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6 shadow-soft">
              More Details
            </span>
            <h1 className="text-4xl md:text-6xl font-sans font-light leading-tight mb-6">
              Everything you need to know
              <br />
              about <em className="text-brand-teal italic">CollWi</em>
            </h1>
            <p className="text-lg md:text-xl text-brand-navy/50 max-w-xl mx-auto leading-relaxed">
              Curious how it all works? Here&apos;s the full picture&mdash;from
              what happens in sessions to how you get started.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── What Is CollWi ─── */}
      <section className="relative py-24 md:py-32 px-6 mesh-gradient-cool overflow-hidden">
        <DecorativeDots className="top-12 right-[8%]" />
        <FloatingOrb className="bottom-0 left-[5%] w-40 h-40 bg-brand-teal/6 animate-float-slow" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-sans font-light leading-tight mb-6">
                A platform built for{' '}
                <em className="text-brand-teal italic">real growth</em>
              </h2>
              <p className="text-lg text-brand-navy/50 max-w-2xl mx-auto leading-relaxed">
                CollWi is a social platform that turns personal growth from a lonely
                journey into a shared, guided experience through community, peer support,
                free sharing rooms and live group coaching.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {[
              {
                icon: <Compass size={26} />,
                title: 'Expert-Led Sessions',
                desc: 'Every group is guided by a certified coach who brings professional expertise and genuine care.',
                color: 'teal',
              },
              {
                icon: <Users size={26} />,
                title: 'Small Groups',
                desc: 'Intimate groups of 8\u201312 people where everyone is seen, heard, and supported.',
                color: 'purple',
              },
              {
                icon: <Heart size={26} />,
                title: 'Real Community',
                desc: 'Connections that extend beyond sessions. People who become part of your real life.',
                color: 'coral',
              },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className={`glassmorphism rounded-2xl p-8 card-hover h-full border-t-2 ${
                  item.color === 'teal' ? 'border-t-brand-teal hover:shadow-glow-teal' :
                  item.color === 'purple' ? 'border-t-brand-purple hover:shadow-glow-purple' :
                  'border-t-brand-coral hover:shadow-glow-coral'
                }`}>
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                      item.color === 'teal' ? 'bg-gradient-to-br from-brand-teal/20 to-brand-teal/5 text-brand-teal' :
                      item.color === 'purple' ? 'bg-gradient-to-br from-brand-purple/20 to-brand-purple/5 text-brand-purple' :
                      'bg-gradient-to-br from-brand-coral/20 to-brand-coral/5 text-brand-coral'
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

      {/* Decorative divider */}
      <div className="relative h-16 overflow-hidden">
        <div className="absolute inset-x-0 top-0 flex justify-center gap-3">
          <div className="w-2 h-2 rounded-full bg-brand-teal/30 animate-pulse-soft" />
          <div className="w-2 h-2 rounded-full bg-brand-purple/25 animate-pulse-soft" style={{ animationDelay: '1s' }} />
          <div className="w-2 h-2 rounded-full bg-brand-coral/20 animate-pulse-soft" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      {/* ─── A Space Where You Can Be Yourself ─── */}
      <section className="relative py-24 md:py-32 px-6 mesh-gradient-warm overflow-hidden">
        <FloatingOrb className="top-20 right-[10%] w-48 h-48 bg-brand-coral/8 animate-float" />
        <FloatingOrb className="bottom-10 left-[8%] w-36 h-36 bg-brand-purple/6 animate-float-delayed" />
        <DecorativeDots className="bottom-20 right-[12%]" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-sans font-light leading-tight mb-6">
                A space where you can{' '}
                <em className="text-brand-teal italic">be yourself</em>
              </h2>
              <p className="text-lg text-brand-navy/50 max-w-2xl mx-auto leading-relaxed">
                CollWi is built on community. Here&apos;s how we create space for
                women to connect, support each other, and grow together.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="space-y-10" staggerDelay={0.1}>
            {[
              {
                title: 'Community',
                desc: 'Find women navigating challenges similar to yours. A place to connect, share, and feel understood. Because sometimes the most powerful thing is realizing you&apos;re not alone.',
                icon: <Users size={26} />,
                color: 'teal',
              },
              {
                title: 'Sharing Rooms',
                desc: 'Free small group conversations where you can talk openly, face to face. No pressure, no judgment — just women listening to each other.',
                icon: <MessageCircle size={26} />,
                color: 'purple',
              },
              {
                title: 'Peer Support',
                desc: 'Connect with other women whenever you need through sharing rooms and chat. Sometimes a short conversation is enough to feel a little lighter.',
                icon: <Heart size={26} />,
                color: 'coral',
              },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className={`glassmorphism rounded-2xl p-8 shadow-soft card-hover border-l-4 ${
                  item.color === 'teal' ? 'border-l-brand-teal hover:shadow-glow-teal' :
                  item.color === 'purple' ? 'border-l-brand-purple hover:shadow-glow-purple' :
                  'border-l-brand-coral hover:shadow-glow-coral'
                }`}>
                  <div className="flex items-start gap-6">
                    <div
                      className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center ${
                        item.color === 'teal' ? 'bg-gradient-to-br from-brand-teal/20 to-brand-teal/5 text-brand-teal' :
                        item.color === 'purple' ? 'bg-gradient-to-br from-brand-purple/20 to-brand-purple/5 text-brand-purple' :
                        'bg-gradient-to-br from-brand-coral/20 to-brand-coral/5 text-brand-coral'
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-brand-navy mb-3">
                        {item.title}
                      </h3>
                      <p className="text-base md:text-lg text-brand-navy/60 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── CTA Break ─── */}
      <section className="relative py-14 px-6 overflow-hidden" style={{
        background: 'radial-gradient(ellipse at 30% 50%, rgba(78, 205, 196, 0.12) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(124, 92, 191, 0.08) 0%, transparent 60%), #F0F9F8'
      }}>
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <FadeIn>
            <p className="text-xl text-brand-navy/60 mb-5">
              Sound like what you&apos;ve been looking for?
            </p>
            <a
              href="https://collwi.com/register"
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-brand-teal text-white font-semibold rounded-full shadow-teal hover:bg-brand-teal-dark hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Start for Free
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ─── How Sessions Work ─── */}
      <section className="relative py-24 md:py-32 px-6 mesh-gradient-cool overflow-hidden">
        <FloatingOrb className="top-10 left-[5%] w-40 h-40 bg-brand-teal/6 animate-float-slow" />
        <DecorativeDots className="top-20 right-[5%]" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 bg-brand-teal/10 text-brand-teal text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-5 shadow-soft">
                Session Structure
              </span>
              <h2 className="text-3xl md:text-5xl font-sans font-light leading-tight">
                What a session <em className="text-brand-teal italic">looks like</em>
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="space-y-6">
                {[
                  { icon: <Calendar size={20} />, title: 'Weekly live sessions', desc: 'Consistent rhythm that builds momentum and trust' },
                  { icon: <Clock size={20} />, title: '60\u201390 minutes each', desc: 'Long enough to go deep, short enough to fit your life' },
                  { icon: <Users size={20} />, title: '8\u201312 participants', desc: 'Small enough that everyone gets time and attention' },
                  { icon: <Shield size={20} />, title: 'Emotionally safe', desc: 'Clear guidelines and a coach who creates a judgment-free zone' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 glassmorphism rounded-xl p-4 card-hover">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-brand-teal/20 to-brand-teal/5 rounded-xl flex items-center justify-center text-brand-teal">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-brand-navy/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <ScaleIn delay={0.2}>
              <div className="glassmorphism rounded-2xl p-8 md:p-10 h-full border-t-2 border-t-brand-teal/30">
                <h3 className="text-xl font-bold mb-6">A typical session includes:</h3>
                <div className="space-y-4">
                  {[
                    { time: 'Opening', desc: 'Check-in and grounding to arrive fully present' },
                    { time: 'Exploration', desc: 'Guided discussion on a theme relevant to the group' },
                    { time: 'Connection', desc: 'Peer sharing, reflections, and mutual support' },
                    { time: 'Closing', desc: 'Key takeaways and intentions for the week ahead' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-brand-teal to-brand-teal-dark mt-2.5" />
                      <div>
                        <span className="font-semibold text-brand-navy/70">{item.time}: </span>
                        <span className="text-brand-navy/50">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="relative h-16 overflow-hidden">
        <div className="absolute inset-x-0 top-4 flex justify-center gap-4">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-purple/30 animate-pulse-soft" />
          <div className="w-2 h-2 rounded-full bg-brand-teal/25 animate-pulse-soft" style={{ animationDelay: '0.7s' }} />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/30 animate-pulse-soft" style={{ animationDelay: '1.4s' }} />
        </div>
      </div>

      {/* ─── Between Sessions ─── */}
      <section className="relative py-24 md:py-32 px-6 mesh-gradient-purple overflow-hidden">
        <FloatingOrb className="top-16 right-[12%] w-52 h-52 bg-brand-purple/8 animate-float" />
        <FloatingOrb className="bottom-16 left-[8%] w-40 h-40 bg-brand-teal/6 animate-float-delayed" />
        <DecorativeDots className="top-32 left-[15%]" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 bg-brand-purple/10 text-brand-purple text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-5 shadow-soft">
                Beyond Sessions
              </span>
              <h2 className="text-3xl md:text-5xl font-sans font-light leading-tight mb-5">
                It doesn&apos;t stop when the<br />session <em className="text-brand-purple italic">ends</em>
              </h2>
              <p className="text-lg text-brand-navy/50 max-w-2xl mx-auto">
                The magic of CollWi happens between sessions too. Your group
                becomes a genuine support system.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6" staggerDelay={0.08}>
            {[
              {
                icon: <MessageCircle size={24} />,
                title: 'Group Connection',
                desc: 'Stay in touch with your group between sessions. Share wins, ask for support, or simply check in.',
                color: 'teal',
              },
              {
                icon: <Sparkles size={24} />,
                title: 'Ongoing Reflection',
                desc: 'Tools and prompts to keep your growth going throughout the week\u2014at your own pace.',
                color: 'gold',
              },
              {
                icon: <Shield size={24} />,
                title: 'Coach Availability',
                desc: 'Your coach is there for you, not just during sessions. Get support when you need it most.',
                color: 'purple',
              },
              {
                icon: <Sprout size={24} />,
                title: 'Community Events',
                desc: 'Workshops, gatherings, and special sessions that bring the broader CollWi community together.',
                color: 'coral',
              },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className={`glassmorphism rounded-2xl p-8 card-hover h-full border-b-2 ${
                  item.color === 'teal' ? 'border-b-brand-teal hover:shadow-glow-teal' :
                  item.color === 'gold' ? 'border-b-brand-gold' :
                  item.color === 'purple' ? 'border-b-brand-purple hover:shadow-glow-purple' :
                  'border-b-brand-coral hover:shadow-glow-coral'
                }`}>
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                      item.color === 'teal' ? 'bg-gradient-to-br from-brand-teal/20 to-brand-teal/5 text-brand-teal' :
                      item.color === 'gold' ? 'bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 text-brand-gold' :
                      item.color === 'purple' ? 'bg-gradient-to-br from-brand-purple/20 to-brand-purple/5 text-brand-purple' :
                      'bg-gradient-to-br from-brand-coral/20 to-brand-coral/5 text-brand-coral'
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

      {/* ─── CTA Break ─── */}
      <section className="relative py-14 px-6 overflow-hidden" style={{
        background: 'radial-gradient(ellipse at 40% 50%, rgba(78, 205, 196, 0.10) 0%, transparent 60%), radial-gradient(ellipse at 60% 50%, rgba(244, 132, 95, 0.06) 0%, transparent 60%), #F0F9F8'
      }}>
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <FadeIn>
            <p className="text-xl text-brand-navy/60 mb-5">
              Ready to experience it for yourself?
            </p>
            <a
              href="https://collwi.com/register"
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-brand-teal text-white font-semibold rounded-full shadow-teal hover:bg-brand-teal-dark hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Join CollWi Free
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ─── The CollWi Difference ─── */}
      <section className="relative py-24 md:py-32 px-6 mesh-gradient-warm overflow-hidden">
        <FloatingOrb className="top-10 left-[10%] w-44 h-44 bg-brand-coral/8 animate-float" />
        <FloatingOrb className="bottom-20 right-[8%] w-36 h-36 bg-brand-gold/8 animate-float-delayed" />
        <DecorativeDots className="top-16 right-[15%]" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 bg-brand-coral/10 text-brand-coral text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-5 shadow-soft">
                The Difference
              </span>
              <h2 className="text-3xl md:text-5xl font-sans font-light leading-tight">
                Why CollWi works when
                <br />
                everything else <em className="text-brand-coral italic">hasn&apos;t</em>
              </h2>
            </div>
          </FadeIn>

          <ScaleIn delay={0.1}>
            <div className="glassmorphism rounded-3xl p-8 md:p-12 shadow-soft-lg">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                {[
                  {
                    label: 'Self-Help',
                    items: ['Generic advice', 'No accountability', 'Do it alone', 'Information overload'],
                    highlight: false,
                  },
                  {
                    label: 'CollWi',
                    items: ['Personalized guidance', 'Built-in accountability', 'Community support', 'Clear, intentional structure'],
                    highlight: true,
                  },
                  {
                    label: 'Therapy',
                    items: ['1:1 only', 'Focused on past', 'Clinical setting', 'No peer connection'],
                    highlight: false,
                  },
                ].map((col, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl p-6 transition-all duration-300 ${
                      col.highlight
                        ? 'bg-white shadow-soft-lg border-2 border-brand-teal/30 hover:shadow-glow-teal'
                        : 'hover:bg-white/50'
                    }`}
                  >
                    <h3
                      className={`text-lg font-bold mb-5 ${
                        col.highlight ? 'text-brand-teal' : 'text-brand-navy/40'
                      }`}
                    >
                      {col.label}
                    </h3>
                    <ul className="space-y-3">
                      {col.items.map((item, j) => (
                        <li
                          key={j}
                          className={`text-sm ${
                            col.highlight
                              ? 'text-brand-navy/70 font-medium'
                              : 'text-brand-navy/40'
                          }`}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* ─── How to Get Started ─── */}
      <section className="relative py-24 md:py-32 px-6 mesh-gradient-cool overflow-hidden">
        <FloatingOrb className="top-12 right-[10%] w-48 h-48 bg-brand-teal/8 animate-float" />
        <FloatingOrb className="bottom-12 left-[10%] w-36 h-36 bg-brand-purple/6 animate-float-delayed" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 bg-brand-teal/10 text-brand-teal text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-5 shadow-soft">
                Getting Started
              </span>
              <h2 className="text-3xl md:text-5xl font-sans font-light">
                How to <em className="text-brand-teal italic">join</em>
              </h2>
            </div>
          </FadeIn>

          <div className="relative space-y-5 max-w-2xl mx-auto">
            {/* Connecting line */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-brand-teal/30 via-brand-purple/20 to-brand-coral/30 rounded-full hidden md:block" />

            {[
              {
                num: '1',
                title: 'Create your free account',
                desc: 'Takes less than a minute. No credit card needed.',
              },
              {
                num: '2',
                title: 'Browse available groups',
                desc: 'Find a coach and schedule that fits your life and goals.',
              },
              {
                num: '3',
                title: 'Join your first session',
                desc: 'Show up, be yourself, and experience what real support feels like.',
              },
              {
                num: '4',
                title: 'Keep growing',
                desc: 'Stay connected with your group and coach. Build momentum week by week.',
              },
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="flex items-center gap-6 p-6 glassmorphism rounded-2xl shadow-soft card-hover relative">
                  <span className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-brand-teal to-brand-teal-dark flex items-center justify-center text-2xl font-bold text-white shadow-teal relative z-10">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                    <p className="text-brand-navy/50">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQs ─── */}
      <section className="relative py-24 md:py-32 px-6 mesh-gradient-warm overflow-hidden">
        <FloatingOrb className="top-20 left-[8%] w-44 h-44 bg-brand-gold/8 animate-float" />
        <FloatingOrb className="bottom-20 right-[12%] w-36 h-36 bg-brand-coral/6 animate-float-delayed" />
        <DecorativeDots className="top-24 right-[10%]" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 bg-brand-gold/15 text-brand-gold text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-5 shadow-soft">
                FAQs
              </span>
              <h2 className="text-3xl md:text-5xl font-sans font-light">
                Common <em className="text-brand-gold italic">questions</em>
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div>
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
              ))}
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
        <FloatingOrb className="top-20 left-[15%] w-32 h-32 bg-white/10 animate-float" />
        <FloatingOrb className="bottom-16 right-[20%] w-24 h-24 bg-brand-gold/15 animate-float-delayed" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-light text-white mb-6 leading-tight">
              Still have questions?
              <br />
              Or ready to <em className="italic">begin?</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl text-white/75 mb-10 max-w-xl mx-auto">
              Either way, there&apos;s no risk. Join for free and see
              what real support feels like.
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
