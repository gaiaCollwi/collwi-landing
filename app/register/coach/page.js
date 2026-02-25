'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CoachRegister() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    specialty: '',
    experience: '',
    certifications: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Coach registration:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link href="/" className="inline-flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg"></div>
            <span className="text-xl font-semibold text-gray-900">CollWi</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full mb-4">
            Join as a Coach
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Start coaching on CollWi
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Keep 82% of what you earn. Set your own schedule. Connect with women who need your expertise.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Personal Info */}
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-900">Let's start with the basics</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-gray-900"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-gray-900"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-gray-900"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Create a password
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  minLength="8"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-gray-900"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <p className="mt-2 text-sm text-gray-500">At least 8 characters</p>
              </div>
            </div>

            {/* Coaching Focus */}
            <div className="space-y-6 pt-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">What are CollWiers asking for help with?</h2>
                <p className="text-sm text-gray-600 mb-4">Choose the area where you can support our members most</p>
                
                <div className="space-y-2">
                  <label className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-indigo-300 cursor-pointer transition">
                    <input
                      type="radio"
                      name="specialty"
                      value="career"
                      required
                      className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                      checked={formData.specialty === 'career'}
                      onChange={(e) => setFormData({...formData, specialty: e.target.value})}
                    />
                    <div className="ml-3">
                      <div className="font-medium text-gray-900">Career & Professional Growth</div>
                      <div className="text-sm text-gray-600">Job transitions, promotions, finding purpose</div>
                    </div>
                  </label>

                  <label className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-indigo-300 cursor-pointer transition">
                    <input
                      type="radio"
                      name="specialty"
                      value="leadership"
                      required
                      className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                      checked={formData.specialty === 'leadership'}
                      onChange={(e) => setFormData({...formData, specialty: e.target.value})}
                    />
                    <div className="ml-3">
                      <div className="font-medium text-gray-900">Leadership & Executive Coaching</div>
                      <div className="text-sm text-gray-600">Building confidence, managing teams, strategic thinking</div>
                    </div>
                  </label>

                  <label className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-indigo-300 cursor-pointer transition">
                    <input
                      type="radio"
                      name="specialty"
                      value="life"
                      required
                      className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                      checked={formData.specialty === 'life'}
                      onChange={(e) => setFormData({...formData, specialty: e.target.value})}
                    />
                    <div className="ml-3">
                      <div className="font-medium text-gray-900">Life & Wellness</div>
                      <div className="text-sm text-gray-600">Balance, self-care, relationships, personal growth</div>
                    </div>
                  </label>

                  <label className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-indigo-300 cursor-pointer transition">
                    <input
                      type="radio"
                      name="specialty"
                      value="business"
                      required
                      className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                      checked={formData.specialty === 'business'}
                      onChange={(e) => setFormData({...formData, specialty: e.target.value})}
                    />
                    <div className="ml-3">
                      <div className="font-medium text-gray-900">Business & Entrepreneurship</div>
                      <div className="text-sm text-gray-600">Starting ventures, scaling businesses, navigating risk</div>
                    </div>
                  </label>

                  <label className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-indigo-300 cursor-pointer transition">
                    <input
                      type="radio"
                      name="specialty"
                      value="other"
                      required
                      className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                      checked={formData.specialty === 'other'}
                      onChange={(e) => setFormData({...formData, specialty: e.target.value})}
                    />
                    <div className="ml-3">
                      <div className="font-medium text-gray-900">Something else</div>
                      <div className="text-sm text-gray-600">We'd love to hear what you bring</div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-6 pt-4">
              <h2 className="text-lg font-semibold text-gray-900">Tell us about your experience</h2>
              
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  How many years have you been coaching?
                </label>
                <input
                  type="number"
                  id="experience"
                  min="0"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-gray-900"
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="certifications" className="block text-sm font-medium text-gray-700 mb-2">
                  Any certifications? <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  id="certifications"
                  placeholder="e.g., ICF, BCC, CPC"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-gray-900"
                  value={formData.certifications}
                  onChange={(e) => setFormData({...formData, certifications: e.target.value})}
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-gray-900 text-white font-semibold py-4 px-6 rounded-xl hover:bg-gray-800 transition"
              >
                Join CollWi
              </button>

              <p className="text-center text-sm text-gray-600 mt-4">
                Already have an account?{' '}
                <Link href="/login" className="text-indigo-600 font-medium hover:text-indigo-700">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* What Happens Next */}
        <div className="max-w-xl mx-auto mt-16 p-6 bg-indigo-50 rounded-2xl">
          <h3 className="font-semibold text-gray-900 mb-3">What happens next?</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">1.</span>
              <span>We'll review your profile (usually within 24 hours)</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">2.</span>
              <span>You'll set up your coach profile, rates, and availability</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">3.</span>
              <span>Start connecting with CollWiers who need your support</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <p>© 2026 CollWi</p>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="hover:text-gray-900 transition">Privacy</Link>
              <Link href="/terms" className="hover:text-gray-900 transition">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
