'use client'

import { useState } from 'react'

export default function HowItWorksPreview() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-24 pb-16 px-6 overflow-hidden mesh-gradient-intense">
        {/* Floating orbs */}
        <div className="absolute top-16 right-[12%] w-56 h-56 bg-brand-purple/12 rounded-full blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-8 left-[8%] w-48 h-48 bg-brand-teal/10 rounded-full blur-3xl animate-float-delayed pointer-events-none" />
        <div className="absolute top-32 left-[20%] w-36 h-36 bg-brand-coral/8 rounded-full blur-3xl animate-float-slow pointer-events-none" />
        <div className="absolute bottom-16 right-[25%] w-40 h-40 bg-brand-gold/8 rounded-full blur-3xl animate-float pointer-events-none" />

        {/* Decorative dots */}
        <div className="absolute top-20 left-[10%] pointer-events-none">
          <div className="w-2 h-2 rounded-full bg-brand-teal/30 animate-pulse-soft" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-purple/25 mt-5 ml-7 animate-pulse-soft" style={{ animationDelay: '1s' }} />
          <div className="w-2.5 h-2.5 rounded-full bg-brand-coral/20 mt-4 ml-2 animate-pulse-soft" style={{ animationDelay: '2s' }} />
        </div>
        <div className="absolute bottom-12 right-[8%] pointer-events-none">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/30 animate-pulse-soft" />
          <div className="w-2 h-2 rounded-full bg-brand-teal/25 mt-4 ml-5 animate-pulse-soft" style={{ animationDelay: '0.5s' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-brand-purple/10 text-brand-purple text-xs font-bold tracking-widest uppercase rounded-full mb-6 shadow-soft">
            How It Works
          </span>
          <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6">
            How CollWi <em className="text-brand-teal italic">Works</em>
          </h1>
          <p className="text-xl text-brand-navy/60 max-w-2xl mx-auto">
            Built by women, for women. A community where you connect with women who get it, grow together, and find support — on your terms.
          </p>
        </div>
      </section>

      {/* The Platform at a Glance */}
      <section className="relative py-20 px-6 overflow-hidden mesh-gradient-cool">
        <div className="absolute top-10 right-[5%] w-40 h-40 bg-brand-teal/5 rounded-full blur-3xl animate-float-slow pointer-events-none" />
        <div className="absolute bottom-10 left-[8%] w-36 h-36 bg-brand-purple/5 rounded-full blur-3xl animate-float pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-light mb-4">
              CollWi is <em className="text-brand-teal italic">two things</em> in one
            </h2>
            <p className="text-lg text-brand-navy/60">
              Community first. Coaching when you need it. All built for women walking through life together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Community */}
            <div className="glassmorphism rounded-2xl p-10 border-t-2 border-t-brand-teal hover:shadow-glow-teal transition-all duration-300 card-hover" style={{
              background: 'linear-gradient(135deg, rgba(78, 205, 196, 0.08) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(78, 205, 196, 0.04) 100%)'
            }}>
              <div className="w-14 h-14 bg-gradient-to-br from-brand-teal/25 to-brand-teal/5 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Community</h3>
              <p className="text-brand-navy/70 mb-4">
                Connect with other women facing similar challenges. Find your people. Walk through life together.
              </p>
              <ul className="space-y-3 text-sm text-brand-navy/70">
                <li className="flex items-start gap-2">
                  <span className="text-brand-teal mt-0.5 text-lg">•</span>
                  <span><strong>Sharing Rooms:</strong> Virtual meeting spaces where you can talk with other women around topics that matter to you</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-teal mt-0.5 text-lg">•</span>
                  <span><strong>Safe space:</strong> No judgment, no useless complaints — just real support and authentic connection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-teal mt-0.5 text-lg">•</span>
                  <span><strong>24/7 global community:</strong> Women around the world, anytime you need to connect</span>
                </li>
              </ul>
            </div>

            {/* Coaching */}
            <div className="glassmorphism rounded-2xl p-10 border-t-2 border-t-brand-purple hover:shadow-glow-purple transition-all duration-300 card-hover" style={{
              background: 'linear-gradient(135deg, rgba(124, 92, 191, 0.08) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(124, 92, 191, 0.04) 100%)'
            }}>
              <div className="w-14 h-14 bg-gradient-to-br from-brand-purple/25 to-brand-purple/5 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Coaching</h3>
              <p className="text-brand-navy/70 mb-4">
                When you're ready for more structured support, connect with certified coaches who can guide you.
              </p>
              <ul className="space-y-3 text-sm text-brand-navy/70">
                <li className="flex items-start gap-2">
                  <span className="text-brand-purple mt-0.5 text-lg">•</span>
                  <span><strong>Group programs:</strong> Small groups (8-12 women) with a certified coach leading weekly sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-purple mt-0.5 text-lg">•</span>
                  <span><strong>1:1 sessions:</strong> Private coaching with a coach of your choice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-purple mt-0.5 text-lg">•</span>
                  <span><strong>On your terms:</strong> Book sessions when you're ready, no long-term commitments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sharing Rooms Deep Dive */}
      <section className="relative py-20 px-6 overflow-hidden mesh-gradient-warm">
        <div className="absolute top-16 left-[5%] w-44 h-44 bg-brand-coral/6 rounded-full blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-16 right-[8%] w-40 h-40 bg-brand-teal/5 rounded-full blur-3xl animate-float-delayed pointer-events-none" />

        {/* Decorative dots */}
        <div className="absolute top-24 right-[10%] pointer-events-none">
          <div className="w-2 h-2 rounded-full bg-brand-teal/25 animate-pulse-soft" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-coral/20 mt-5 ml-6 animate-pulse-soft" style={{ animationDelay: '1.2s' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-light mb-4">
              What are <em className="text-brand-teal italic">Sharing Rooms?</em>
            </h2>
            <p className="text-lg text-brand-navy/60 max-w-2xl mx-auto">
              Virtual meeting spaces where women connect around topics that matter — safe, judgment-free, and always open.
            </p>
          </div>

          <div className="glassmorphism rounded-3xl p-10 shadow-soft mb-8">
            <h3 className="text-2xl font-bold mb-6">Think of Sharing Rooms as...</h3>
            <div className="space-y-4 text-brand-navy/70">
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
            <div className="glassmorphism rounded-2xl p-8 border-t-2 border-t-brand-teal hover:shadow-glow-teal transition-all duration-300 card-hover">
              <h4 className="text-xl font-bold mb-3 text-brand-teal">What you'll find</h4>
              <ul className="space-y-2 text-brand-navy/70">
                <li className="flex items-start gap-2">
                  <span className="text-brand-teal mt-1">&#10003;</span>
                  <span>Women facing the same challenges you are</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-teal mt-1">&#10003;</span>
                  <span>Real conversations, no small talk</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-teal mt-1">&#10003;</span>
                  <span>Support when you need it (24/7 global community)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-teal mt-1">&#10003;</span>
                  <span>Topics: mindset, life challenges, relationships, personal growth, and more</span>
                </li>
              </ul>
            </div>

            <div className="glassmorphism rounded-2xl p-8 border-t-2 border-t-brand-purple hover:shadow-glow-purple transition-all duration-300 card-hover">
              <h4 className="text-xl font-bold mb-3 text-brand-purple">What you won't find</h4>
              <ul className="space-y-2 text-brand-navy/70">
                <li className="flex items-start gap-2">
                  <span className="text-brand-navy/30 mt-1">&#10007;</span>
                  <span>Judgment or criticism</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-navy/30 mt-1">&#10007;</span>
                  <span>Useless complaints or venting without support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-navy/30 mt-1">&#10007;</span>
                  <span>Pressure to "fix yourself" or be perfect</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-navy/30 mt-1">&#10007;</span>
                  <span>Strangers giving unqualified advice</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use CollWi (Step-by-Step) */}
      <section className="relative py-20 px-6 overflow-hidden mesh-gradient-cool">
        <div className="absolute top-12 right-[6%] w-44 h-44 bg-brand-teal/5 rounded-full blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-12 left-[6%] w-40 h-40 bg-brand-purple/5 rounded-full blur-3xl animate-float-delayed pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-light mb-4">
              Getting started is <em className="text-brand-teal italic">simple</em>
            </h2>
            <p className="text-lg text-brand-navy/60">
              Here's exactly how CollWi works, step by step.
            </p>
          </div>

          <div className="relative space-y-6">
            {/* Connecting timeline line */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-brand-teal/40 via-brand-purple/30 to-brand-purple/40 rounded-full hidden md:block" />

            {/* Step 1 */}
            <div className="flex gap-6 items-start glassmorphism rounded-2xl p-8 card-hover relative">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-brand-teal to-brand-teal-dark rounded-full flex items-center justify-center text-white font-bold text-xl shadow-teal relative z-10">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Create your account</h3>
                <p className="text-brand-navy/60 mb-3">
                  Sign up in under a minute. Tell us a bit about what you're looking for, and we'll help you find the right spaces to connect.
                </p>
                <p className="text-sm text-brand-navy/50">
                  💡 <strong>Pro tip:</strong> Fill out your profile authentically — it helps other women connect with you.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 items-start glassmorphism rounded-2xl p-8 card-hover relative">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-brand-teal to-brand-teal-dark rounded-full flex items-center justify-center text-white font-bold text-xl shadow-teal relative z-10">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Join Sharing Rooms</h3>
                <p className="text-brand-navy/60 mb-3">
                  Browse active Sharing Rooms by topic — mindset, life challenges, relationships, personal growth, and more. Jump into conversations that resonate with you.
                </p>
                <ul className="space-y-2 text-sm text-brand-navy/60">
                  <li>• Read what other women are sharing</li>
                  <li>• Join conversations when you feel ready</li>
                  <li>• Or just listen — there's no pressure to share until you're comfortable</li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-start glassmorphism rounded-2xl p-8 card-hover relative">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-brand-teal to-brand-teal-dark rounded-full flex items-center justify-center text-white font-bold text-xl shadow-teal relative z-10">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Connect with women who get it</h3>
                <p className="text-brand-navy/60 mb-3">
                  Find women facing the same challenges. Start conversations. Build real connections. Walk through life together with women who understand what you're going through.
                </p>
                <p className="text-sm text-brand-navy/50">
                  CollWi is a global community — you'll find women online 24/7, anytime you need support.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 items-start glassmorphism rounded-2xl p-8 card-hover relative">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-brand-purple to-brand-purple-dark rounded-full flex items-center justify-center text-white font-bold text-xl shadow-purple relative z-10">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Add coaching when you're ready</h3>
                <p className="text-brand-navy/60 mb-3">
                  When community support isn't enough and you want more structured guidance, explore our certified coaches. Browse by category, read profiles, and find someone who resonates with you.
                </p>
                <ul className="space-y-2 text-sm text-brand-navy/60">
                  <li>• <strong>Group programs:</strong> Small groups with weekly sessions</li>
                  <li>• <strong>1:1 sessions:</strong> Private coaching tailored to you</li>
                  <li>• <strong>Book on your terms:</strong> No long-term commitments required</li>
                </ul>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-6 items-start glassmorphism rounded-2xl p-8 card-hover relative">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-brand-purple to-brand-purple-dark rounded-full flex items-center justify-center text-white font-bold text-xl shadow-purple relative z-10">
                5
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Show up when it works for you</h3>
                <p className="text-brand-navy/60">
                  CollWi fits your life — not the other way around. Show up to Sharing Rooms when you need connection. Book coaching sessions when you're ready for guidance. Engage as much or as little as you need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes CollWi Different */}
      <section className="relative py-20 px-6 overflow-hidden mesh-gradient-purple">
        <div className="absolute top-20 left-[8%] w-48 h-48 bg-brand-purple/6 rounded-full blur-3xl animate-float-slow pointer-events-none" />
        <div className="absolute bottom-16 right-[10%] w-36 h-36 bg-brand-coral/5 rounded-full blur-3xl animate-float pointer-events-none" />

        {/* Decorative dots */}
        <div className="absolute top-28 right-[12%] pointer-events-none">
          <div className="w-2 h-2 rounded-full bg-brand-purple/25 animate-pulse-soft" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-teal/20 mt-6 ml-5 animate-pulse-soft" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-light mb-4">
              Why CollWi is <em className="text-brand-purple italic">different</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glassmorphism rounded-2xl p-8 border-l-4 border-l-brand-teal hover:shadow-glow-teal transition-all duration-300 card-hover">
              <h3 className="text-2xl font-bold mb-4 text-brand-teal">Community-first</h3>
              <p className="text-brand-navy/70 leading-relaxed">
                Most platforms focus on coaching. We don't. CollWi is a <strong>community</strong> where women support each other. Coaching is there when you need it — but connection comes first.
              </p>
            </div>

            <div className="glassmorphism rounded-2xl p-8 border-l-4 border-l-brand-purple hover:shadow-glow-purple transition-all duration-300 card-hover">
              <h3 className="text-2xl font-bold mb-4 text-brand-purple">Built by women, for women</h3>
              <p className="text-brand-navy/70 leading-relaxed">
                CollWi was founded by women who understand what it's like to seek support and not find the right space. Every feature, every decision, every detail is designed with your needs in mind.
              </p>
            </div>

            <div className="glassmorphism rounded-2xl p-8 border-l-4 border-l-brand-coral hover:shadow-glow-coral transition-all duration-300 card-hover">
              <h3 className="text-2xl font-bold mb-4 text-brand-coral">On your terms</h3>
              <p className="text-brand-navy/70 leading-relaxed">
                You decide when you show up. No pressure, no mandatory check-ins, no commitments. CollWi is here when you need it — 24/7, around the world.
              </p>
            </div>

            <div className="glassmorphism rounded-2xl p-8 border-l-4 border-l-brand-navy/30 hover:shadow-soft-lg transition-all duration-300 card-hover">
              <h3 className="text-2xl font-bold mb-4 text-brand-navy/80">Safe space, real support</h3>
              <p className="text-brand-navy/70 leading-relaxed">
                No judgment. No toxic positivity. No useless complaints. Just real women having honest conversations about what matters — with empathy, understanding, and mutual support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="relative py-20 px-6 overflow-hidden mesh-gradient-warm">
        <div className="absolute top-12 right-[5%] w-40 h-40 bg-brand-gold/5 rounded-full blur-3xl animate-float-slow pointer-events-none" />
        <div className="absolute bottom-12 left-[8%] w-36 h-36 bg-brand-teal/5 rounded-full blur-3xl animate-float pointer-events-none" />

        <div className="absolute bottom-20 right-[6%] pointer-events-none">
          <div className="w-2 h-2 rounded-full bg-brand-coral/20 animate-pulse-soft" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/25 mt-5 ml-4 animate-pulse-soft" style={{ animationDelay: '0.8s' }} />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-light mb-4">
              Common <em className="text-brand-teal italic">questions</em>
            </h2>
          </div>

          <div className="space-y-4">
            <FAQItem
              q="What are Sharing Rooms?"
              a="Sharing Rooms are virtual meeting spaces where women connect around specific topics — mindset, life challenges, relationships, personal growth, and more. They're safe spaces for real conversations, mutual support, and finding women who understand what you're going through. No judgment, no useless complaints — just authentic connection."
              borderColor="border-l-brand-teal"
            />
            <FAQItem
              q="Do I need coaching to use CollWi?"
              a="No. Community is the core of CollWi. You can join Sharing Rooms, connect with other women, and get peer support without ever booking a coaching session. Coaching is there when you're ready for more structured guidance — but it's completely optional."
              borderColor="border-l-brand-coral"
            />
            <FAQItem
              q="How do I find the right Sharing Rooms?"
              a="Browse by category when you sign up. We organize Sharing Rooms around topics like mindset mastery, life challenges, personal/professional development, relationship struggles, and community support. Join the ones that resonate with you, and explore from there."
              borderColor="border-l-brand-purple"
            />
            <FAQItem
              q="Is CollWi available 24/7?"
              a="Yes. CollWi is a global community with women around the world. Sharing Rooms are always open, so you can connect whenever you need support — day or night."
              borderColor="border-l-brand-teal"
            />
            <FAQItem
              q="What if I'm not ready to share yet?"
              a="That's okay. You can listen, read what others are sharing, and join conversations when you feel ready. There's no pressure to open up until you're comfortable."
              borderColor="border-l-brand-coral"
            />
            <FAQItem
              q="How do I find a coach?"
              a="When you're ready for coaching, browse our certified coaches by category. Read their profiles, see what programs they offer, and find someone who resonates with you. You can book a 1:1 session to see if it's a good fit before committing to a group program."
              borderColor="border-l-brand-purple"
            />
            <FAQItem
              q="Can I use CollWi on mobile?"
              a="Yes. CollWi works on desktop, tablet, and mobile. Coaching sessions are held via secure embedded video conferencing, so you can participate directly from your browser on any device."
              borderColor="border-l-brand-teal"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal via-brand-teal-dark to-brand-purple" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-48 h-48 bg-brand-gold rounded-full blur-3xl" />
        </div>
        <div className="absolute top-14 left-[12%] w-28 h-28 bg-white/8 rounded-full blur-2xl animate-float pointer-events-none" />
        <div className="absolute bottom-10 right-[15%] w-24 h-24 bg-brand-gold/10 rounded-full blur-2xl animate-float-delayed pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Ready to find <em className="italic">your people?</em>
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join CollWi. Connect with women who get it. Walk through life together.
          </p>
          <a href="https://collwi.com/register" className="inline-block px-10 py-4 bg-white text-brand-teal-dark font-bold text-lg rounded-full shadow-soft-xl hover:shadow-2xl transition-all hover:-translate-y-1 duration-300">
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

function FAQItem({ q, a, borderColor = 'border-l-brand-teal' }) {
  const [open, setOpen] = useState(false)
  return (
    <details className={`glassmorphism rounded-xl p-6 border-l-4 ${borderColor} transition-all duration-300 hover:shadow-soft`} open={open} onToggle={(e) => setOpen(e.target.open)}>
      <summary className="font-bold text-lg cursor-pointer hover:text-brand-teal transition-colors text-brand-navy">{q}</summary>
      <p className="mt-3 text-brand-navy/60 leading-relaxed">{a}</p>
    </details>
  )
}
