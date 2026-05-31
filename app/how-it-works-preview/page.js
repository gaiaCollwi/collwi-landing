'use client'

import { useState } from 'react'

export default function HowItWorksPreview() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-24 pb-16 px-6 bg-gradient-to-br from-teal-50 via-purple-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 text-xs font-bold tracking-widest uppercase rounded-full mb-6">
            How It Works
          </span>
          <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6">
            How CollWi <em className="text-teal-500 italic">Works</em>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built by women, for women. A community where you connect with women who get it, grow together, and find support — on your terms.
          </p>
        </div>
      </section>

      {/* The Platform at a Glance */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-light mb-4">
              CollWi is <em className="text-teal-500 italic">two things</em> in one
            </h2>
            <p className="text-lg text-gray-600">
              Community first. Coaching when you need it. All built for women walking through life together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Community */}
            <div className="bg-teal-50 rounded-2xl p-10">
              <div className="w-12 h-12 bg-teal-200 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Community</h3>
              <p className="text-gray-700 mb-4">
                Connect with other women facing similar challenges. Find your people. Walk through life together.
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1 text-lg">•</span>
                  <span><strong>Sharing Rooms:</strong> Virtual meeting spaces where you can talk with other women around topics that matter to you</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1 text-lg">•</span>
                  <span><strong>Safe space:</strong> No judgment, no useless complaints — just real support and authentic connection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1 text-lg">•</span>
                  <span><strong>24/7 global community:</strong> Women around the world, anytime you need to connect</span>
                </li>
              </ul>
            </div>

            {/* Coaching */}
            <div className="bg-purple-50 rounded-2xl p-10">
              <div className="w-12 h-12 bg-purple-200 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Coaching</h3>
              <p className="text-gray-700 mb-4">
                When you're ready for more structured support, connect with certified coaches who can guide you.
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1 text-lg">•</span>
                  <span><strong>Group programs:</strong> Small groups (8-12 women) with a certified coach leading weekly sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1 text-lg">•</span>
                  <span><strong>1:1 sessions:</strong> Private coaching with a coach of your choice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1 text-lg">•</span>
                  <span><strong>On your terms:</strong> Book sessions when you're ready, no long-term commitments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sharing Rooms Deep Dive */}
      <section className="py-20 px-6 bg-gradient-to-br from-teal-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-light mb-4">
              What are <em className="text-teal-500 italic">Sharing Rooms?</em>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Virtual meeting spaces where women connect around topics that matter — safe, judgment-free, and always open.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-sm mb-8">
            <h3 className="text-2xl font-bold mb-6">Think of Sharing Rooms as...</h3>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                <strong>A safe space</strong> where you can talk openly about what you're going through — whether it's mindset struggles, life challenges, relationship questions, or personal growth.
              </p>
              <p className="leading-relaxed">
                <strong>A place to find your people.</strong> Women facing similar challenges. Women who get it. Women who've been where you are and can offer real support.
              </p>
              <p className="leading-relaxed">
                <strong>Walking through life together.</strong> Not advice from strangers. Not toxic positivity. Just real women supporting each other with honesty, empathy, and understanding.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8">
              <h4 className="text-xl font-bold mb-3 text-teal-700">What you'll find</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span>Women facing the same challenges you are</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span>Real conversations, no small talk</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span>Support when you need it (24/7 global community)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span>Topics: mindset, life challenges, relationships, personal growth, and more</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h4 className="text-xl font-bold mb-3 text-purple-700">What you won't find</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">✗</span>
                  <span>Judgment or criticism</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">✗</span>
                  <span>Useless complaints or venting without support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">✗</span>
                  <span>Pressure to "fix yourself" or be perfect</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">✗</span>
                  <span>Strangers giving unqualified advice</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use CollWi (Step-by-Step) */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-light mb-4">
              Getting started is <em className="text-teal-500 italic">simple</em>
            </h2>
            <p className="text-lg text-gray-600">
              Here's exactly how CollWi works, step by step.
            </p>
          </div>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex gap-6 items-start bg-gray-50 rounded-2xl p-8">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Create your account</h3>
                <p className="text-gray-600 mb-3">
                  Sign up in under a minute. Tell us a bit about what you're looking for, and we'll help you find the right spaces to connect.
                </p>
                <p className="text-sm text-gray-500">
                  💡 <strong>Pro tip:</strong> Fill out your profile authentically — it helps other women connect with you.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 items-start bg-gray-50 rounded-2xl p-8">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Join Sharing Rooms</h3>
                <p className="text-gray-600 mb-3">
                  Browse active Sharing Rooms by topic — mindset, life challenges, relationships, personal growth, and more. Jump into conversations that resonate with you.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Read what other women are sharing</li>
                  <li>• Join conversations when you feel ready</li>
                  <li>• Or just listen — there's no pressure to share until you're comfortable</li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-start bg-gray-50 rounded-2xl p-8">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Connect with women who get it</h3>
                <p className="text-gray-600 mb-3">
                  Find women facing the same challenges. Start conversations. Build real connections. Walk through life together with women who understand what you're going through.
                </p>
                <p className="text-sm text-gray-500">
                  CollWi is a global community — you'll find women online 24/7, anytime you need support.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 items-start bg-gray-50 rounded-2xl p-8">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Add coaching when you're ready</h3>
                <p className="text-gray-600 mb-3">
                  When community support isn't enough and you want more structured guidance, explore our certified coaches. Browse by category, read profiles, and find someone who resonates with you.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• <strong>Group programs:</strong> Small groups with weekly sessions</li>
                  <li>• <strong>1:1 sessions:</strong> Private coaching tailored to you</li>
                  <li>• <strong>Book on your terms:</strong> No long-term commitments required</li>
                </ul>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-6 items-start bg-gray-50 rounded-2xl p-8">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                5
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Show up when it works for you</h3>
                <p className="text-gray-600">
                  CollWi fits your life — not the other way around. Show up to Sharing Rooms when you need connection. Book coaching sessions when you're ready for guidance. Engage as much or as little as you need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes CollWi Different */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-light mb-4">
              Why CollWi is <em className="text-purple-600 italic">different</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-teal-700">Community-first</h3>
              <p className="text-gray-700 leading-relaxed">
                Most platforms focus on coaching. We don't. CollWi is a <strong>community</strong> where women support each other. Coaching is there when you need it — but connection comes first.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-purple-700">Built by women, for women</h3>
              <p className="text-gray-700 leading-relaxed">
                CollWi was founded by women who understand what it's like to seek support and not find the right space. Every feature, every decision, every detail is designed with your needs in mind.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-orange-700">On your terms</h3>
              <p className="text-gray-700 leading-relaxed">
                You decide when you show up. No pressure, no mandatory check-ins, no commitments. CollWi is here when you need it — 24/7, around the world.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Safe space, real support</h3>
              <p className="text-gray-700 leading-relaxed">
                No judgment. No toxic positivity. No useless complaints. Just real women having honest conversations about what matters — with empathy, understanding, and mutual support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-light mb-4">
              Common <em className="text-teal-500 italic">questions</em>
            </h2>
          </div>

          <div className="space-y-4">
            <FAQItem 
              q="What are Sharing Rooms?"
              a="Sharing Rooms are virtual meeting spaces where women connect around specific topics — mindset, life challenges, relationships, personal growth, and more. They're safe spaces for real conversations, mutual support, and finding women who understand what you're going through. No judgment, no useless complaints — just authentic connection."
            />
            <FAQItem 
              q="Do I need coaching to use CollWi?"
              a="No. Community is the core of CollWi. You can join Sharing Rooms, connect with other women, and get peer support without ever booking a coaching session. Coaching is there when you're ready for more structured guidance — but it's completely optional."
            />
            <FAQItem 
              q="How do I find the right Sharing Rooms?"
              a="Browse by category when you sign up. We organize Sharing Rooms around topics like mindset mastery, life challenges, personal/professional development, relationship struggles, and community support. Join the ones that resonate with you, and explore from there."
            />
            <FAQItem 
              q="Is CollWi available 24/7?"
              a="Yes. CollWi is a global community with women around the world. Sharing Rooms are always open, so you can connect whenever you need support — day or night."
            />
            <FAQItem 
              q="What if I'm not ready to share yet?"
              a="That's okay. You can listen, read what others are sharing, and join conversations when you feel ready. There's no pressure to open up until you're comfortable."
            />
            <FAQItem 
              q="How do I find a coach?"
              a="When you're ready for coaching, browse our certified coaches by category. Read their profiles, see what programs they offer, and find someone who resonates with you. You can book a 1:1 session to see if it's a good fit before committing to a group program."
            />
            <FAQItem 
              q="Can I use CollWi on mobile?"
              a="Yes. CollWi works on desktop, tablet, and mobile. Coaching sessions are held via Zoom, so you'll need the Zoom app for mobile participation."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-teal-500 to-purple-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Ready to find <em className="italic">your people?</em>
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join CollWi. Connect with women who get it. Walk through life together.
          </p>
          <a href="https://collwi.com/register" className="inline-block px-10 py-4 bg-white text-teal-600 font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            Start for Free
          </a>
          <p className="text-white/70 mt-4 text-sm">
            No credit card required. Start connecting in under a minute.
          </p>
        </div>
      </section>
    </div>
  )
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <details className="bg-gray-50 rounded-xl p-6" open={open} onToggle={(e) => setOpen(e.target.open)}>
      <summary className="font-bold text-lg cursor-pointer hover:text-teal-600 transition-colors">{q}</summary>
      <p className="mt-3 text-gray-600 leading-relaxed">{a}</p>
    </details>
  )
}
