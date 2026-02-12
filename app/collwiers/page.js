export default function CollWiersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Gradient */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            You're exhausted. You're overwhelmed.
            <span className="block mt-2 text-gray-700">And from the outside, your life looks fine.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            If you've been carrying everything—work, family, everyone's needs—and wondering when it's finally your turn... you're in the right place.
          </p>
          <a 
            href="https://collwi.com/register" 
            className="inline-block bg-primary hover:bg-secondary text-white font-semibold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Start Your Journey (Free - No Credit Card)
          </a>
        </div>
      </section>

      {/* This is for you if Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">This is for you if...</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "You're juggling work, family, and endless responsibilities—but feel like you're running on empty",
              "You have 'everything' on paper, but something still feels missing",
              "You've tried self-help books, podcasts, and advice—but nothing sticks",
              "You feel isolated, even when you're surrounded by people",
              "You're tired of surface-level friendships that leave you feeling heavier, not lighter",
              "You know you're 'meant for more,' but don't know where to start"
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold mt-1">✓</div>
                <p className="text-lg text-gray-700">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-2xl font-semibold text-gray-900 mt-12">
            You're not broken. You're just carrying too much, alone.
          </p>
        </div>
      </section>

      {/* The Real Problem Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            The Real Problem Isn't Your Life.<br/>It's That You're Living It Alone.
          </h2>
          <p className="text-xl text-gray-700 mb-6 text-center max-w-2xl mx-auto">
            You don't need another checklist. You don't need to "try harder" or "think more positively."
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {[
              { title: "Real connection", desc: "Not surface-level small talk or mutual venting" },
              { title: "Guided support", desc: "Someone to walk with you, not just tell you what to do" },
              { title: "A safe space", desc: "Where you can be honest without judgment or guilt" },
              { title: "Clarity", desc: "Not just motivation, but actual steps forward" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xl text-gray-700 mt-12 max-w-3xl mx-auto">
            CollWi gives you structured group coaching that meets you where you are—overwhelmed, disconnected, and ready for something real.
          </p>
        </div>
      </section>

      {/* Why CollWi Works Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Why CollWi Works When Everything Else Hasn't
          </h2>
          <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            Most support feels generic. Impersonal. Like it's designed for "everyone" but speaks to no one.
          </p>
          
          <div className="space-y-8">
            {[
              { 
                title: "Guided Group Coaching",
                desc: "You're not figuring this out alone. Professional coaches guide every session.",
                emoji: "🎯"
              },
              { 
                title: "Real Connection",
                desc: "Meet women who are in the same boat. Who are right there with you, figuring it out together. Who won't judge you for wanting more, because they get it.",
                emoji: "🤝"
              },
              { 
                title: "Structured, Not Overwhelming",
                desc: "No endless content. No 'do more' pressure. Just clear, intentional sessions.",
                emoji: "📋"
              },
              { 
                title: "Personalized Support",
                desc: "Your coach knows your name, your story, your struggles. This isn't a YouTube video.",
                emoji: "💬"
              },
              { 
                title: "Growth, Not Venting",
                desc: "We go deeper than complaining. You'll leave sessions with clarity and direction.",
                emoji: "🌱"
              }
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-6 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="text-4xl flex-shrink-0">{item.emoji}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">✅ {item.title}</h3>
                  <p className="text-lg text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-2xl font-semibold text-gray-900 mt-16">
            This isn't self-help. It's guided transformation—together.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">How CollWi Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { num: "1", title: "Join a Group", desc: "Small, intimate coaching groups led by certified coaches" },
              { num: "2", title: "Show Up", desc: "Weekly sessions designed to help you process, connect, and grow" },
              { num: "3", title: "Get Support", desc: "Between sessions, stay connected with your group and coach" },
              { num: "4", title: "Move Forward", desc: "With clarity, tools, and a community that actually gets it" }
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold">{item.num}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xl font-semibold text-gray-700 mt-12">
            No judgment. No pressure. Just real support.
          </p>
        </div>
      </section>

      {/* What Changes */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">What Changes When You Join CollWi</h2>
          <div className="space-y-6">
            {[
              "You'll stop carrying everything alone — and finally feel supported",
              "You'll reconnect with yourself — beyond your roles as partner, parent, or employee",
              "You'll gain clarity — on what's missing and what to do about it",
              "You'll build real friendships — with women who lift you up, not drain you",
              "You'll feel seen and heard — without having to explain or justify yourself",
              "You'll believe your dreams are still possible — and take steps toward them"
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-4 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
                <div className="text-3xl">🌱</div>
                <p className="text-lg text-gray-800 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* You Deserve More */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-100 via-blue-50 to-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">You Deserve More Than "Fine."</h2>
          <div className="space-y-6 text-lg text-gray-700 mb-12">
            <p>You've spent years taking care of everyone else.</p>
            <p>You've silenced your own needs because your life looks "good enough" from the outside.</p>
            <p>You've told yourself you should be grateful—and used that gratitude to ignore what's missing.</p>
          </div>
          
          <div className="bg-white p-10 rounded-3xl shadow-2xl mb-12">
            <p className="text-2xl font-bold text-gray-900 mb-6">But here's the truth:</p>
            <div className="space-y-4 text-xl text-gray-700">
              <p>You can be grateful <em>and</em> want more.</p>
              <p>You can have a stable life <em>and</em> crave meaning, connection, and purpose.</p>
              <p>You don't have to wait until everything falls apart to ask for support.</p>
            </div>
          </div>

          <p className="text-center text-3xl font-bold text-gray-900">
            CollWi is where you stop wondering "is this all there is?" and start building what comes next.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Ready to Stop Carrying It All Alone?</h2>
          <p className="text-2xl mb-6 opacity-90">Join CollWi today. It's free to start. No credit card. No pressure.</p>
          <p className="text-xl mb-12 opacity-90">Just real support, real connection, and a path forward.</p>
          <a 
            href="https://collwi.com/register" 
            className="inline-block bg-white text-primary hover:bg-gray-100 font-bold text-xl px-12 py-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started Free
          </a>
        </div>
      </section>

      {/* Footer Quote */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-2xl italic text-gray-700 mb-4">
            "I know this can't be all there is... but I don't know where to start."
          </p>
          <p className="text-xl font-semibold text-gray-900">
            You don't have to know. That's what we're here for.
          </p>
        </div>
      </section>
    </div>
  )
}
