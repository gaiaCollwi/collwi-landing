'use client'

import { ArrowRight, ChevronRight } from 'lucide-react'
import { FadeIn, ScaleIn } from './components/AnimatedSection'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-brand-teal/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-brand-purple/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-gold/8 rounded-full blur-3xl animate-float-slow" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-28 pb-20">
          <FadeIn delay={0.15}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-light leading-[1.05] mb-8">
              You deserve more
              <br />
              than <em className="text-brand-coral italic">&ldquo;fine.&rdquo;</em>
            </h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="text-xl md:text-2xl text-brand-navy/55 max-w-2xl mx-auto mb-12 leading-relaxed">
              Stop carrying everything alone. Join a community of women
              who are choosing growth, connection, and real transformation&mdash;together.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://collwi.com/register"
                className="group inline-flex items-center gap-2.5 px-9 py-4 bg-brand-teal text-white font-semibold text-lg rounded-full shadow-teal hover:bg-brand-teal-dark hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Start for Free
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/details"
                className="inline-flex items-center gap-2 px-8 py-4 text-brand-navy/60 font-medium text-lg rounded-full border border-gray-200 hover:border-brand-teal/40 hover:text-brand-teal transition-all duration-300"
              >
                How It Works
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.75}>
            <p className="mt-5 text-sm text-brand-navy/35">
              Free to join. No credit card required.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Emotional Hook ─── */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-sans font-light leading-tight mb-10">
              You&apos;ve been strong for <em className="text-brand-coral italic">everyone</em> else.
              <br />
              It&apos;s your turn now.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-6 text-lg md:text-xl text-brand-navy/50 leading-relaxed">
              <p>
                You&apos;re exhausted from holding it all together.
                Work, family, expectations&mdash;and that quiet feeling
                that something is <em>missing.</em>
              </p>
              <p>
                You don&apos;t need more advice. You don&apos;t need
                to &ldquo;try harder.&rdquo;
              </p>
              <p className="text-brand-navy/70 font-medium text-xl md:text-2xl">
                You need people who <em className="text-brand-teal italic">get it</em>&mdash;and
                a guide who can help you move forward.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── The Promise ─── */}
      <section className="py-24 md:py-32 px-6 mesh-gradient-intense">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 bg-brand-teal/10 text-brand-teal text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-6">
              This Is CollWi
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-light leading-tight mb-8">
              <em className="text-brand-coral italic">Expert</em> coaches.{' '}
              <em className="text-brand-teal italic">Supportive</em> community.
              <br />
              <span className="text-brand-navy/80">Your change starts here.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-brand-navy/50 max-w-2xl mx-auto leading-relaxed mb-14">
              Small group coaching led by certified professionals.
              A safe space to be honest, feel seen, and finally grow
              alongside people who lift you up.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { title: 'Guided by experts', desc: 'Certified coaches who know your name and your story' },
              { title: 'Real connection', desc: 'Small groups where you belong\u2014not surface-level small talk' },
              { title: 'Actual results', desc: 'Clarity, direction, and steps forward\u2014not just motivation' },
            ].map((item, i) => (
              <ScaleIn key={i} delay={0.1 + i * 0.1}>
                <div className="bg-white rounded-2xl p-7 shadow-soft card-hover h-full text-center">
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-brand-navy/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Transformation ─── */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-sans font-light leading-tight mb-10">
              Imagine feeling <em className="text-brand-teal italic">supported</em>
              <br />
              for the first time in years.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-5 text-lg text-brand-navy/55 leading-relaxed max-w-xl mx-auto text-left">
              {[
                'Finally letting go of the weight you\u2019ve been carrying alone',
                'Reconnecting with who you are\u2014beyond your roles',
                'Building friendships with women who genuinely lift you up',
                'Waking up with clarity about what comes next',
              ].map((item, i) => (
                <FadeIn key={i} delay={0.1 + i * 0.06}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-brand-teal mt-2.5" />
                    <p>{item}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-14">
              <a
                href="https://collwi.com/register"
                className="group inline-flex items-center gap-2.5 px-9 py-4 bg-brand-teal text-white font-semibold text-lg rounded-full shadow-teal hover:bg-brand-teal-dark hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Begin Your Journey
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="mt-4 text-sm text-brand-navy/35">
                Free to start &middot; No credit card
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Quote ─── */}
      <section className="py-24 md:py-32 px-6 mesh-gradient-dark">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-3xl md:text-4xl font-sans italic text-white/90 mb-8 leading-relaxed">
              &ldquo;I know this can&apos;t be all there is&hellip;
              <br />
              but I don&apos;t know where to start.&rdquo;
            </p>
            <div className="w-16 h-px bg-brand-teal mx-auto mb-8" />
            <p className="text-xl text-white/60">
              You don&apos;t have to know. That&apos;s what we&apos;re here for.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Simple How It Works ─── */}
      <section className="py-24 md:py-32 px-6 bg-surface-warm">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-sans font-light mb-4">
                Three simple <em className="text-brand-purple italic">steps</em>
              </h2>
              <p className="text-brand-navy/45">Getting started takes less than 2 minutes.</p>
            </div>
          </FadeIn>

          <div className="space-y-5">
            {[
              { num: '1', title: 'Join for free', desc: 'Create your account and find a group that fits you' },
              { num: '2', title: 'Show up', desc: 'Attend weekly live sessions with your coach and group' },
              { num: '3', title: 'Transform', desc: 'Gain clarity, build real connections, and move forward' },
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-soft card-hover">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-xl font-bold text-brand-teal">
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

          <FadeIn delay={0.3}>
            <div className="text-center mt-10">
              <a
                href="/details"
                className="inline-flex items-center gap-1.5 text-brand-teal font-semibold hover:gap-2.5 transition-all duration-300"
              >
                Want more details? <ChevronRight size={18} />
              </a>
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

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-light text-white mb-6 leading-tight">
              You&apos;ve waited<br />long enough.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl text-white/75 mb-10 max-w-xl mx-auto">
              Join thousands of women who stopped waiting for
              &ldquo;the right time&rdquo; and chose themselves.
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
