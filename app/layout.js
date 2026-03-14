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
  title: 'CollWi | Community & Growth for Women',
  description:
    'A supportive community built by women, for women. Live group sessions, certified guides, and real connection. Join free today.',
  keywords: 'women community, women support group, personal growth for women, group sessions women, women empowerment platform, life coaching for women, career support women, working moms community',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'CollWi | Community & Growth for Women',
    description:
      'A supportive community built by women, for women. Live group sessions, certified guides, and real connection.',
    type: 'website',
    siteName: 'CollWi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CollWi | Community & Growth for Women',
    description: 'A supportive community built by women, for women. Live group sessions and real connection.',
  },
}

export default function RootLayout({ children }) {
  // Organization Schema for AEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CollWi",
    "description": "A supportive community platform for women. Built by women, for women.",
    "url": "https://collwi.com",
    "logo": "https://collwi.com/collwi-logo.png",
    "founder": [
      {
        "@type": "Person",
        "name": "Barbara"
      },
      {
        "@type": "Person",
        "name": "Adriana"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/collwi-collective-wisdom/",
      "https://www.instagram.com/collwi_collective_wisdom/",
      "https://www.facebook.com/profile.php?id=61565171915248"
    ],
    "offers": {
      "@type": "Offer",
      "name": "Community Membership",
      "priceCurrency": "USD"
    }
  }

  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
