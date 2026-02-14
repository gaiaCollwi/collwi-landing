'use client'

import { ArrowRight, Heart, Users, Sparkles, Target, Compass } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from '../components/AnimatedSection'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* ─── Hero Section ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-intense" />
        <div className="absolute top-32 right-[5%] w-80 h-80 bg-brand-purple/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-[8%] w-72 h-72 bg-brand-coral/8 rounded-full blur-3xl animate-float-delayed" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32 pb-20">
          <FadeIn delay={0.1}>
            <span className="inline-block px-5 py-2 bg-brand-coral/10 text-brand-coral text-xs font-semibold tracking-[0.2em] uppercase rounded-full mb-8">
              About Us
            </span>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-light leading-[1.1] mb-8">
              We built CollWi because we know
              <br />
              what it feels like to struggle{' '}
              <em className="text-brand-teal italic">alone.</em>
            </h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="text-xl md:text-2xl text-brand-navy/60 max-w-3xl mx-auto leading-relaxed mb-6">
              We went through hard things. The kind that leave you feeling alone even when you're 
              surrounded by people—because they haven't been through it, so they don't get it.
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <p className="text-xl md:text-2xl text-brand-navy/60 max-w-3xl mx-auto leading-relaxed">
              Then we realized: there are so many other women going through the same thing. 
              Women who would understand. Who could relate. Who just needed to find each other.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── The Problem We Saw ─── */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-brand-purple/10 text-brand-purple text-xs font-semibold tracking-[0.15em] uppercase rounded-full mb-5">
                The Problem
              </span>
              <h2 className="text-4xl md:text-5xl font-sans font-light leading-tight mb-6">
                Feeling alone in a room{' '}
                <em className="text-brand-purple italic">full of people</em>
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-8 text-brand-navy/60 leading-relaxed max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl">
                You can be surrounded by people and still feel completely isolated. Because when they haven't 
                been through what you're going through, they don't get it. They can't relate. And that makes 
                you feel like you're carrying it all alone.
              </p>
              <p className="text-xl md:text-2xl">
                Self-help books feel hollow. Social media makes you feel worse. Therapy is expensive and hard to access. 
                And most "communities" are just places to scroll, not places where you actually feel seen and supported.
              </p>
              <p className="text-xl md:text-2xl">
                What you really need is other women who have been there. Who understand without you having to explain. 
                And guidance from someone who can actually help you work through it.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-2xl md:text-3xl font-sans font-light text-center mt-16 text-brand-navy">
              We couldn&apos;t find that place... so we <em className="text-brand-teal italic">built it.</em>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── What We Built ─── */}
      <section className="py-24 md:py-32 px-6 mesh-gradient-intense">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-brand-teal/10 text-brand-teal text-xs font-semibold tracking-[0.15em] uppercase rounded-full mb-5">
                Our Solution
              </span>
              <h2 className="text-4xl md:text-5xl font-sans font-light leading-tight">
                What CollWi <em className="text-brand-teal italic">is</em>
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-16" staggerDelay={0.08}>
            <StaggerItem>
              <div className="bg-white rounded-2xl p-8 shadow-soft card-hover h-full">
                <div className="w-14 h-14 bg-brand-teal/10 rounded-2xl flex items-center justify-center mb-6">
                  <Users size={26} className="text-brand-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-brand-navy">Guided Group Coaching</h3>
                <p className="text-lg text-brand-navy/60 leading-relaxed">
                  Professional coaches lead small, intimate groups through structured sessions. 
                  Not lectures, real conversations where everyone is seen, heard, and supported.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white rounded-2xl p-8 shadow-soft card-hover h-full">
                <div className="w-14 h-14 bg-brand-coral/10 rounded-2xl flex items-center justify-center mb-6">
                  <Heart size={26} className="text-brand-coral" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-brand-navy">Real Connection</h3>
                <p className="text-lg text-brand-navy/60 leading-relaxed">
                  Meet people who actually get it. Who won&apos;t judge you for feeling overwhelmed 
                  or wanting more. Who lift you up instead of draining you.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white rounded-2xl p-8 shadow-soft card-hover h-full">
                <div className="w-14 h-14 bg-brand-purple/10 rounded-2xl flex items-center justify-center mb-6">
                  <Compass size={26} className="text-brand-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-brand-navy">Clarity & Direction</h3>
                <p className="text-lg text-brand-navy/60 leading-relaxed">
                  Not just motivation or inspiration, actual tools, practices, and steps forward. 
                  You leave every session with something concrete.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white rounded-2xl p-8 shadow-soft card-hover h-full">
                <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-6">
                  <Sparkles size={26} className="text-brand-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-brand-navy">Accessible & Affordable</h3>
                <p className="text-lg text-brand-navy/60 leading-relaxed">
                  Group coaching gives you professional support in an accessible way. 
                  Real help shouldn&apos;t be a luxury.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn delay={0.3}>
            <p className="text-xl md:text-2xl text-center text-brand-navy/60 leading-relaxed max-w-3xl mx-auto">
              CollWi is a platform, yes, but more than that, it&apos;s a <span className="text-brand-navy font-medium">movement</span>. 
              A community of people who refuse to carry it all alone anymore.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Our Values ─── */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
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

          <div className="space-y-8">
            {[
              {
                title: 'Real Over Perfect',
                desc: "We don't do surface-level positivity or toxic \"good vibes only.\" Growth is messy. We create space for the whole truth, the hard parts and the hopeful parts.",
              },
              {
                title: 'Community Over Competition',
                desc: "Your wins don't take away from mine. We believe in collective wisdom, shared experiences, and lifting each other up, not climbing over each other.",
              },
              {
                title: 'Access Over Gatekeeping',
                desc: "Support, growth, and transformation should be accessible to everyone. We're building something inclusive that meets people where they are.",
              },
              {
                title: 'Action Over Consumption',
                desc: "We're not here to sell you another course you'll never finish. You don't need more content, you need clarity, community, and consistent support.",
              },
            ].map((value, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="border-l-4 border-brand-teal pl-6 py-2">
                  <h3 className="text-xl font-semibold mb-3 text-brand-navy">{value.title}</h3>
                  <p className="text-lg text-brand-navy/60 leading-relaxed">{value.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Who We Are ─── */}
      <section className="py-24 md:py-32 px-6 bg-surface-warm">
        <div className="max-w-4xl mx-auto">
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
            <div className="space-y-6 text-brand-navy/60 leading-relaxed max-w-3xl mx-auto text-center">
              <p className="text-lg md:text-xl">
                We&apos;re <span className="text-brand-navy font-medium">Barbara</span> and <span className="text-brand-navy font-medium">Adriana</span>. 
                We both went through things that left us feeling completely alone—even though we were surrounded by people. 
                They hadn't experienced what we were going through, so they didn't get it. And that made us feel isolated 
                in our struggle.
              </p>
              <p className="text-lg md:text-xl">
                Then we realized: there are so many other women out there facing similar struggles. Women who would understand. 
                Who could relate. Who just needed a place to find each other.
              </p>
              <p className="text-lg md:text-xl">
                That&apos;s why we built CollWi. A place where when you're struggling with something, you can show up and find 
                not only community and connection with women who truly get it, but also guidance from coaches to help you 
                overcome that hard thing faster.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-2xl md:text-3xl font-sans font-light text-center mt-16 text-brand-navy">
              And now, we&apos;re inviting you to join us.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── What is a CollWier? ─── */}
      <section className="py-24 md:py-32 px-6 bg-gradient-to-br from-brand-teal/5 via-white to-brand-coral/5">
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
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-soft-xl border border-gray-100">
              <p className="text-xl md:text-2xl text-brand-navy/70 leading-relaxed mb-6">
                We call our people <strong className="text-brand-teal">&apos;CollWiers,&apos;</strong> pronounced{' '}
                <em className="font-semibold">&apos;CollWi(ee)er.&apos;</em>
              </p>
              <p className="text-xl md:text-2xl text-brand-navy/70 leading-relaxed mb-6">
                It&apos;s more than just a name, it&apos;s about being part of a community where 
                everyone works through their challenges, pursues personal growth, and lifts each other up 
                along the way.
              </p>
              <div className="mt-8 pt-8 border-t border-gray-100">
                <p className="text-xl md:text-2xl text-brand-navy/70 leading-relaxed">
                  And here&apos;s a little secret...{' '}
                  <span className="text-brand-coral font-semibold">
                    when you help others grow, you&apos;ll find yourself growing too
                  </span>{' '}
                  , and it feels <em className="text-brand-teal italic">amazing.</em>
                </p>
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* ─── Join the Movement ─── */}
      <section className="relative py-28 md:py-36 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal via-brand-teal-dark to-brand-purple" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-48 h-48 bg-brand-gold rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-light text-white mb-6 leading-tight">
              You don&apos;t have to
              <br />
              carry it all alone.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl text-white/80 mb-4">
              Join a community of people who refuse to settle for &ldquo;fine.&rdquo;
            </p>
            <p className="text-lg text-white/60 mb-12">
              No credit card. No pressure. Just real support and real connection.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a
              href="https://collwi.com/register"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-brand-teal-dark font-semibold text-lg rounded-full shadow-soft-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              Start Your Journey Free
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
