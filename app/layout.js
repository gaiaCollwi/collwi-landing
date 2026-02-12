export const metadata = {
  title: 'CollWi - Collective Wisdom',
  description: 'Group coaching that turns personal growth into a shared journey',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 800px; margin: 0 auto; padding: 40px 20px; }
          h1 { font-size: 2.5rem; margin-bottom: 1.5rem; line-height: 1.2; }
          h2 { font-size: 1.8rem; margin-top: 3rem; margin-bottom: 1rem; }
          h3 { font-size: 1.3rem; margin-top: 2rem; margin-bottom: 0.8rem; }
          p { margin-bottom: 1.2rem; font-size: 1.1rem; }
          ul { margin-bottom: 1.5rem; margin-left: 2rem; }
          li { margin-bottom: 0.5rem; }
          .cta { display: inline-block; background: #0B57D0; color: white; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-weight: 500; margin: 2rem 0; }
          .cta:hover { background: #1f64d4; }
          .highlight { background: #f7f5f2; padding: 1.5rem; border-radius: 8px; margin: 2rem 0; }
          .benefit { margin: 1.5rem 0; }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
