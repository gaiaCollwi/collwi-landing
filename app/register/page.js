'use client'

import Link from 'next/link'
import { ArrowRight, Heart, Sparkles, Shield, Users, Star } from 'lucide-react'
import { FadeIn, ScaleIn } from '../components/AnimatedSection'

const memberBenefits = [
  'Guided group coaching sessions',
  'Certified women coaches',
  'A community that gets it',
]

const coachBenefits = [
  'Keep 82% of what you earn',
  'Set your own schedule',
  'Built-in client pipeline',
]

export default function RegisterPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Background */}
      <div className="fixed inset-0 mesh-gradient-intense -z-10" />
      <div className="fixed top-40 right-[8%] w-72 h-72 bg-brand-purple/8 rounded-full blur-3xl animate-float -z-10" />
      <div className="fixed bottom-32 left-[5%] w-80 h-80 bg-brand-coral/6 rounded-full blur-3xl animate-float-delayed -z-10" />
      <div className="fixed top-60 left-[15%] w-48 h-48 bg-brand-teal/6 rounded-full blur-3xl animate-float-slow -z-10" />

      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Hero */}
        <div className="text-center mb-16 md:mb-20">
          <FadeIn delay={0.1}>
            <span className="inline-block px-5 py-2 bg-brand-teal/10 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-8">
              Start Your Journey
            </span>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light leading-[1.1] mb-6">
              You&apos;re ready for
              <br />
              something <em className="text-brand-teal italic">real.</em>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-brand-navy/50 max-w-xl mx-auto leading-relaxed">
              Whether you&apos;re seeking support or sharing your expertise,
              CollWi is where transformation happens.
            </p>
          </FadeIn>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto mb-16">
          {/* Member Card */}
          <ScaleIn delay={0.35}>
            <Link href="/register/member" className="group block h-full">
              <div className="relative h-full bg-white rounded-3xl p-8 md:p-10 shadow-soft border border-gray-100/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-teal overflow-hidden">
                {/* Accent gradient */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-teal to-brand-teal-dark rounded-t-3xl" />

                <div className="relative">
                  <div className="w-14 h-14 bg-brand-teal/10 rounded-2xl flex items-center justify-center mb-6">
                    <Heart size={26} className="text-brand-teal" />
                  </div>

                  <h2 className="text-2xl md:text-3xl font-light mb-3">
                    Join as a <strong className="font-bold">Member</strong>
                  </h2>

                  <p className="text-brand-navy/50 leading-relaxed mb-8">
                    Find your people. Get real support. Start growing with women who understand your journey.
                  </p>

                  <ul className="space-y-3 mb-10">
                    {memberBenefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3 text-brand-navy/65">
                        <div className="w-5 h-5 rounded-full bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                          <Sparkles size={12} className="text-brand-teal" />
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-brand-teal font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>Get started free</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </ScaleIn>

          {/* Coach Card */}
          <ScaleIn delay={0.45}>
            <Link href="/register/coach" className="group block h-full">
              <div className="relative h-full bg-white rounded-3xl p-8 md:p-10 shadow-soft border border-gray-100/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-purple overflow-hidden">
                {/* Accent gradient */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-purple to-brand-purple-dark rounded-t-3xl" />

                <div className="relative">
                  <div className="w-14 h-14 bg-brand-purple/10 rounded-2xl flex items-center justify-center mb-6">
                    <Star size={26} className="text-brand-purple" />
                  </div>

                  <h2 className="text-2xl md:text-3xl font-light mb-3">
                    Join as a <strong className="font-bold">Coach</strong>
                  </h2>

                  <p className="text-brand-navy/50 leading-relaxed mb-8">
                    Share your expertise. Build your practice. Make a real difference in women&apos;s lives.
                  </p>

                  <ul className="space-y-3 mb-10">
                    {coachBenefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3 text-brand-navy/65">
                        <div className="w-5 h-5 rounded-full bg-brand-purple/10 flex items-center justify-center flex-shrink-0">
                          <Sparkles size={12} className="text-brand-purple" />
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-brand-purple font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>Apply to coach</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </ScaleIn>
        </div>

        {/* Trust */}
        <FadeIn delay={0.5}>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-sm text-brand-navy/40 mb-10">
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-brand-teal" />
              <span>Free to join</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-brand-teal" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-brand-teal" />
              <span>Secure &amp; private</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.55}>
          <p className="text-center text-brand-navy/40">
            Already have an account?{' '}
            <Link href="/login" className="text-brand-teal font-semibold hover:text-brand-teal-dark transition-colors">
              Log in
            </Link>
          </p>
        </FadeIn>
      </div>
    </div>
  )
}
