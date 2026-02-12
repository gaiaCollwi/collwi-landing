import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata = {
  title: 'CollWi - Expert Coaches. Supportive Community.',
  description:
    'Group coaching that turns personal growth from a lonely journey into a shared, guided experience. Expert coaches, real connection, real transformation.',
  openGraph: {
    title: 'CollWi - Collective Wisdom',
    description:
      'Expert Coaches. Supportive Community. Your change starts here.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable}`}>
      <body className="font-sans overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
