'use client'

import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { FadeIn } from '../../components/AnimatedSection'

// Blog post data - in a real app this would come from a CMS or database
const blogPosts = {
  'feeling-lonely-surrounded-by-people': {
    title: 'Why You Feel Lonely Even When Surrounded by People (And What to Do About It)',
    date: '2026-02-14',
    author: 'CollWi Team',
    readTime: '8 min read',
    category: 'Connection',
    metaDescription: 'You can be surrounded by people and still feel completely alone. Learn why this happens and discover practical ways to find real connection and community.',
    content: `
You're at a party. Or a family gathering. Or sitting in an office surrounded by colleagues. There are people everywhere.

And yet, you feel completely, utterly alone.

If you've experienced this, you're not going crazy. You're not broken. And you're definitely not the only one.

In fact, this is one of the most common—and least talked about—experiences of modern life. Especially for women juggling careers, families, and endless responsibilities.

Let's talk about why this happens and, more importantly, what you can actually do about it.

## The Paradox: Surrounded But Isolated

Here's the thing about loneliness: it's not about being physically alone.

You can be married and feel lonely. You can have a full social calendar and feel isolated. You can be surrounded by family and still feel like no one really *gets* you.

Because loneliness isn't about the number of people around you. It's about **connection**. Real, genuine, "I see you and you see me" connection.

And that? That's become increasingly rare.

## Why It Happens: The Connection Gap

There are a few reasons why you might feel alone even when surrounded by people:

### 1. They Haven't Been Where You Are

Maybe you're going through something hard. A career transition. A relationship struggle. A health issue. An identity crisis.

The people around you haven't experienced what you're going through, so they can't relate. They try to help, but their advice feels hollow because they just don't *get it*.

### 2. They Went Through It... But Not Right Now

Or maybe they *have* been through something similar—but it was years ago. So now they offer well-meaning platitudes:

- "Everything happens for a reason."
- "When one door closes, another opens."
- "You've got this!"

These words, while kind, feel dismissive when you're in the thick of it. They're not what you need.

### 3. Surface-Level Relationships

Most friendships and social interactions stay surface-level. Small talk. Polite updates. Instagram-worthy moments.

No one's talking about the real stuff. The messy stuff. The "I feel like I'm drowning" stuff.

So even when you're *with* people, you're not really *connecting*.

### 4. You're Performing, Not Being

You've learned to show up as the "put-together" version of yourself. The one who has it all figured out. The strong one. The positive one.

But that's not the real you. That's the version you think people want to see.

So even when you're surrounded by people, you feel alone—because they don't actually know *you*.

## The Cost of Carrying It Alone

Here's what happens when you carry this loneliness silently:

- You start to believe you're the only one who feels this way
- You lose trust in your own feelings ("Maybe I'm just being dramatic")
- You isolate further because reaching out feels scary or pointless
- You get exhausted from performing all the time
- You start to wonder if this is just how life is now

And the cycle continues.

## What Actually Helps: Real Connection

So what's the antidote to feeling alone in a crowded room?

**Finding people who are going through what you're going through *right now*.**

Not people who went through it five years ago and have all the answers. Not people who've never experienced it and don't understand.

People who are *in it*. Who can say "me too" and actually mean it.

Because when you find those people:

- You don't have to explain yourself
- You don't have to perform
- You don't have to pretend you're fine
- You finally feel *seen*

And that's when the loneliness starts to lift.

## Where to Find Real Connection

Here's the honest truth: real connection doesn't just happen. You have to be intentional about it.

Here are some practical ways to start:

### 1. Show Up Authentically (Even When It's Scary)

Stop performing. Start being real.

Next time someone asks "how are you?" and you're not okay, try saying "honestly, I'm struggling a bit."

Yes, it's vulnerable. Yes, it's scary. But it's also how real connection starts.

### 2. Seek Out Shared Experience

Look for communities, groups, or spaces where people are navigating similar challenges.

This could be:
- A support group for working moms
- An online community for career-changers
- A group coaching program focused on personal growth
- A book club that goes deeper than plot discussion

The key is **shared experience**. When people are facing similar struggles, they *get it* without you having to explain.

### 3. Let Go of Surface-Level Friendships (It's Okay)

Not every friendship needs to be deep. But if you have friendships that consistently leave you feeling heavier instead of lighter, it's okay to let them fade.

You don't need a dramatic breakup. Just stop putting energy into relationships that drain you.

Make space for connections that actually fill you up.

### 4. Work With a Coach or Guide

Sometimes you need more than just peer support. You need someone who can help you work *through* what you're facing, not just vent about it.

Group coaching can be especially powerful because you get:
- Professional guidance
- Community support
- Structured growth (not just venting circles)

It's the sweet spot between therapy (individual) and friendship (unstructured).

### 5. Be Patient (And Kind to Yourself)

Building real connection takes time. You won't fix years of loneliness in a week.

But every small step counts:
- Every vulnerable conversation
- Every authentic moment
- Every time you choose real over perfect

Give yourself credit for trying.

## The Bottom Line

Feeling lonely even when surrounded by people isn't a character flaw. It's a sign that something's missing: **real connection**.

The kind where you don't have to perform. Where you can be honest about your struggles. Where someone says "me too" and you know they mean it.

That connection is possible. But it requires intention. Vulnerability. And finding the right people.

You don't have to carry it alone anymore.

## What's Next?

If you're tired of feeling alone in a crowded room, we built CollWi for you.

It's a community of women facing similar struggles—career overwhelm, identity questions, relationship challenges, the constant juggle of "having it all."

With professional coaches guiding every session and real women showing up authentically, you'll finally find the connection you've been craving.

**[Join CollWi for free](https://collwi.com/register)** and discover what it feels like to be truly seen.

---

*Have you experienced this kind of loneliness? What helped you? Share your story in the comments or join the conversation in our community.*
    `,
  },
}

export default function BlogPost() {
  const params = useParams()
  const post = blogPosts[params.slug]

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-sans font-light mb-4">Post not found</h1>
          <Link href="/blog" className="text-brand-teal hover:underline">
            ← Back to blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-16 md:py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-intense" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <FadeIn delay={0.1}>
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-brand-teal hover:gap-3 transition-all mb-8"
            >
              <ArrowLeft size={18} />
              Back to Blog
            </Link>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex items-center gap-4 text-sm text-brand-navy/50 mb-6">
              <span className="px-3 py-1 bg-brand-teal/10 text-brand-teal rounded-full font-medium">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5">
                <Calendar size={14} />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <span>{post.readTime}</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-light leading-tight mb-6">
              {post.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex items-center justify-between border-t border-b border-gray-200 py-4">
              <div className="flex items-center gap-2 text-sm text-brand-navy/60">
                <User size={16} />
                <span>{post.author}</span>
              </div>

              <button className="flex items-center gap-2 text-sm text-brand-navy/60 hover:text-brand-teal transition-colors">
                <Share2 size={16} />
                Share
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.5}>
            <article className="prose prose-lg prose-brand max-w-none">
              {post.content.split('\n').map((paragraph, i) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={i} className="text-3xl font-sans font-light mt-12 mb-6">{paragraph.replace('## ', '')}</h2>
                } else if (paragraph.startsWith('### ')) {
                  return <h3 key={i} className="text-2xl font-sans font-light mt-8 mb-4">{paragraph.replace('### ', '')}</h3>
                } else if (paragraph.startsWith('- ')) {
                  return <li key={i} className="ml-6 mb-2">{paragraph.replace('- ', '')}</li>
                } else if (paragraph.trim() === '---') {
                  return <hr key={i} className="my-12 border-gray-200" />
                } else if (paragraph.includes('**[') && paragraph.includes('](')) {
                  // Parse markdown links
                  const match = paragraph.match(/\*\*\[(.*?)\]\((.*?)\)\*\*/)
                  if (match) {
                    return (
                      <p key={i} className="mb-6">
                        <a href={match[2]} className="inline-flex items-center gap-2 px-8 py-4 bg-brand-teal text-white font-semibold rounded-full hover:bg-brand-teal-dark transition-colors">
                          {match[1]}
                        </a>
                      </p>
                    )
                  }
                } else if (paragraph.trim().startsWith('*') && paragraph.trim().endsWith('*')) {
                  return <p key={i} className="text-brand-navy/60 italic mb-6">{paragraph.replace(/\*/g, '')}</p>
                } else if (paragraph.trim()) {
                  // Regular paragraph - preserve bold and italic
                  const formattedText = paragraph
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\*(.*?)\*/g, '<em>$1</em>')
                  return <p key={i} className="mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: formattedText }} />
                }
                return null
              })}
            </article>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.6}>
            <div className="mt-16 p-10 bg-gradient-to-br from-brand-teal-light/30 to-brand-coral-light/30 rounded-3xl border border-brand-teal/20">
              <h3 className="text-2xl md:text-3xl font-sans font-light mb-4">
                Ready to find real connection?
              </h3>
              <p className="text-lg text-brand-navy/70 mb-6">
                Join CollWi—a community of women who understand what you're going through, with professional coaches to guide you every step of the way.
              </p>
              <a
                href="https://collwi.com/register"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-teal text-white font-semibold rounded-full hover:bg-brand-teal-dark transition-colors"
              >
                Get Started Free
                <ArrowLeft size={18} className="rotate-180" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
