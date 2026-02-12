import './globals.css'

export const metadata = {
  title: 'CollWi - Collective Wisdom',
  description: 'Group coaching that turns personal growth into a shared journey',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
