'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Eye, EyeOff, Star, DollarSign, Calendar, TrendingUp } from 'lucide-react'
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '../../components/AnimatedSection'

const coachPerks = [
  {
    icon: <DollarSign size={22} />,
    title: 'Keep 82% of earnings',
    desc: 'Industry-leading take rate. You built your expertise — keep what you earn.',
    color: 'purple',
  },
  {
    icon: <Calendar size={22} />,
    title: 'Your schedule, your rules',
    desc: 'Set availability that works with your life. No minimums, no penalties.',
    color: 'teal',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Built-in client pipeline',
    desc: 'We bring the members to you. Focus on coaching, not marketing.',
    color: 'coral',
  },
]

const specialties = [
  { value: 'career', label: 'Career & Professional Growth', desc: 'Job transitions, promotions, finding purpose' },
  { value: 'leadership', label: 'Leadership & Executive Coaching', desc: 'Building confidence, managing teams' },
  { value: 'life', label: 'Life & Wellness', desc: 'Balance, self-care, relationships, growth' },
  { value: 'business', label: 'Business & Entrepreneurship', desc: 'Starting ventures, scaling, navigating risk' },
  { value: 'other', label: 'Something else', desc: "We'd love to hear what you bring" },
]

const nextSteps = [
  'We review your profile (usually within 24 hours)',
  'You set up your coach profile, rates, and availability',
  'Start connecting with CollWiers who need your support',
]

export default function CoachRegister() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    specialty: '',
    experience: '',
    certifications: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    console.log('Coach registration:', formData)
    setTimeout(() => setIsLoading(false), 1500)
  }

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Background */}
      <div className="fixed inset-0 mesh-gradient -z-10" />
      <div className="fixed top-40 left-[10%] w-64 h-64 bg-brand-purple/6 rounded-full blur-3xl animate-float -z-10" />
      <div className="fixed bottom-24 right-[8%] w-56 h-56 bg-brand-gold/5 rounded-full blur-3xl animate-float-delayed -z-10" />

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left — Value Proposition */}
          <div className="lg:sticky lg:top-32">
            <FadeIn delay={0.1}>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 text-sm text-brand-navy/40 hover:text-brand-purple transition-colors mb-8"
              >
                <ArrowRight size={14} className="rotate-180" />
                <span>Back to options</span>
              </Link>
            </FadeIn>

            <FadeIn delay={0.15}>
              <span className="inline-block px-4 py-1.5 bg-brand-purple/10 text-brand-purple text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-6">
                For Coaches
              </span>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl md:text-5xl font-light leading-[1.15] mb-6">
                Share your gift.
                <br />
                Build your <em className="text-brand-purple italic">practice.</em>
              </h1>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="text-lg text-brand-navy/50 leading-relaxed mb-10">
                Join a platform built to support coaches — not exploit them.
                Focus on what you do best while we handle the rest.
              </p>
            </FadeIn>

            <StaggerContainer className="space-y-5" staggerDelay={0.08}>
              {coachPerks.map((item, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${
                        item.color === 'purple'
                          ? 'bg-brand-purple/10 text-brand-purple'
                          : item.color === 'teal'
                          ? 'bg-brand-teal/10 text-brand-teal'
                          : 'bg-brand-coral/10 text-brand-coral'
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-navy mb-1">{item.title}</h3>
                      <p className="text-sm text-brand-navy/50 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* What happens next */}
            <FadeIn delay={0.5}>
              <div className="mt-10 p-6 bg-brand-purple-light rounded-2xl">
                <h3 className="font-bold text-brand-navy mb-3">What happens next?</h3>
                <ul className="space-y-2.5">
                  {nextSteps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-brand-navy/60">
                      <span className="text-brand-purple font-bold mt-0.5">{i + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Right — Form */}
          <div>
            <ScaleIn delay={0.3}>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-soft-lg border border-gray-100/60">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-2">Apply to coach</h2>
                  <p className="text-brand-navy/45">Tell us about yourself and your coaching practice.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basics */}
                  <div className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-brand-navy/60 mb-2">
                          First name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          required
                          value={formData.firstName}
                          onChange={(e) => updateField('firstName', e.target.value)}
                          className="w-full px-4 py-3.5 bg-surface-muted border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple transition-all duration-200 text-brand-navy placeholder:text-brand-navy/25"
                          disabled={isLoading}
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-brand-navy/60 mb-2">
                          Last name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          required
                          value={formData.lastName}
                          onChange={(e) => updateField('lastName', e.target.value)}
                          className="w-full px-4 py-3.5 bg-surface-muted border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple transition-all duration-200 text-brand-navy placeholder:text-brand-navy/25"
                          disabled={isLoading}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brand-navy/60 mb-2">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        className="w-full px-4 py-3.5 bg-surface-muted border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple transition-all duration-200 text-brand-navy placeholder:text-brand-navy/25"
                        placeholder="you@example.com"
                        disabled={isLoading}
                      />
                    </div>

                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-brand-navy/60 mb-2">
                        Create a password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          id="password"
                          required
                          minLength={8}
                          value={formData.password}
                          onChange={(e) => updateField('password', e.target.value)}
                          className="w-full px-4 py-3.5 pr-12 bg-surface-muted border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple transition-all duration-200 text-brand-navy placeholder:text-brand-navy/25"
                          placeholder="Minimum 8 characters"
                          disabled={isLoading}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-navy/30 hover:text-brand-purple transition-colors"
                          aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-50" />

                  {/* Specialty */}
                  <div>
                    <label className="block text-sm font-medium text-brand-navy/60 mb-3">
                      What&apos;s your coaching focus?
                    </label>
                    <div className="space-y-2">
                      {specialties.map((s) => (
                        <label
                          key={s.value}
                          className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                            formData.specialty === s.value
                              ? 'border-brand-purple bg-brand-purple-light'
                              : 'border-gray-100 hover:border-brand-purple/30 bg-surface-muted'
                          }`}
                        >
                          <input
                            type="radio"
                            name="specialty"
                            value={s.value}
                            required
                            checked={formData.specialty === s.value}
                            onChange={(e) => updateField('specialty', e.target.value)}
                            className="w-4 h-4 text-brand-purple accent-brand-purple"
                            disabled={isLoading}
                          />
                          <div>
                            <div className="font-medium text-brand-navy text-sm">{s.label}</div>
                            <div className="text-xs text-brand-navy/40">{s.desc}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-brand-navy/60 mb-2">
                        Years coaching
                      </label>
                      <input
                        type="number"
                        id="experience"
                        min="0"
                        required
                        value={formData.experience}
                        onChange={(e) => updateField('experience', e.target.value)}
                        className="w-full px-4 py-3.5 bg-surface-muted border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple transition-all duration-200 text-brand-navy placeholder:text-brand-navy/25"
                        disabled={isLoading}
                      />
                    </div>
                    <div>
                      <label htmlFor="certifications" className="block text-sm font-medium text-brand-navy/60 mb-2">
                        Certifications <span className="text-brand-navy/25 font-normal">(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="certifications"
                        value={formData.certifications}
                        onChange={(e) => updateField('certifications', e.target.value)}
                        className="w-full px-4 py-3.5 bg-surface-muted border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple transition-all duration-200 text-brand-navy placeholder:text-brand-navy/25"
                        placeholder="e.g., ICF, BCC"
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 py-4 px-8 bg-brand-purple text-white font-semibold rounded-full shadow-purple hover:bg-brand-purple-dark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>

                  <p className="text-center text-sm text-brand-navy/40">
                    Already have an account?{' '}
                    <Link href="/login" className="text-brand-purple font-semibold hover:text-brand-purple-dark transition-colors">
                      Log in
                    </Link>
                  </p>
                </form>
              </div>
            </ScaleIn>
          </div>
        </div>
      </div>
    </div>
  )
}
