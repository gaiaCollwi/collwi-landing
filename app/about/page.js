'use client'

import { ArrowRight, Heart, Users, Sparkles, Target, Compass } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from '../components/AnimatedSection'

export default function AboutPage() {
  const values = [
    {
      title: 'Real Over Perfect',
      desc: "We don't do surface-level positivity or toxic \"good vibes only.\" Growth is messy. We create space for the whole truth, the hard parts and the hopeful parts.",
      accent: 'teal',
      emoji: '✨',
    },
    {
      title: 'Community Over Competition',
      desc: "Your wins don't take away from mine. We believe in collective wisdom, shared experiences, and lifting each other up, not climbing over each other.",
      accent: 'coral',
      emoji: '🤝',
    },
    {
      title: 'Access Over Gatekeeping',
      desc: "Support, growth, and transformation should be accessible to everyone. We're building something inclusive that meets people where they are.",
      accent: 'purple',
      emoji: '🔓',
    },
    {
      title: 'Action Over Consumption',
      desc: "We're not here to sell you another course you'll never finish. You don't need more content, you need clarity, community, and consistent support.",
      accent: 'gold',
      emoji: '🌱',
    },
  ]

  const accentStyles = {
    teal: {
      bg: 'bg-brand-teal/10',
      border: 'border-brand-teal/30',
      text: 'text-brand-teal',
      shadow: 'hover:shadow-glow-teal',
      gradient: 'from-brand-teal/20 to-brand-teal/5',
      numberColor: 'text-brand-teal/15',
    },
    coral: {
      bg: 'bg-brand-coral/10',
      border: 'border-brand-coral/30',
      text: 'text-brand-coral',
      shadow: 'hover:shadow-glow-coral',
      gradient: 'from-brand-coral/20 to-brand-coral/5',
      numberColor: 'text-brand-coral/15',
    },
    purple: {
      bg: 'bg-brand-purple/10',
      border: 'border-brand-purple/30',
      text: 'text-brand-purple',
      shadow: 'hover:shadow-glow-purple',
      gradient: 'from-brand-purple/20 to-brand-purple/5',
      numberColor: 'text-brand-purple/15',
    },
    gold: {
      bg: 'bg-brand-gold/10',
      border: 'border-brand-gold/30',
      text: 'text-brand-gold',
      shadow: 'hover:shadow-[0_0_40px_rgba(247,201,72,0.2)]',
      gradient: 'from-brand-gold/20 to-brand-gold/5',
      numberColor: 'text-brand-gold/20',
    },
  }

  return (
    <div className="min-h-screen">
      {/* ─── Hero Section ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-intense" />

        {/* Floating orbs */}
        <div className="absolute top-32 right-[5%] w-80 h-80 bg-brand-purple/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-[8%] w-72 h-72 bg-brand-coral/8 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-[15%] left-[20%] w-48 h-48 bg-brand-teal/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-[30%] right-[15%] w-56 h-56 bg-brand-gold/8 rounded-full blur-3xl animate-float" />
        <div className="absolute top-[60%] left-[50%] w-36 h-36 bg-brand-purple/6 rounded-full blur-2xl animate-float-delayed" />
        <div className="absolute top-[10%] right-[40%] w-24 h-24 bg-brand-coral/10 rounded-full blur-2xl animate-float-slow" />

        {/* Animated gradient ring decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-[0.07]">
          <div
            className="absolute inset-0 rounded-full animate-spin-slow"
            style={{
              background: 'conic-gradient(from 0deg, #4ECDC4, #7C5CBF, #F4845F, #F7C948, #4ECDC4)',
              mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))',
              WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))',
            }}
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[650px] md:h-[650px] opacity-[0.05]">
          <div
            className="absolute inset-0 rounded-full animate-spin-slow"
            style={{
              animationDirection: 'reverse',
              animationDuration: '30s',
              background: 'conic-gradient(from 180deg, #F7C948, #F4845F, #7C5CBF, #4ECDC4, #F7C948)',
              mask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))',
              WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))',
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32 pb-20">
          <FadeIn delay={0.1}>
            <span className="inline-block px-5 py-2 bg-brand-coral/10 text-brand-coral text-xs font-semibold tracking-[0.2em] uppercase rounded-full mb-8">
              About Us
            </span>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-light leading-[1.1] mb-8">
              We believe women are
              <br />
              meant for{' '}
              <em className="text-brand-teal italic">more</em>
            </h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="text-lg md:text-xl text-brand-navy/60 max-w-3xl mx-auto leading-relaxed mb-6">
              Most women know what they&apos;re capable of. They feel it — the desire for deeper
              connection, meaningful growth, and support that actually gets them. But finding it?
              That&apos;s the hard part.
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <p className="text-lg md:text-xl text-brand-navy/60 max-w-3xl mx-auto leading-relaxed mb-6">
              Personal growth shouldn&apos;t be something you do alone, buried in self-help books or
              trying to figure it out in isolation. Real transformation happens when women come together —
              to share, support, and grow as a community.
            </p>
          </FadeIn>

          <FadeIn delay={0.55}>
            <p className="text-lg md:text-xl text-brand-navy/60 max-w-3xl mx-auto leading-relaxed">
              That&apos;s why we built CollWi.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Meet the Founders ─── */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        {/* Warm mesh gradient background */}
        <div className="absolute inset-0 mesh-gradient-warm" />

        {/* Floating orbs */}
        <div className="absolute top-16 right-[10%] w-64 h-64 bg-brand-coral/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-16 left-[5%] w-56 h-56 bg-brand-purple/8 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-[40%] left-[60%] w-40 h-40 bg-brand-gold/8 rounded-full blur-3xl animate-float-slow" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-brand-purple/10 text-brand-purple text-xs font-semibold tracking-[0.15em] uppercase rounded-full mb-5">
                The Team
              </span>
              <h2 className="text-4xl md:text-5xl font-sans font-light leading-tight mb-6">
                Meet the <em className="text-brand-purple italic">founders</em>
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            {/* Glassmorphism card with gradient border */}
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-brand-purple/40 via-brand-coral/20 to-brand-gold/30">
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 md:p-14">
                <div className="space-y-6 text-brand-navy/60 leading-relaxed max-w-3xl mx-auto text-center">
                  <p className="text-base md:text-lg">
                    We&apos;re <span className="text-brand-navy font-medium">Barbara</span> and{' '}
                    <span className="text-brand-navy font-medium">Adriana</span>. We&apos;ve both
                    experienced moments where we knew we were capable of more but felt stuck navigating
                    it alone.
                  </p>
                  <p className="text-lg md:text-xl">
                    We watched so many incredible women around us feeling the same way — ambitious,
                    capable, but lacking the right support and community to help them move forward.
                    Women who didn&apos;t need fixing or another productivity hack. They needed real
                    connection, honest conversations, and guidance from people who actually understood.
                  </p>
                  <p className="text-lg md:text-xl">
                    That&apos;s when we realized: what if we built a place where women could find exactly
                    that? A platform where growth isn&apos;t lonely, where support is real, and where every
                    woman has access to both community and expert coaching.
                  </p>
                  <p className="text-lg md:text-xl">
                    CollWi is that place. And we&apos;re inviting you to be part of it.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Our Values ─── */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        {/* Subtle purple mesh background */}
        <div className="absolute inset-0 mesh-gradient-purple" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-brand-coral/10 text-brand-coral text-xs font-semibold tracking-[0.15em] uppercase rounded-full mb-5">
                Our Values
              </span>
              <h2 className="text-4xl md:text-5xl font-sans font-light leading-tight">
                What we stand <em className="text-brand-coral italic">for</em>
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {values.map((value, i) => {
              const style = accentStyles[value.accent]
              return (
                <FadeIn key={i} delay={i * 0.08}>
                  <div
                    className={`group relative rounded-2xl p-[1px] bg-gradient-to-r ${style.gradient} transition-all duration-300 hover:-translate-y-1 ${style.shadow}`}
                  >
                    <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-7 md:p-8 overflow-hidden flex items-start gap-5">
                      {/* Emoji icon */}
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${style.bg} flex items-center justify-center text-2xl mt-0.5`}>
                        {value.emoji}
                      </div>

                      <div className="relative z-10 flex-1">
                        <h3 className={`text-xl font-semibold mb-2 ${style.text}`}>{value.title}</h3>
                        <p className="text-base text-brand-navy/60 leading-relaxed">{value.desc}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── What is a CollWier? ─── */}
      <section className="relative py-24 md:py-32 px-6 bg-gradient-to-br from-brand-teal/5 via-white to-brand-coral/5 overflow-hidden">
        {/* Floating decorative dots */}
        <div className="absolute top-20 left-[12%] w-2 h-2 bg-brand-teal/30 rounded-full animate-float" />
        <div className="absolute top-32 right-[18%] w-3 h-3 bg-brand-coral/25 rounded-full animate-float-delayed" />
        <div className="absolute bottom-24 left-[22%] w-2.5 h-2.5 bg-brand-purple/25 rounded-full animate-float-slow" />
        <div className="absolute top-[45%] right-[8%] w-2 h-2 bg-brand-gold/30 rounded-full animate-float" />
        <div className="absolute bottom-32 right-[30%] w-1.5 h-1.5 bg-brand-teal/35 rounded-full animate-float-delayed" />
        <div className="absolute top-[20%] left-[45%] w-2 h-2 bg-brand-coral/20 rounded-full animate-float-slow" />
        <div className="absolute bottom-[20%] left-[8%] w-3 h-3 bg-brand-teal/20 rounded-full animate-float" />
        <div className="absolute top-[60%] right-[25%] w-2 h-2 bg-brand-purple/20 rounded-full animate-float-delayed" />

        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-brand-teal/10 text-brand-teal text-xs font-semibold tracking-[0.15em] uppercase rounded-full mb-5">
                Our Community
              </span>
              <h2 className="text-4xl md:text-5xl font-sans font-light leading-tight mb-8">
                What does being a{' '}
                <em className="text-brand-teal italic">&ldquo;CollWier&rdquo;</em> mean?
              </h2>
            </div>
          </FadeIn>

          <ScaleIn delay={0.15}>
            {/* Gradient border card (teal to coral) with hover glow */}
            <div className="group relative rounded-3xl p-[1.5px] bg-gradient-to-br from-brand-teal via-brand-teal/50 to-brand-coral transition-shadow duration-500 hover:shadow-[0_0_50px_rgba(78,205,196,0.15),0_0_80px_rgba(244,132,95,0.1)]">
              <div className="bg-white rounded-3xl p-10 md:p-14">
                <p className="text-lg md:text-xl text-brand-navy/70 leading-relaxed mb-6">
                  We call our people <strong className="text-brand-teal">&apos;CollWiers,&apos;</strong> pronounced{' '}
                  <em className="font-semibold">&apos;CollWi(ee)er.&apos;</em>
                </p>
                <p className="text-lg md:text-xl text-brand-navy/70 leading-relaxed mb-6">
                  It&apos;s more than just a name, it&apos;s about being part of a community where
                  everyone works through their challenges, pursues personal growth, and lifts each other up
                  along the way.
                </p>
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <p className="text-lg md:text-xl text-brand-navy/70 leading-relaxed">
                    And here&apos;s a little secret...{' '}
                    <span className="text-brand-coral font-semibold">
                      when you help others grow, you&apos;ll find yourself growing too
                    </span>{' '}
                    , and it feels <em className="text-brand-teal italic">amazing.</em>
                  </p>
                </div>
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* ─── Join Us ─── */}
      <section className="relative py-28 md:py-36 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal via-brand-coral/80 to-brand-teal-dark" />

        {/* Animated pulsing orbs */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-10 left-20 w-48 h-48 bg-brand-gold rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute top-[20%] left-[15%] w-32 h-32 bg-brand-coral/15 rounded-full blur-2xl animate-pulse-soft" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[25%] right-[12%] w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse-soft" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-[50%] right-[35%] w-24 h-24 bg-brand-gold/10 rounded-full blur-xl animate-pulse-soft" style={{ animationDelay: '3s' }} />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-light text-white mb-6 leading-tight">
              Join us
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-white/80 mb-12">
              You don&apos;t have to figure this out alone. Thousands of women have already found
              their people here &mdash; women who get it, who show up, and who grow together.
              Your story is waiting to unfold.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a
              href="https://collwi.com/register"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-brand-teal-dark font-semibold text-lg rounded-full shadow-soft-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Shimmer effect on hover */}
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(78, 205, 196, 0.12), transparent)',
                }}
              />
              <span className="relative z-10 flex items-center gap-3">
                Start for Free
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
