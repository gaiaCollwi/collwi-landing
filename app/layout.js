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
  title: 'CollWi | Community & Coaching for Women Seeking Support, Connection, and Personal Growth',
  description:
    'CollWi is a community for women seeking support, connection, and personal growth. Join free Sharing Rooms and access coaching if you need extra guidance.',
  keywords: 'women community, women support group, personal growth for women, life transitions, women seeking support, peer support for women, group coaching women, women looking for community, coaching for women, women helping women, support for overwhelmed women',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'CollWi | Community & Coaching for Women',
    description:
      'CollWi is a community for women seeking support, connection, and personal growth. Join free Sharing Rooms and access coaching if you need extra guidance.',
    type: 'website',
    siteName: 'CollWi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CollWi | Community & Coaching for Women',
    description: 'A community for women seeking support, connection, and personal growth. Free Sharing Rooms and optional coaching.',
  },
}

export default function RootLayout({ children }) {
  // ✅ AEO-OPTIMIZED Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CollWi",
    "description": "CollWi is a community platform for women seeking support, connection, and personal growth. Women join to find peer support, navigate life transitions, and access coaching if needed.",
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
      "description": "Free Sharing Rooms for peer support. Group coaching programs and 1-on-1 sessions available with certified coaches if you need extra guidance.",
      "priceCurrency": "USD"
    }
  }

  // ✅ AEO: Service Schema (Community Platform)
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Women's Community & Coaching Platform",
    "provider": {
      "@type": "Organization",
      "name": "CollWi"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "audience": {
      "@type": "PeopleAudience",
      "suggestedGender": "Female",
      "suggestedMinAge": 25,
      "suggestedMaxAge": 65
    },
    "description": "Community-first platform where women seeking support, connection, and personal growth connect through free Sharing Rooms, access certified coaches if they need accelerated growth, and find peer support. Built by women, for women—on your terms.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "url": "https://collwi.com/register",
      "description": "Free Sharing Rooms for peer support. Group coaching programs and 1-on-1 sessions available with certified coaches if you need extra guidance."
    }
  }

  // ✅ AEO: FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is CollWi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CollWi is an online community for women seeking support, connection, and personal growth through peer support and optional coaching."
        }
      },
      {
        "@type": "Question",
        "name": "Who is CollWi for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Women looking for community, going through life transitions, or wanting support and personal growth."
        }
      },
      {
        "@type": "Question",
        "name": "Is CollWi free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Sharing Rooms are free. Coaching is optional."
        }
      },
      {
        "@type": "Question",
        "name": "How is CollWi different from therapy or coaching?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CollWi combines peer support and optional coaching, giving women both community and guidance in one place."
        }
      },
      {
        "@type": "Question",
        "name": "What are Sharing Rooms?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Free, virtual peer support spaces where women connect around topics like career pivots, work-life balance, and personal growth. No judgment, no pressure—just real connection with women who get it."
        }
      }
    ]
  }

  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
