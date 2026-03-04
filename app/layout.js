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
  title: 'CollWi | Affordable Coaching for Women ($12.99/Month)',
  description:
    'Group coaching built by women, for women. $12.99/month. Certified coaches, live sessions, real support. 10x more affordable than Chief or BetterUp. Join free.',
  keywords: 'affordable coaching for women, group coaching women, women\'s coaching platform, life coaching for women, career coaching women, coaching for working moms, women support group, affordable life coach',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'CollWi | Affordable Coaching for Women ($12.99/Month)',
    description:
      'Group coaching built by women, for women. $12.99/month. Certified coaches, live sessions, real support.',
    type: 'website',
    siteName: 'CollWi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CollWi | Affordable Coaching for Women',
    description: 'Group coaching for women. $12.99/month. Built by women, for women.',
  },
}

export default function RootLayout({ children }) {
  // Organization Schema for AEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CollWi",
    "description": "Affordable group coaching platform for women. Built by women, for women.",
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
      "name": "Group Coaching Membership",
      "price": "12.99",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "12.99",
        "priceCurrency": "USD",
        "billingDuration": "P1M"
      }
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
