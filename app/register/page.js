'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Eye, EyeOff } from 'lucide-react';

export default function MemberRegister() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // API integration here
    console.log('Member registration:', { email, password });
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-orange-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Card Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border-4 border-white hover:border-purple-100 transition-all duration-300">
          
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-block mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mx-auto"></div>
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              <span className="bg-gradient-to-r from-purple-600 via-teal-500 to-orange-500 bg-clip-text text-transparent">
                Welcome to CollWi
              </span>
            </h1>
            <p className="text-gray-600 text-base">
              Start your journey to personal growth
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all duration-300 text-gray-900 bg-gray-50 hover:bg-white"
                placeholder="you@example.com"
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all duration-300 text-gray-900 bg-gray-50 hover:bg-white"
                  placeholder="••••••••"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-teal-400 to-purple-600 text-white font-bold py-4 px-8 rounded-2xl hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-base"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-3">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Creating account...</span>
                </div>
              ) : (
                'Create Account'
              )}
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Google Button */}
            <button
              type="button"
              disabled={isLoading}
              className="w-full bg-white border-2 border-gray-200 text-gray-700 font-semibold py-4 px-8 rounded-2xl hover:border-teal-400 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Sign up with Google</span>
            </button>

            {/* Terms */}
            <p className="text-xs text-gray-500 text-center leading-relaxed">
              By creating an account you agree to CollWi's{' '}
              <Link
                href="https://collwi.com/terms"
                target="_blank"
                className="font-semibold text-purple-600 hover:underline"
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                href="https://collwi.com/privacy"
                target="_blank"
                className="font-semibold text-purple-600 hover:underline"
              >
                Privacy Policy
              </Link>
            </p>

            {/* Login Link */}
            <div className="text-center pt-2">
              Already have an account?{' '}
              <Link href="https://collwi.com/login" className="font-bold text-purple-600 hover:underline">
                Log in
              </Link>
            </div>
          </form>

          {/* Trust Badges */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-gray-600">
              <div className="flex items-center gap-1.5">
                <Check size={16} className="text-teal-500" />
                <span>Free to join</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check size={16} className="text-teal-500" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check size={16} className="text-teal-500" />
                <span>Secure & private</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
