'use client'

import Link from 'next/link'
import { ArrowRight, Heart, Sparkles, Shield } from 'lucide-react'
import { FadeIn, ScaleIn } from '../components/AnimatedSection'

const memberBenefits = [
  'Guided group coaching sessions',
  'Certified women coaches',
  'A community that gets it',
]

export default function RegisterPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Background */}
      <div className="fixed inset-0 mesh-gradient-intense -z-10" />
      <div className="fixed top-40 right-[8%] w-72 h-72 bg-brand-teal/8 rounded-full blur-3xl animate-float -z-10" />
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
              Join a community where transformation happens.
            </p>
          </FadeIn>
        </div>

        {/* Member Card - Centered */}
        <div className="max-w-lg mx-auto mb-16">
          <ScaleIn delay={0.35}>
            <Link href="/register/member" className="group block">
              <div className="relative bg-white rounded-3xl p-10 md:p-12 shadow-soft-lg border border-gray-100/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-teal overflow-hidden">
                {/* Accent gradient */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-teal to-brand-teal-dark rounded-t-3xl" />

                <div className="relative text-center">
                  <div className="w-16 h-16 bg-brand-teal/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <Heart size={30} className="text-brand-teal" />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-light mb-4">
                    Join as a <strong className="font-bold">Member</strong>
                  </h2>

                  <p className="text-brand-navy/50 leading-relaxed mb-10">
                    Find your people. Get real support. Start growing with women who understand your journey.
                  </p>

                  <ul className="space-y-4 mb-12 text-left max-w-sm mx-auto">
                    {memberBenefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3 text-brand-navy/65">
                        <div className="w-6 h-6 rounded-full bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                          <Sparkles size={14} className="text-brand-teal" />
                        </div>
                        <span className="text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="inline-flex items-center gap-2 text-brand-teal font-semibold text-lg group-hover:gap-3 transition-all duration-300">
                    <span>Get started free</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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
