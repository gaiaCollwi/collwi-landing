'use client'

import { ArrowRight } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from './components/AnimatedSection'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ─── HERO SECTION ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-brand-teal/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-brand-purple/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-gold/8 rounded-full blur-3xl animate-float-slow" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-28 pb-20">
          <FadeIn delay={0.15}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-light leading-[1.05] mb-8">
              You're Exhausted.
              <br />
              You're Overwhelmed.
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-2xl md:text-3xl text-brand-navy/70 font-light mb-6">
              And from the outside, your life looks fine.
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <p className="text-xl md:text-2xl text-brand-navy/55 max-w-2xl mx-auto mb-12 leading-relaxed">
              If you've been carrying everything—work, family, everyone's needs—and
              wondering when it's finally your turn...
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-2xl md:text-3xl font-medium text-brand-teal mb-12">
              You're in the right place.
            </p>
          </FadeIn>

          <FadeIn delay={0.75}>
            <a
              href="https://collwi.com/register"
              className="group inline-flex items-center gap-2.5 px-9 py-4 bg-brand-teal text-white font-semibold text-lg rounded-full shadow-teal hover:bg-brand-teal-dark hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Start Your Journey — Free
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ─── SECTION 1: RECOGNITION ─── */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-sans font-light leading-tight mb-12 text-center">
              This is for you if...
            </h2>
          </FadeIn>

          <StaggerContainer className="space-y-6 mb-12">
            {[
              "You're juggling work, family, and endless responsibilities—but feel like you're running on empty",
              "You have "everything" on paper, but something still feels missing",
              "You've tried self-help books, podcasts, and advice—but nothing sticks",
              "You feel isolated, even when you're surrounded by people",
              "You're tired of surface-level friendships that leave you feeling heavier, not lighter",
              "You know you're "meant for more," but don't know where to start"
            ].map((item, i) => (
              <StaggerItem key={i} index={i}>
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-brand-teal group-hover:scale-150 transition-transform" />
                  <p className="text-lg md:text-xl text-brand-navy/70 leading-relaxed">
                    {item}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.3}>
            <p className="text-xl md:text-2xl text-center font-medium text-brand-navy/80 mt-16">
              You're not broken. You're just carrying too much, alone.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── SECTION 2: THE REAL PROBLEM ─── */}
      <section className="py-24 md:py-32 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-sans font-light leading-tight mb-10">
              The Real Problem Isn't Your Life.
              <br />
              <span className="text-brand-coral italic">It's That You're Living It Alone.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-lg md:text-xl text-brand-navy/60 leading-relaxed mb-8">
              You don't need another checklist. You don't need to "try harder" or "think more positively."
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="text-left max-w-2xl mx-auto mb-12 space-y-4">
              <p className="text-lg text-brand-navy/70">What you need is:</p>
              <ul className="space-y-3 text-lg text-brand-navy/70">
                <li className="flex items-start gap-3">
                  <span className="text-brand-teal font-bold">•</span>
                  <span><strong className="text-brand-navy">Real connection</strong> — not surface-level small talk or mutual venting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-teal font-bold">•</span>
                  <span><strong className="text-brand-navy">Guided support</strong> — someone to walk with you, not just tell you what to do</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-teal font-bold">•</span>
                  <span><strong className="text-brand-navy">A safe space</strong> — where you can be honest without judgment or guilt</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-teal font-bold">•</span>
                  <span><strong className="text-brand-navy">Clarity</strong> — not just motivation, but actual steps forward</span>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-2xl md:text-3xl font-semibold text-brand-teal">
              CollWi gives you all of that.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── SECTION 3: WHY COLLWI IS DIFFERENT ─── */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-sans font-light leading-tight mb-6 text-center">
              Why CollWi Works When
              <br />
              Everything Else Hasn't
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-brand-navy/60 text-center mb-16 max-w-2xl mx-auto">
              Most support feels generic. Impersonal. Like it's designed for "everyone" but speaks to no one.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl font-semibold text-center mb-12">
              CollWi is different because:
            </p>
          </FadeIn>

          <StaggerContainer className="space-y-8">
            {[
              {
                title: "Guided Group Coaching",
                desc: "You're not figuring this out alone. Professional coaches guide every session."
              },
              {
                title: "Real Connection",
                desc: "Meet people who get it. Who've been there. Who won't judge you for wanting more."
              },
              {
                title: "Structured, Not Overwhelming",
                desc: "No endless content. No "do more" pressure. Just clear, intentional sessions."
              },
              {
                title: "Personalized Support",
                desc: "Your coach knows your name, your story, your struggles. This isn't a YouTube video."
              },
              {
                title: "Growth, Not Venting",
                desc: "We go deeper than complaining. You'll leave sessions with clarity and direction."
              }
            ].map((item, i) => (
              <StaggerItem key={i} index={i}>
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-brand-teal group-hover:scale-125 transition-transform" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-navy mb-2">{item.title}</h3>
                    <p className="text-lg text-brand-navy/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.5}>
            <p className="text-xl md:text-2xl text-center font-medium text-brand-navy/80 mt-16">
              This isn't self-help. It's guided transformation—together.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── SECTION 4: HOW IT WORKS ─── */}
      <section className="py-24 md:py-32 px-6 bg-gradient-to-br from-brand-teal/5 via-white to-brand-purple/5">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-sans font-light leading-tight mb-16 text-center">
              How CollWi Works
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                number: "1",
                title: "Join a Group",
                desc: "Small, intimate coaching groups led by certified coaches"
              },
              {
                number: "2",
                title: "Show Up",
                desc: "Weekly sessions designed to help you process, connect, and grow"
              },
              {
                number: "3",
                title: "Get Support",
                desc: "Between sessions, stay connected with your group and coach"
              },
              {
                number: "4",
                title: "Move Forward",
                desc: "With clarity, tools, and a community that actually gets it"
              }
            ].map((step, i) => (
              <StaggerItem key={i} index={i}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-5xl font-light text-brand-teal/20 mb-4">{step.number}</div>
                  <h3 className="text-2xl font-semibold text-brand-navy mb-3">{step.title}</h3>
                  <p className="text-lg text-brand-navy/70 leading-relaxed">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.4}>
            <p className="text-xl text-center text-brand-navy/70 mb-8">
              No judgment. No pressure. Just real support.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="text-center">
              <a
                href="/details"
                className="inline-flex items-center gap-2 text-brand-teal hover:text-brand-teal-dark font-semibold text-lg transition-colors"
              >
                Learn More About How It Works
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── SECTION 5: WHAT YOU'LL GAIN ─── */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-sans font-light leading-tight mb-16 text-center">
              What Changes When You Join CollWi
            </h2>
          </FadeIn>

          <StaggerContainer className="space-y-6">
            {[
              "You'll stop carrying everything alone — and finally feel supported",
              "You'll reconnect with yourself — beyond your roles as partner, parent, or employee",
              "You'll gain clarity — on what's missing and what to do about it",
              "You'll build real friendships — with people who lift you up, not drain you",
              "You'll feel seen and heard — without having to explain or justify yourself",
              "You'll believe your dreams are still possible — and take steps toward them"
            ].map((item, i) => (
              <StaggerItem key={i} index={i}>
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 text-3xl">🌱</div>
                  <p className="text-lg md:text-xl text-brand-navy/70 leading-relaxed pt-1">
                    {item}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── SECTION 6: PERMISSION TO WANT MORE ─── */}
      <section className="py-24 md:py-32 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-sans font-light leading-tight mb-10">
              You Deserve More Than{' '}
              <span className="text-brand-coral italic">"Fine."</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-6 text-lg md:text-xl text-brand-navy/70 leading-relaxed mb-12">
              <p>You've spent years taking care of everyone else.</p>
              <p>You've silenced your own needs because your life looks "good enough" from the outside.</p>
              <p>You've told yourself you should be grateful—and used that gratitude to ignore what's missing.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-2xl md:text-3xl font-semibold text-brand-navy mb-8">
              But here's the truth:
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="space-y-4 text-xl text-brand-navy/80 mb-12">
              <p>You can be grateful <em className="text-brand-teal font-medium">and</em> want more.</p>
              <p>You can have a stable life <em className="text-brand-teal font-medium">and</em> crave meaning, connection, and purpose.</p>
              <p>You don't have to wait until everything falls apart to ask for support.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.55}>
            <p className="text-xl md:text-2xl font-medium text-brand-navy/80">
              CollWi is where you stop wondering "is this all there is?" and start building what comes next.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-24 md:py-32 px-6 bg-gradient-to-br from-brand-teal/5 via-white to-brand-purple/5">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-sans font-light leading-tight mb-8">
              Ready to Stop Carrying It All Alone?
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-xl md:text-2xl text-brand-navy/70 mb-4">
              Join CollWi today. It's free to start. No credit card. No pressure.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="text-lg text-brand-navy/60 mb-12">
              Just real support, real connection, and a path forward.
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <a
              href="https://collwi.com/register"
              className="group inline-flex items-center gap-2.5 px-10 py-5 bg-brand-teal text-white font-semibold text-xl rounded-full shadow-teal hover:bg-brand-teal-dark hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Get Started Free
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-16 pt-16 border-t border-gray-200">
              <p className="text-lg text-brand-navy/50 italic mb-4">
                "I know this can't be all there is... but I don't know where to start."
              </p>
              <p className="text-xl font-medium text-brand-navy/70">
                You don't have to know. That's what we're here for.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
