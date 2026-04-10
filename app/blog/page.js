'use client'

import { ArrowRight, Calendar, User } from 'lucide-react'
import Link from 'next/link'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/AnimatedSection'

const blogPosts = [
  {
    slug: 'what-does-a-life-coach-do',
    title: 'What Does a Life Coach Actually Do? (And Is It Right for You?)',
    excerpt: 'Thinking about working with a coach but not sure what they actually do? Here\'s an honest, clear breakdown — and how to know if coaching is right for you.',
    date: '2026-04-10',
    author: 'CollWi Team',
    readTime: '7 min read',
    category: 'Personal Growth',
  },
  {
    slug: 'women-community-online',
    title: 'The Best Online Communities for Women in 2026',
    excerpt: 'Finding real connection online is harder than it looks. Here\'s what makes a women\'s community worth joining — and how to find one that actually fits your life.',
    date: '2026-04-10',
    author: 'CollWi Team',
    readTime: '8 min read',
    category: 'Community',
  },
  {
    slug: 'how-to-find-a-coach-for-women',
    title: 'How to Find the Right Coach for You (A Real Guide for Women)',
    excerpt: 'The coaching industry has exploded. Thousands of coaches, endless options — so how do you find one who actually fits your life? Here\'s a practical process that works.',
    date: '2026-04-10',
    author: 'CollWi Team',
    readTime: '7 min read',
    category: 'Personal Growth',
  },
  {
    slug: 'feeling-lonely-surrounded-by-people',
    title: 'Why You Feel Lonely Even When Surrounded by People (And What to Do About It)',
    excerpt: 'You can be in a room full of people and still feel completely alone. Here\'s why that happens and how to find real connection.',
    date: '2026-02-14',
    author: 'CollWi Team',
    readTime: '8 min read',
    category: 'Connection',
  },
  {
    slug: 'exhausted-all-the-time-women',
    title: 'Exhausted All the Time? Here\'s Why (And How Women Are Finding Relief)',
    excerpt: 'Constantly exhausted even after rest? Learn why burnout affects women differently and discover practical ways to reclaim your energy.',
    date: '2026-02-14',
    author: 'CollWi Team',
    readTime: '7 min read',
    category: 'Wellness',
  },
  {
    slug: 'best-online-support-groups-for-women',
    title: 'The Best Online Support Groups for Women in 2026',
    excerpt: 'Looking for real support online? We reviewed the top women\'s support groups and communities. Here\'s what actually works.',
    date: '2026-02-14',
    author: 'CollWi Team',
    readTime: '9 min read',
    category: 'Community',
  },
  {
    slug: 'group-coaching-for-women-what-it-is',
    title: 'Group Coaching for Women: What It Is and How It Works',
    excerpt: 'Curious about group coaching? Learn what it is, how it differs from therapy and support groups, and whether it\'s right for you.',
    date: '2026-02-14',
    author: 'CollWi Team',
    readTime: '7 min read',
    category: 'Personal Growth',
  },
  {
    slug: 'finding-real-connection-as-adult',
    title: 'Finding Real Connection: How to Build Community When You Feel Alone',
    excerpt: 'Making friends and finding community as an adult is hard. Here\'s a practical guide to building real connections when you\'re starting from scratch.',
    date: '2026-02-14',
    author: 'CollWi Team',
    readTime: '8 min read',
    category: 'Connection',
  },
]

const categoryColors = {
  'Connection': { bg: 'bg-brand-teal/10', text: 'text-brand-teal', border: 'border-brand-teal/30' },
  'Wellness': { bg: 'bg-brand-coral/10', text: 'text-brand-coral', border: 'border-brand-coral/30' },
  'Community': { bg: 'bg-brand-purple/10', text: 'text-brand-purple', border: 'border-brand-purple/30' },
  'Personal Growth': { bg: 'bg-brand-gold/15', text: 'text-brand-gold', border: 'border-brand-gold/30' },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-intense" />

        {/* Floating orbs */}
        <div className="absolute top-16 right-[12%] w-56 h-56 bg-brand-teal/10 rounded-full blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-10 left-[8%] w-48 h-48 bg-brand-purple/10 rounded-full blur-3xl animate-float-delayed pointer-events-none" />
        <div className="absolute top-32 left-[20%] w-36 h-36 bg-brand-coral/8 rounded-full blur-3xl animate-float-slow pointer-events-none" />
        <div className="absolute bottom-20 right-[25%] w-40 h-40 bg-brand-gold/8 rounded-full blur-3xl animate-float pointer-events-none" />

        {/* Decorative dots */}
        <div className="absolute top-20 left-[15%] pointer-events-none">
          <div className="w-2 h-2 rounded-full bg-brand-teal/30 animate-pulse-soft" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-coral/25 mt-4 ml-6 animate-pulse-soft" style={{ animationDelay: '1s' }} />
          <div className="w-2 h-2 rounded-full bg-brand-purple/20 mt-3 ml-2 animate-pulse-soft" style={{ animationDelay: '2s' }} />
        </div>
        <div className="absolute bottom-16 right-[10%] pointer-events-none">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/30 animate-pulse-soft" />
          <div className="w-2 h-2 rounded-full bg-brand-teal/25 mt-5 ml-4 animate-pulse-soft" style={{ animationDelay: '0.5s' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn delay={0.1}>
            <span className="inline-block px-5 py-2 bg-brand-teal/10 text-brand-teal text-xs font-semibold tracking-[0.2em] uppercase rounded-full mb-8 shadow-soft">
              Insights & Stories
            </span>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-light leading-tight mb-6">
              The CollWi <em className="text-brand-teal italic">Blog</em>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-xl md:text-2xl text-brand-navy/60 max-w-2xl mx-auto">
              Real stories, practical insights, and honest conversations about connection, growth, and building a life that actually feels good.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="relative py-16 md:py-24 px-6 overflow-hidden" style={{
        background: 'radial-gradient(ellipse at 10% 30%, rgba(78, 205, 196, 0.06) 0%, transparent 50%), radial-gradient(ellipse at 90% 70%, rgba(124, 92, 191, 0.05) 0%, transparent 50%), #ffffff'
      }}>
        {/* Background floating elements */}
        <div className="absolute top-40 right-[5%] w-32 h-32 bg-brand-teal/4 rounded-full blur-3xl animate-float-slow pointer-events-none" />
        <div className="absolute bottom-40 left-[5%] w-40 h-40 bg-brand-purple/4 rounded-full blur-3xl animate-float pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <StaggerContainer className="space-y-8" staggerDelay={0.1}>
            {blogPosts.map((post) => {
              const catColor = categoryColors[post.category] || categoryColors['Connection']
              return (
                <StaggerItem key={post.slug}>
                  <Link href={`/blog/${post.slug}`}>
                    <article className="group glassmorphism rounded-2xl p-8 md:p-10 hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                      {/* Gradient border effect on hover */}
                      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-brand-teal/20 transition-all duration-500 pointer-events-none" />
                      {/* Subtle glow on hover */}
                      <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                        background: 'linear-gradient(135deg, rgba(78, 205, 196, 0.05), rgba(124, 92, 191, 0.05))'
                      }} />

                      <div className="relative z-10">
                        <div className="flex items-center gap-4 text-sm text-brand-navy/40 mb-4">
                          <span className={`px-3 py-1.5 ${catColor.bg} ${catColor.text} rounded-full font-semibold border ${catColor.border}`}>
                            {post.category}
                          </span>
                          <div className="flex items-center gap-1.5">
                            <Calendar size={14} />
                            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                          </div>
                          <span>{post.readTime}</span>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-sans font-light mb-4 group-hover:text-brand-teal transition-colors duration-300">
                          {post.title}
                        </h2>

                        <p className="text-lg text-brand-navy/60 leading-relaxed mb-6">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-brand-navy/50">
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-teal/20 to-brand-purple/20 flex items-center justify-center">
                              <User size={14} />
                            </div>
                            <span>{post.author}</span>
                          </div>

                          <div className="flex items-center gap-2 text-brand-teal font-medium group-hover:gap-3 transition-all duration-300">
                            Read Article
                            <ArrowRight size={18} />
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>
    </div>
  )
}
