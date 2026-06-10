export const metadata = {
  title: 'FAQ | CollWi - Frequently Asked Questions',
  description: 'Common questions about CollWi: pricing, how it works, who our guides are, and more. Live group sessions for women.',
}

export default function FAQPage() {
  const faqs = [
    {
      question: "What is CollWi?",
      answer: "CollWi is an affordable group coaching platform for women. We provide live video coaching sessions with certified coaches in small, supportive groups. It's built by women, for women—addressing the unique challenges women face at work, at home, and in life."
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
      answer: "CollWi is coaching, not therapy. Coaching focuses on forward movement—setting goals, building skills, and taking action. Therapy addresses mental health conditions and past trauma. If you're dealing with depression, anxiety, or trauma, we recommend working with a licensed therapist. Coaching and therapy can complement each other."
    },
    {
      question: "Can I join if I'm not in a specific location?",
      answer: "Yes! CollWi is 100% online. You can join from anywhere with an internet connection. Our sessions are live video calls, so you can participate from home, your office, or anywhere private."
    },
    {
      question: "What makes CollWi different from other coaching platforms?",
      answer: "Three things: (1) We're affordable—a fraction of what platforms like Chief or BetterUp charge. (2) We're built by women, for women, so we understand the unique challenges women face. (3) We use group sessions, which create community and connection, not just one-on-one meetings. You're not alone in this."
    },
    {
      question: "How do I cancel?",
      answer: "You can cancel anytime from your account settings. No long-term contracts, no penalties. We want you to stay because you're getting value, not because you're locked in."
    },
    {
      question: "What if I'm too busy for weekly sessions?",
      answer: "We get it—you're juggling a lot. Sessions are scheduled at different times to fit different schedules (evenings, weekends, lunch breaks). If you miss a session, you can catch up with session recordings. The commitment is flexible."
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

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-5 py-2 bg-teal-100 text-teal-700 text-xs font-bold tracking-wider uppercase rounded-full mb-6">
              Frequently Asked Questions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
              Everything you need to know about <em className="text-teal-600 italic">CollWi</em>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Questions about pricing, coaching, how it works, and more.
            </p>
          </div>
        </section>

        {/* Fast Facts */}
        <section className="py-12 px-6 bg-white border-y border-gray-200">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">CollWi at a Glance</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-teal-50 rounded-xl">
                <div className="text-3xl font-bold text-teal-700 mb-2">Free</div>
                <div className="text-sm text-gray-600">To join</div>
              </div>
              <div className="text-center p-6 bg-teal-50 rounded-xl">
                <div className="text-3xl font-bold text-teal-700 mb-2">82%</div>
                <div className="text-sm text-gray-600">Coaches' revenue share</div>
              </div>
              <div className="text-center p-6 bg-teal-50 rounded-xl">
                <div className="text-3xl font-bold text-teal-700 mb-2">Live</div>
                <div className="text-sm text-gray-600">Video group sessions</div>
              </div>
              <div className="text-center p-6 bg-teal-50 rounded-xl">
                <div className="text-3xl font-bold text-teal-700 mb-2">100%</div>
                <div className="text-sm text-gray-600">Built by women, for women</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-teal-300 transition-all duration-200"
              >
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex items-start justify-between">
                  <span className="flex-1 pr-4">{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1 transform group-open:rotate-180 transition-transform"
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
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-teal-600 to-teal-700">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Still have questions?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Join CollWi free and see for yourself. No credit card required.
            </p>
            <a
              href="https://collwi.com/register"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-teal-700 font-semibold text-lg rounded-full hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
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
