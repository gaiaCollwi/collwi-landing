'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowRight, Eye, EyeOff, Shield } from 'lucide-react'
import { FadeIn, ScaleIn } from '../components/AnimatedSection'
import { auth, APIError } from '@/lib/api'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      await auth.login(email, password)
      // Redirect to dashboard or home
      router.push('/dashboard')
    } catch (err) {
      if (err instanceof APIError) {
        setError(err.message || 'Invalid email or password')
      } else {
        setError('Something went wrong. Please try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = () => {
    // Redirect to Google OAuth on collwi.com backend
    const redirectUri = `${window.location.origin}/auth/callback`
    window.location.href = `https://collwi.com/api/auth/google?redirect_uri=${encodeURIComponent(redirectUri)}`
  }

  return (
    <div className="min-h-screen pt-24 flex items-center justify-center">
      {/* Background */}
      <div className="fixed inset-0 mesh-gradient -z-10" />
      <div className="fixed top-40 right-[12%] w-56 h-56 bg-brand-teal/6 rounded-full blur-3xl animate-float -z-10" />
      <div className="fixed bottom-32 left-[10%] w-64 h-64 bg-brand-purple/5 rounded-full blur-3xl animate-float-delayed -z-10" />

      <div className="w-full max-w-md mx-auto px-6 py-12">
        <FadeIn delay={0.1}>
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-light mb-3">
              Welcome <em className="text-brand-teal italic">back</em>
            </h1>
            <p className="text-brand-navy/45">Log in to continue your journey</p>
          </div>
        </FadeIn>

        <ScaleIn delay={0.2}>
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-soft-lg border border-gray-100/60">
            {/* Google OAuth */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 px-6 py-3.5 bg-white border border-gray-200 rounded-2xl font-semibold text-brand-navy/70 hover:border-brand-teal/40 hover:shadow-soft transition-all duration-300 disabled:opacity-50 mb-6"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span>Continue with Google</span>
            </button>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-white text-xs text-brand-navy/30 uppercase tracking-wider">
                  or with email
                </span>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-navy/60 mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3.5 bg-surface-muted border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal transition-all duration-200 text-brand-navy placeholder:text-brand-navy/25"
                  placeholder="you@example.com"
                  disabled={isLoading}
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="password" className="block text-sm font-medium text-brand-navy/60">
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-xs text-brand-teal font-semibold hover:text-brand-teal-dark transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3.5 pr-12 bg-surface-muted border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal transition-all duration-200 text-brand-navy placeholder:text-brand-navy/25"
                    placeholder="Enter your password"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-navy/30 hover:text-brand-teal transition-colors"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 py-4 px-8 bg-brand-teal text-white font-semibold rounded-full shadow-teal hover:bg-brand-teal-dark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Logging in...</span>
                  </>
                ) : (
                  <>
                    <span>Log In</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            {/* Sign up */}
            <p className="text-center text-sm text-brand-navy/40 mt-6">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="text-brand-teal font-semibold hover:text-brand-teal-dark transition-colors">
                Sign up
              </Link>
            </p>
          </div>
        </ScaleIn>

        <FadeIn delay={0.3}>
          <div className="flex justify-center items-center gap-2 mt-6 text-xs text-brand-navy/30">
            <Shield size={14} className="text-brand-teal" />
            <span>Your data is secure and encrypted</span>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
