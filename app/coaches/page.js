export default function CoachesPage() {
  return (
    <div className="container">
      <section>
        <h1>Scale Your Impact. Build Your Coaching Practice.</h1>
        <p style={{fontSize: '1.2rem', color: '#555'}}>
          CollWi helps certified coaches deliver group coaching programs that change lives—without burning out on 1:1 sessions.
        </p>
        <a href="https://collwi.com/register" className="cta">Join as a Coach</a>
      </section>

      <section>
        <h2>This is for you if you're a certified coach who...</h2>
        <ul>
          <li>Wants to scale beyond 1:1 sessions without losing the personal touch</li>
          <li>Believes in the power of community and peer support</li>
          <li>Is ready to help people who are overwhelmed, isolated, and ready for real change</li>
          <li>Values connection, emotional safety, and transformation over quick fixes</li>
        </ul>
      </section>

      <section>
        <h2>Why Coach on CollWi?</h2>
        
        <div className="benefit">
          <h3>✅ Reach More People</h3>
          <p>Deliver group programs that serve multiple clients at once—without sacrificing quality or impact.</p>
        </div>

        <div className="benefit">
          <h3>✅ Built-In Community</h3>
          <p>Your participants get peer support between sessions, creating momentum and accountability.</p>
        </div>

        <div className="benefit">
          <h3>✅ Platform & Support</h3>
          <p>We handle the tech, marketing, and logistics. You focus on coaching.</p>
        </div>

        <div className="benefit">
          <h3>✅ Mission-Driven</h3>
          <p>You're not just building a business—you're helping solve the loneliness crisis affecting millions.</p>
        </div>
      </section>

      <section>
        <h2>How It Works</h2>
        <ol style={{marginLeft: '2rem'}}>
          <li><strong>Design Your Program</strong> — Create group coaching experiences aligned with your expertise</li>
          <li><strong>Launch Your Cohort</strong> — We help you attract the right participants</li>
          <li><strong>Lead & Facilitate</strong> — Guide live sessions with small groups (typically 8-12 people)</li>
          <li><strong>Build Community</strong> — Foster peer connections that extend beyond sessions</li>
          <li><strong>Grow Your Practice</strong> — Scale your impact while maintaining quality</li>
        </ol>
      </section>

      <section>
        <h2>Who We're Looking For</h2>
        <ul>
          <li>Certified coaches (ICF, BCC, or equivalent credential)</li>
          <li>Experience with group facilitation (or willingness to learn)</li>
          <li>Commitment to emotional safety and inclusive practices</li>
          <li>Belief in the power of collective wisdom and peer support</li>
        </ul>
      </section>

      <section style={{textAlign: 'center', marginTop: '4rem'}}>
        <h2>Ready to Make a Bigger Impact?</h2>
        <p>Join CollWi's community of coaches who are transforming lives through group coaching.</p>
        <a href="https://collwi.com/register" className="cta" style={{fontSize: '1.2rem', padding: '20px 40px'}}>Apply to Coach</a>
      </section>

      <section style={{marginTop: '4rem', padding: '2rem', background: '#f7f5f2', borderRadius: '8px'}}>
        <h3>About CollWi</h3>
        <p>
          CollWi is a social platform that turns personal growth from a lonely journey into a shared, 
          guided experience through live group coaching and community. We're addressing the loneliness 
          crisis by bringing people together with certified coaches in small, supportive groups.
        </p>
        <p>
          Our mission: make growth social, accessible, and transformative.
        </p>
      </section>
    </div>
  )
}
