'use client'

import BreadcrumbSchema from '@/app/components/revamp/BreadcrumbSchema';
import image_1 from "@/assets/images/landing/landingpage collwier image 1.png";
import image_a from "@/assets/images/landing/landingpage image 2.png";
import image_b from "@/assets/images/landing/landingpage collwier image 2.png";
import image_c from "@/assets/images/landing/landingpage image 4.png";
import headshots from "@/assets/images/landing/landingpage image community member 1.png";

import Image from 'next/image';
import Link from "next/link";
import FAQ from "@/app/components/revamp/FAQ";
import { ArrowRight } from "lucide-react";

export default function HowItWorksCommunityMember() {
  return (
    <div className="w-full">

      {/* ─── HERO ─── */}
      <section
        className="relative overflow-hidden noise-overlay"
        style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E293B 40%, #0F172A 100%)" }}
      >
        {/* Atmospheric orbs */}
        <div
          className="absolute top-[-80px] left-[-60px] w-[420px] h-[420px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(78,205,196,0.2) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-100px] right-[10%] w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-[30%] right-[-80px] w-[350px] h-[350px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 grid-cols-1 gap-12 items-center min-h-[85vh] py-24">
          <div className="flex flex-col justify-center">
            <span className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-6">
              For Community Members
            </span>
            <h1 className="font-display text-display-lg md:text-display-xl text-white mb-8">
              Group Coaching,{' '}
              <span className="text-gradient-teal">Empowered</span>
            </h1>
            <p className="text-body-md md:text-body-lg text-slate-300 max-w-lg leading-relaxed">
              CollWi unites you with expert Coaches and a supportive Community, creating a space where you can learn, grow, and transform alongside others on a shared journey.
            </p>
            <p className="text-body-md md:text-body-lg text-slate-400 max-w-lg leading-relaxed mt-4">
              Experience the power of collective wisdom and connection, designed to help you thrive.
            </p>
          </div>
          <div className="hidden md:flex justify-end items-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-secondary/20 to-tertiary/10 blur-2xl scale-105" />
              <Image
                src={image_1}
                alt="Woman coach"
                width={560}
                height={560}
                className="relative z-10 rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── HAVE YOU EVER FELT ─── */}
      <section style={{ backgroundColor: '#FFF8F0' }} className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-display-md md:text-display-lg text-center text-slate-900 mb-16">
            Have you ever{' '}
            <span className="font-display italic text-gradient-warm">felt...</span>
          </h2>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mb-20">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-soft p-8 border-l-4 border-secondary card-lift">
              <h3 className="font-display italic text-secondary-dark text-lg mb-4">
                ...alone in challenges?
              </h3>
              <p className="text-body-sm text-slate-500">
                Facing struggles can feel isolating, as if no one truly understands. CollWi connects you with others who will.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-soft p-8 border-l-4 border-tertiary card-lift">
              <h3 className="font-display italic text-tertiary-dark text-lg mb-4">
                ...lacking genuine support?
              </h3>
              <p className="text-body-sm text-slate-500">
                Many feel stuck, unsure where to find real, personalized help. CollWi offers a welcoming space to open up, find guidance and share experiences.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-soft p-8 border-l-4 border-primary card-lift">
              <h3 className="font-display italic text-primary text-lg mb-4">
                ...difficulty sustaining growth?
              </h3>
              <p className="text-body-sm text-slate-500">
                Personal growth often fades without consistent support. CollWi builds lasting bonds and a supportive network that endures beyond sessions.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <h3 className="font-display text-display-sm text-slate-900">
              ... consider becoming a CollWier!
            </h3>
            <Link
              href="https://collwi.com/register"
              className="bg-tertiary hover:bg-tertiary-dark text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 flex-shrink-0"
            >
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHAT DOES BEING A COLLWIER MEAN ─── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="border-l-4 border-transparent pl-8" style={{ borderImage: 'linear-gradient(to bottom, #4ECDC4, #FF6B35) 1' }}>
              <h2 className="font-display text-display-md text-slate-900 mb-8">
                What does being a{' '}
                <span className="block mt-2">
                  <span className="font-display italic text-slate-400">&ldquo;</span>
                  <span className="font-display italic text-gradient-warm">CollWier</span>
                  <span className="font-display italic text-slate-400">&rdquo;</span>
                  {' '}mean?
                </span>
              </h2>
              <p className="text-body-md text-slate-600 leading-relaxed mb-6">
                We call our people &apos;CollWiers,&apos; pronounced &apos;CollWi(ee)er.&apos;
              </p>
              <p className="text-body-md text-slate-500 leading-relaxed">
                It&apos;s more than just a name — it&apos;s about being part of a community where everyone works through their challenges, pursues personal growth, and lifts each other up along the way. And here&apos;s a little secret... when you help others grow, you&apos;ll find yourself growing too — and it feels amazing.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <Image
              src={headshots}
              alt="Community members"
              width={480}
              height={480}
              className="rounded-3xl shadow-medium max-md:w-full"
            />
          </div>
        </div>
      </section>

      {/* ─── WHAT COLLWI OFFERS ─── */}
      <section style={{ backgroundColor: '#F5F3EF' }} className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <span className="text-label uppercase tracking-widest text-slate-400 block mb-4">
            What CollWi Offers
          </span>
          <h2 className="font-display text-display-md md:text-display-lg text-slate-900 max-w-2xl mb-16">
            Experience <span className="text-gradient-warm">lasting change</span> through{' '}
            <span className="text-gradient-teal">group coaching</span> at CollWi
          </h2>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
            {[
              { title: 'Overcome Challenges', desc: 'Work through personal obstacles with expert coaching and the support of a group that understands your journey.', color: '#4ECDC4' },
              { title: 'Inspire and Be Inspired', desc: 'Draw motivation from the energy and stories of others, while sharing your own experiences to inspire those around you.', color: '#FF6B35' },
              { title: 'Accountability', desc: "Stay on track with your goals by leaning on the group's shared commitment and support.", color: '#7C3AED' },
              { title: 'Mutual Empowerment', desc: "Grow by supporting others as much as receiving help — because lifting someone else up is part of your own transformation.", color: '#4ECDC4' },
              { title: 'Affordable Growth', desc: 'Access transformative coaching at a fraction of the cost of one-on-one sessions.', color: '#FF6B35' },
              { title: 'Meaningful Connections', desc: 'Build authentic relationships and expand your perspective by collaborating with like-minded individuals.', color: '#7C3AED' },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-soft card-lift group"
              >
                <div
                  className="w-3 h-3 rounded-full mb-6"
                  style={{ backgroundColor: card.color }}
                />
                <h3 className="font-display italic text-slate-800 text-lg mb-3">
                  {card.title}
                </h3>
                <p className="text-body-sm text-slate-500">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-display-md md:text-display-lg text-slate-900 text-center mb-20">
            How It Works for CollWiers
          </h2>

          <div className="flex flex-col gap-0">
            {/* Step 1 */}
            <div className="flex items-start gap-8 md:gap-12 mb-0">
              <div className="hidden md:block w-[40%] flex-shrink-0">
                <Image
                  src={image_a}
                  alt="Girl on computer"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-soft w-full"
                />
              </div>
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-secondary text-white font-display text-lg flex items-center justify-center shadow-glow-teal">
                  1
                </div>
                <div className="w-px h-full bg-gradient-to-b from-secondary/40 to-slate-200 min-h-[200px]" />
              </div>
              <div className="flex flex-col pb-20 pt-1 md:w-[40%]">
                <h3 className="font-display italic text-tertiary text-xl mb-4">
                  Sign Up for Free
                </h3>
                <p className="text-body-sm text-slate-500 leading-relaxed">
                  Create your free account and immediately access CollWi&apos;s expert-led coaching programs, designed to help you overcome your challenges and achieve your goals.
                </p>
                <p className="text-body-sm text-slate-500 leading-relaxed mt-4">
                  You&apos;ll also become part of a supportive and vibrant community, where you can connect with like-minded individuals, share experiences, and grow together.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-8 md:gap-12 mb-0">
              <div className="hidden md:block w-[40%] flex-shrink-0">
                <Image
                  src={image_b}
                  alt="Woman celebrating with thumbs up"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-soft w-full"
                />
              </div>
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-secondary text-white font-display text-lg flex items-center justify-center shadow-glow-teal">
                  2
                </div>
                <div className="w-px h-full bg-gradient-to-b from-secondary/40 to-slate-200 min-h-[200px]" />
              </div>
              <div className="flex flex-col pb-20 pt-1 md:w-[40%]">
                <h3 className="font-display italic text-tertiary text-xl mb-4">
                  Join a Program & Engage Actively
                </h3>
                <p className="text-body-sm text-slate-500 leading-relaxed">
                  Choose a program that aligns with your goals and start working on your challenges with others who are on a similar path.
                </p>
                <p className="text-body-sm text-slate-500 leading-relaxed mt-4">
                  Engage actively by sharing, listening, and offering support — the more you contribute, the more you empower yourself and others.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-8 md:gap-12">
              <div className="hidden md:block w-[40%] flex-shrink-0">
                <Image
                  src={image_c}
                  alt="Hands in the air"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-soft w-full"
                />
              </div>
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-secondary text-white font-display text-lg flex items-center justify-center shadow-glow-teal">
                  3
                </div>
              </div>
              <div className="flex flex-col pt-1 md:w-[40%]">
                <h3 className="font-display italic text-tertiary text-xl mb-4">
                  Achieve Your Goals with Collective Support
                </h3>
                <p className="text-body-sm text-slate-500 leading-relaxed">
                  Receive ongoing encouragement, feedback, and insights from your group and the community.
                </p>
                <p className="text-body-sm text-slate-500 leading-relaxed mt-4">
                  As you help others, you&apos;ll also experience personal growth and empowerment — because in CollWi, supporting each other is key to everyone&apos;s success.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-24">
            <Link href="https://collwi.com/register" className="btn-teal text-base px-10 py-4">
              Get Started for Free
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="py-24 md:py-32 px-6 md:px-10 bg-white">
        <FAQ type="CollWiers" />
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "How CollWi Works for Community Members",
            description: "Discover how CollWi connects you with expert coaches and a supportive community for group coaching, personal growth, and meaningful connections.",
            url: "https://collwi.com/how-it-works/community-member"
          })
        }}
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://collwi.com" },
        { name: "How It Works", url: "https://collwi.com/how-it-works/community-member" },
        { name: "Community Members", url: "https://collwi.com/how-it-works/community-member" },
      ]} />
    </div>
  );
}
