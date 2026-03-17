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
            Built by women, for women. A community platform where you connect, grow, and get support — with or without coaching.
          </p>
        </div>
      </section>

      {/* The Platform at a Glance */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-light mb-4">
              CollWi is <em className="text-teal-500 italic">three things</em> in one
            </h2>
            <p className="text-lg text-gray-600">
              Community first. Coaching on the side. All built for women supporting women.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Community */}
            <div className="bg-teal-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-teal-200 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Community</h3>
              <p className="text-gray-700 mb-4">
                Free peer support. No coaches, no structure — just women connecting, sharing, and supporting each other.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span>Free Sharing Rooms (open group chat)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span>Community chat with other members</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span>100% free, no commitment</span>
                </li>
              </ul>
            </div>

            {/* Group Coaching */}
            <div className="bg-purple-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-purple-200 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Group Programs</h3>
              <p className="text-gray-700 mb-4">
                Small groups (8-12 women) with a certified coach. Weekly sessions over 4-12 weeks.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span>Certified coach leads every session</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span>Live weekly sessions (60-90 min)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span>$60-100 per session, 4-session programs</span>
                </li>
              </ul>
            </div>

            {/* 1:1 Coaching */}
            <div className="bg-orange-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-orange-200 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">1:1 Sessions</h3>
              <p className="text-gray-700 mb-4">
                Private coaching sessions with a certified coach of your choice. Book by the session.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">✓</span>
                  <span>One-on-one with your coach</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">✓</span>
                  <span>Book individual sessions as needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">✓</span>
                  <span>$100-120 per session (coach sets rate)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use CollWi (Step-by-Step) */}
      <section className="py-20 px-6 bg-gray-50">
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
            <div className="flex gap-6 items-start bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Create your free account</h3>
                <p className="text-gray-600 mb-3">
                  Sign up in under a minute. No credit card required. You can explore everything for free before deciding what's right for you.
                </p>
                <p className="text-sm text-gray-500">
                  💡 <strong>Pro tip:</strong> Fill out your profile to help coaches understand what you're looking for.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 items-start bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Explore the community (free)</h3>
                <p className="text-gray-600 mb-3">
                  Jump into <strong>Sharing Rooms</strong> — free peer support spaces where women connect, share experiences, and support each other. No coaches, no payment required.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Browse active Sharing Rooms by topic (mindset, life challenges, relationships, etc.)</li>
                  <li>• Join conversations, ask questions, or just listen</li>
                  <li>• Connect with other members via community chat</li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-start bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Browse coaches (optional)</h3>
                <p className="text-gray-600 mb-3">
                  When you're ready for coaching, browse our certified coaches. Every coach creates their own profile, sets their own rates, and lists their programs.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Filter by category: Mindset Mastery, Life Challenges, Personal/Professional Development, Relationship Struggles, Community Support</li>
                  <li>• Read coach bios, certifications, and reviews</li>
                  <li>• See group programs and 1:1 availability</li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 items-start bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Book a session or join a program</h3>
                <p className="text-gray-600 mb-3">
                  Found a coach you connect with? Book your first session or join a group program.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• <strong>Group programs:</strong> 4-session programs ($60-100/session), small groups of 8-12 women</li>
                  <li>• <strong>1:1 sessions:</strong> Private coaching ($100-120/session), book as needed</li>
                  <li>• Payment via Stripe or PayPal (secure checkout)</li>
                  <li>• Join Zoom sessions at scheduled times</li>
                </ul>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-6 items-start bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                5
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Show up and grow</h3>
                <p className="text-gray-600 mb-3">
                  Attend your sessions, connect with your group or coach, and stay engaged in the community between sessions.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Live sessions via Zoom (links sent via email)</li>
                  <li>• Chat with your group or coach between sessions</li>
                  <li>• Continue participating in free Sharing Rooms</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes CollWi Different */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-light mb-4">
              What makes CollWi <em className="text-purple-600 italic">different?</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-teal-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-teal-700">Community-first platform</h3>
              <p className="text-gray-700 mb-4">
                Most coaching platforms put coaching first. We don't. CollWi is a <strong>community</strong> where women support each other — with or without coaches.
              </p>
              <p className="text-gray-600">
                You can use CollWi for free forever (Sharing Rooms + community chat), or add coaching when you're ready.
              </p>
            </div>

            <div className="bg-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-purple-700">Coaches set their own rates</h3>
              <p className="text-gray-700 mb-4">
                CollWi takes only 15% commission. Coaches keep <strong>82% of session fees</strong> (after payment processing).
              </p>
              <p className="text-gray-600">
                This means coaches earn more, set competitive rates, and have full autonomy over their programs.
              </p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-orange-700">Built by women, for women</h3>
              <p className="text-gray-700 mb-4">
                CollWi was founded by women who understand what it's like to seek support and not find the right space.
              </p>
              <p className="text-gray-600">
                Every feature, every decision, every detail is designed with women's needs in mind.
              </p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Flexible, on your terms</h3>
              <p className="text-gray-700 mb-4">
                No monthly subscriptions. No long-term contracts. Pay per session or per program.
              </p>
              <p className="text-gray-600">
                Use as much or as little as you need. Community is always free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-light mb-4">
              Common <em className="text-teal-500 italic">questions</em>
            </h2>
          </div>

          <div className="space-y-4">
            <FAQItem 
              q="Do I have to pay to join CollWi?"
              a="No. CollWi is free to join. You can use Sharing Rooms (peer support) and community chat forever without paying anything. You only pay when you book a coaching session or join a group program."
            />
            <FAQItem 
              q="How do I find the right coach?"
              a="Browse coaches by category, read their bios, check their certifications, and see what programs they offer. You can also read reviews from other members. When you find someone who resonates, book a 1:1 session to see if it's a good fit."
            />
            <FAQItem 
              q="What are Sharing Rooms?"
              a="Sharing Rooms are free peer support spaces. Think of them as group chats where women connect, share experiences, ask questions, and support each other — no coaches, no structure, just authentic connection. Topics include mindset, life challenges, relationships, personal development, and more."
            />
            <FAQItem 
              q="How do payments work?"
              a="You pay via Stripe or PayPal when you book a session or join a group program. Coaches receive 82% of session fees (CollWi takes 15%, payment processing is ~3%). All payments are secure and processed through trusted payment providers."
            />
            <FAQItem 
              q="What if I need to cancel a session?"
              a="Each coach sets their own cancellation policy. Check the coach's profile or program details for specifics. Generally, you can cancel with 24 hours notice for a full refund."
            />
            <FAQItem 
              q="Are all coaches certified?"
              a="Yes. All CollWi coaches hold recognized certifications (ICF, BCC, or equivalent) and complete our vetting process. You can view each coach's credentials on their profile."
            />
            <FAQItem 
              q="Can I use CollWi on mobile?"
              a="Yes. CollWi works on desktop, tablet, and mobile. Sessions are held via Zoom, so you'll need the Zoom app for mobile participation."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-teal-500 to-purple-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Ready to <em className="italic">get started?</em>
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join for free. Explore the community. Add coaching when you're ready.
          </p>
          <a href="https://collwi.com/register" className="inline-block px-10 py-4 bg-white text-teal-600 font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            Create Your Free Account
          </a>
          <p className="text-white/70 mt-4 text-sm">
            No credit card required. Start exploring in under a minute.
          </p>
        </div>
      </section>
    </div>
  )
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <details className="bg-white rounded-xl p-6 shadow-sm" open={open} onToggle={(e) => setOpen(e.target.open)}>
      <summary className="font-bold text-lg cursor-pointer">{q}</summary>
      <p className="mt-3 text-gray-600">{a}</p>
    </details>
  )
}
