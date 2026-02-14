import { Outfit } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata = {
  title: 'CollWi | Community for Women\'s Personal Growth & Connection',
  description:
    'A platform built by women, for women. Group coaching and community for women seeking real connection, support, and personal growth. Join free.',
  keywords: 'women community, women support group, group coaching for women, community for women, women helping women, online women\'s group, personal growth women',
  openGraph: {
    title: 'CollWi | Community for Women\'s Personal Growth & Connection',
    description:
      'A platform built by women, for women. Group coaching and real connection for women seeking support and growth.',
    type: 'website',
    siteName: 'CollWi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CollWi | Community for Women\'s Personal Growth',
    description: 'Group coaching and community built by women, for women.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-sans overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
