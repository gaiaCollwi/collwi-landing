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
          </ScaleIn>
        </div>
      </section>

      {/* ─── Join Us ─── */}
      <section className="relative py-28 md:py-36 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal via-brand-teal-dark to-brand-purple" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-48 h-48 bg-brand-gold rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-light text-white mb-6 leading-tight">
              Join us
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-white/80 mb-12">
              Whether you&apos;re here to find your community, explore coaching, or simply connect 
              with other women navigating life&apos;s challenges — you belong here.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a
              href="https://collwi.com/register"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-brand-teal-dark font-semibold text-lg rounded-full shadow-soft-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              Start for Free
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
