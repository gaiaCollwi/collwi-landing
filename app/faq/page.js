export const metadata = {
  title: 'FAQ | CollWi - Frequently Asked Questions',
  description: 'Common questions about CollWi: pricing, how it works, who our guides are, and more. Live group sessions for women.',
}

const faqBorderColors = [
  'border-l-brand-teal',
  'border-l-brand-coral',
  'border-l-brand-purple',
  'border-l-brand-teal',
  'border-l-brand-coral',
  'border-l-brand-purple',
  'border-l-brand-teal',
  'border-l-brand-coral',
  'border-l-brand-purple',
  'border-l-brand-teal',
  'border-l-brand-coral',
  'border-l-brand-purple',
]

const glanceColors = [
  { bg: 'from-brand-teal/15 to-brand-teal/5', text: 'text-brand-teal', glow: 'hover:shadow-glow-teal' },
  { bg: 'from-brand-purple/15 to-brand-purple/5', text: 'text-brand-purple', glow: 'hover:shadow-glow-purple' },
  { bg: 'from-brand-coral/15 to-brand-coral/5', text: 'text-brand-coral', glow: 'hover:shadow-glow-coral' },
  { bg: 'from-brand-teal/15 to-brand-teal/5', text: 'text-brand-teal', glow: 'hover:shadow-glow-teal' },
]

export default function FAQPage() {
  const faqs = [
    {
      question: "What is CollWi?",
      answer: "CollWi is an affordable group coaching platform for women. We provide live video coaching sessions with certified coaches in small, supportive groups. It's built by women, for women\u2014addressing the unique challenges women face at work, at home, and in life."
    },
    {
      question: "How much does CollWi cost?",
      answer: "CollWi offers affordable membership plans. We believe every woman deserves access to support and guidance, not just those who can afford premium prices. Check our website for current pricing."
    },
    {
      question: "How does group coaching work?",
      answer: "Group coaching brings together 6-10 women with similar challenges for live video sessions led by a certified coach. Sessions happen weekly and focus on real issues like burnout, career transitions, imposter syndrome, and work-life balance. You'll get personalized guidance while learning from others' experiences."
    },
    {
      question: "Who are the coaches?",
      answer: "All CollWi coaches are certified professionals with experience in life coaching, career coaching, or related fields. They're carefully vetted for expertise, empathy, and understanding of women's unique challenges. Many are women who've navigated similar struggles themselves."
    },
    {
      question: "Is this therapy or coaching?",
      answer: "CollWi is coaching, not therapy. Coaching focuses on forward movement\u2014setting goals, building skills, and taking action. Therapy addresses mental health conditions and past trauma. If you're dealing with depression, anxiety, or trauma, we recommend working with a licensed therapist. Coaching and therapy can complement each other."
    },
    {
      question: "Can I join if I'm not in a specific location?",
      answer: "Yes! CollWi is 100% online. You can join from anywhere with an internet connection. Our sessions are live video calls, so you can participate from home, your office, or anywhere private."
    },
    {
      question: "What makes CollWi different from other coaching platforms?",
      answer: "Three things: (1) We're affordable\u2014a fraction of what platforms like Chief or BetterUp charge. (2) We're built by women, for women, so we understand the unique challenges women face. (3) We use group sessions, which create community and connection, not just one-on-one meetings. You're not alone in this."
    },
    {
      question: "How do I cancel?",
      answer: "You can cancel anytime from your account settings. No long-term contracts, no penalties. We want you to stay because you're getting value, not because you're locked in."
    },
    {
      question: "What if I'm too busy for weekly sessions?",
      answer: "We get it\u2014you're juggling a lot. Sessions are scheduled at different times to fit different schedules (evenings, weekends, lunch breaks). If you miss a session, you can catch up with session recordings. The commitment is flexible."
    },
    {
      question: "How is CollWi better than self-help books or podcasts?",
      answer: "Books and podcasts are great for information, but they don't give you personalized guidance, accountability, or community. CollWi gives you a real coach who knows your story, a group of women facing similar challenges, and structured support that actually moves you forward."
    },
    {
      question: "Do coaches keep most of the revenue?",
      answer: "Yes! Coaches keep 82% of revenue from their sessions. This is the best economics in the coaching industry. We believe coaches deserve fair compensation for their expertise."
    },
    {
      question: "Can I switch groups if it's not a good fit?",
      answer: "Absolutely. If your group isn't the right fit, you can switch to another group that better matches your needs and schedule. We want you to feel comfortable and supported."
    },
  ]

  // Generate JSON-LD schema for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 px-6 overflow-hidden mesh-gradient-intense">
          {/* Floating orbs */}
          <div className="absolute top-16 right-[12%] w-56 h-56 bg-brand-teal/10 rounded-full blur-3xl animate-float pointer-events-none" />
          <div className="absolute bottom-8 left-[8%] w-48 h-48 bg-brand-purple/10 rounded-full blur-3xl animate-float-delayed pointer-events-none" />
          <div className="absolute top-28 left-[25%] w-36 h-36 bg-brand-coral/8 rounded-full blur-3xl animate-float-slow pointer-events-none" />
          <div className="absolute bottom-16 right-[20%] w-32 h-32 bg-brand-gold/8 rounded-full blur-3xl animate-float pointer-events-none" />

          {/* Decorative dots */}
          <div className="absolute top-24 right-[18%] pointer-events-none">
            <div className="w-2 h-2 rounded-full bg-brand-teal/30 animate-pulse-soft" />
            <div className="w-1.5 h-1.5 rounded-full bg-brand-purple/25 mt-5 ml-8 animate-pulse-soft" style={{ animationDelay: '1s' }} />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="inline-block px-5 py-2 bg-brand-teal/10 text-brand-teal text-xs font-bold tracking-wider uppercase rounded-full mb-6 shadow-soft">
              Frequently Asked Questions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
              Everything you need to know about <em className="text-brand-teal italic">CollWi</em>
            </h1>
            <p className="text-xl text-brand-navy/60 max-w-2xl mx-auto">
              Questions about pricing, coaching, how it works, and more.
            </p>
          </div>
        </section>

        {/* Fast Facts */}
        <section className="relative py-12 px-6 overflow-hidden" style={{
          background: 'radial-gradient(ellipse at 20% 50%, rgba(78, 205, 196, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(124, 92, 191, 0.06) 0%, transparent 50%), #ffffff'
        }}>
          <div className="max-w-5xl mx-auto relative z-10">
            <h2 className="text-2xl font-bold text-center mb-8">CollWi at a Glance</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: 'Free', label: 'To join' },
                { value: '82%', label: "Coaches' revenue share" },
                { value: 'Live', label: 'Video group sessions' },
                { value: '100%', label: 'Built by women, for women' },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`text-center p-6 glassmorphism rounded-xl bg-gradient-to-br ${glanceColors[i].bg} transition-all duration-300 card-hover ${glanceColors[i].glow}`}
                >
                  <div className={`text-3xl font-bold ${glanceColors[i].text} mb-2`}>{item.value}</div>
                  <div className="text-sm text-brand-navy/60">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 px-6 mesh-gradient-warm overflow-hidden">
          {/* Floating decorative elements */}
          <div className="absolute top-20 left-[5%] w-40 h-40 bg-brand-coral/5 rounded-full blur-3xl animate-float-slow pointer-events-none" />
          <div className="absolute bottom-20 right-[8%] w-48 h-48 bg-brand-teal/5 rounded-full blur-3xl animate-float pointer-events-none" />

          <div className="absolute top-32 right-[6%] pointer-events-none">
            <div className="w-2 h-2 rounded-full bg-brand-coral/25 animate-pulse-soft" />
            <div className="w-1.5 h-1.5 rounded-full bg-brand-teal/20 mt-6 ml-4 animate-pulse-soft" style={{ animationDelay: '1.5s' }} />
            <div className="w-1 h-1 rounded-full bg-brand-purple/25 mt-3 ml-8 animate-pulse-soft" style={{ animationDelay: '0.5s' }} />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className={`group glassmorphism rounded-xl border-l-4 ${faqBorderColors[index]} p-6 transition-all duration-300 hover:shadow-soft`}
              >
                <summary className="font-semibold text-lg text-brand-navy cursor-pointer list-none flex items-start justify-between">
                  <span className="flex-1 pr-4">{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-brand-teal flex-shrink-0 mt-1 transform group-open:rotate-180 transition-transform duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-brand-navy/60 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-teal via-brand-teal-dark to-brand-purple" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-20 w-48 h-48 bg-brand-gold rounded-full blur-3xl" />
          </div>
          <div className="absolute top-16 left-[15%] w-28 h-28 bg-white/8 rounded-full blur-2xl animate-float pointer-events-none" />
          <div className="absolute bottom-12 right-[18%] w-24 h-24 bg-brand-gold/10 rounded-full blur-2xl animate-float-delayed pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Still have questions?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join CollWi free and see for yourself. No credit card required.
            </p>
            <a
              href="https://collwi.com/register"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-brand-teal-dark font-semibold text-lg rounded-full hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5 shadow-soft-xl"
            >
              Get Started Free
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
