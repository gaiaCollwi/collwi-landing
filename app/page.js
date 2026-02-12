export default function HomePage() {
  return (
    <div className="container" style={{textAlign: 'center', paddingTop: '100px'}}>
      <h1>CollWi</h1>
      <p style={{fontSize: '1.3rem', marginBottom: '3rem', color: '#555'}}>
        Turning personal growth from a lonely journey into a shared, guided experience
      </p>
      
      <div style={{display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap'}}>
        <a href="/collwiers" className="cta" style={{fontSize: '1.2rem', padding: '24px 48px'}}>
          For Members (CollWiers)
        </a>
        <a href="/coaches" className="cta" style={{fontSize: '1.2rem', padding: '24px 48px'}}>
          For Coaches
        </a>
      </div>

      <p style={{marginTop: '4rem', color: '#666'}}>
        Choose your path to get started
      </p>
    </div>
  )
}
