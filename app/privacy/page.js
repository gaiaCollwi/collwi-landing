'use client'

import { Shield, Lock, Eye, Globe, UserCheck, Clock, FileText, Baby, Plane, RefreshCw } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/AnimatedSection'

const sections = [
  {
    num: '01',
    icon: Shield,
    color: 'teal',
    title: 'Data Controller',
    content: 'The Data Controller is CollWi PBC, located in Delaware, and can be contacted via email at care@collwi.com.',
  },
  {
    num: '02',
    icon: Eye,
    color: 'purple',
    title: 'Information We Collect',
    content: null,
    subsections: [
      {
        title: 'Personal Information',
        text: 'We collect personal information you provide directly to us when you:',
        items: [
          'Contact Forms: When you submit an information request via our website, we collect your name, surname, email address, and phone number. This data is necessary to respond to your inquiries.',
          'Browsing Data: When you browse our website, cookies and other technologies collect information about your site usage. For more details, refer to our Cookie Policy.',
          'Create an account (e.g., name, email address, date of birth, payment details).',
          'Complete your profile (e.g., interests, goals, profile picture).',
          'Participate in group sessions, coaching programs, or other platform features.',
          'Contact our support team (e.g., email, phone number).',
        ],
      },
      {
        title: 'Usage Information',
        text: 'We collect information about your interactions with our platform, including:',
        items: [
          'IP address, browser type, and device information.',
          'Browsing Data: When you browse our website, cookies and other technologies collect information about your site usage. For more details, refer to our Cookie Policy.',
          'Pages viewed, features used, and time spent on the platform.',
          'Chat logs (only for quality assurance or troubleshooting purposes).',
        ],
      },
      {
        title: 'Cookies and Tracking Technologies',
        text: 'We use cookies and similar technologies to:',
        items: [
          'Improve platform functionality and performance.',
          'Personalize your experience.',
          'Analyze usage trends and gather aggregate data.',
        ],
      },
    ],
  },
  {
    num: '03',
    icon: FileText,
    color: 'coral',
    title: 'How We Use Your Information',
    content: 'We use your information to:',
    items: [
      'Provide and improve our platform and services.',
      'Facilitate group coaching sessions and communication between users.',
      'Personalize your experience based on your preferences and activities.',
      'Process payments and manage your account.',
      'Communicate with you regarding updates, promotions, and important notifications.',
      'Enforce our Terms and Conditions and other policies.',
      'Communications: To respond to your questions or contact requests.',
      'Website Security and User Experience: Browsing data is used to ensure website security, improve your browsing experience, and analyze site usage.',
      'Sessions/Programs management: to schedule and manage your coaching sessions and respond to related inquiries.',
      'We may use your data for marketing communications, newsletters, or advertising purposes.',
    ],
  },
  {
    num: '04',
    icon: UserCheck,
    color: 'teal',
    title: 'Sharing Your Information',
    content: 'We do not sell or rent your personal information. We may share your information with:',
    items: [
      'Service Providers: Third-party vendors who assist us with platform operations, payment processing, analytics, or customer support.',
      'Legal Obligations: Authorities or legal entities if required by law, regulation, or to protect our legal rights.',
      'Consent-Based Sharing: Other users within the group coaching programs, but only as necessary for the program\'s functionality and with your explicit consent.',
    ],
  },
  {
    num: '05',
    icon: Lock,
    color: 'purple',
    title: 'Data Security',
    content: 'We take reasonable measures to protect your information, including:',
    items: [
      'Encryption of sensitive data.',
      'Regular security audits and monitoring.',
      'Access controls to limit who can view or handle your data.',
      'We implement industry-standard security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security. We encourage users to safeguard their account credentials.',
    ],
  },
  {
    num: '06',
    icon: Clock,
    color: 'coral',
    title: 'Data Retention',
    content: 'We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy or as required by law. Once your data is no longer needed, it will be securely deleted.',
  },
  {
    num: '07',
    icon: UserCheck,
    color: 'teal',
    title: 'Your Rights',
    content: 'Depending on your location, you may have the following rights under applicable data protection laws:',
    items: [
      'Access your personal data.',
      'Request rectification or deletion of your personal data.',
      'Restrict or object to the processing of your data.',
      'Withdraw your consent at any time, without affecting the lawfulness of processing based on consent before its withdrawal.',
      'Request data portability.',
      'To exercise these rights, contact us at care@collwi.com.',
    ],
  },
  {
    num: '08',
    icon: Baby,
    color: 'purple',
    title: "Children's Privacy",
    content: 'Our platform is not intended for children under 18 years of age. We do not knowingly collect personal information from children. If we become aware of such data, we will delete it promptly.',
  },
  {
    num: '09',
    icon: Plane,
    color: 'coral',
    title: 'International Data Transfers',
    content: 'If you are located outside the United States, please note that your data may be transferred to and processed in the United States or other countries where our servers or service providers are located. We ensure that such transfers comply with applicable data protection laws and include appropriate safeguards.',
  },
  {
    num: '10',
    icon: RefreshCw,
    color: 'teal',
    title: 'Changes to This Privacy Policy',
    content: 'We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Updates will be posted on this page with the "Effective Date" revised accordingly. We encourage you to review this Privacy Policy periodically.',
  },
]

const colorMap = {
  teal: {
    bg: 'bg-brand-teal/10',
    text: 'text-brand-teal',
    border: 'border-brand-teal',
    dot: 'bg-brand-teal',
    num: 'text-brand-teal/20',
    gradient: 'from-brand-teal/20 to-brand-teal/5',
    glow: 'hover:shadow-glow-teal',
    tocDot: 'bg-brand-teal',
  },
  purple: {
    bg: 'bg-brand-purple/10',
    text: 'text-brand-purple',
    border: 'border-brand-purple',
    dot: 'bg-brand-purple',
    num: 'text-brand-purple/20',
    gradient: 'from-brand-purple/20 to-brand-purple/5',
    glow: 'hover:shadow-glow-purple',
    tocDot: 'bg-brand-purple',
  },
  coral: {
    bg: 'bg-brand-coral/10',
    text: 'text-brand-coral',
    border: 'border-brand-coral',
    dot: 'bg-brand-coral',
    num: 'text-brand-coral/20',
    gradient: 'from-brand-coral/20 to-brand-coral/5',
    glow: 'hover:shadow-glow-coral',
    tocDot: 'bg-brand-coral',
  },
}

function SectionBlock({ section, index }) {
  const c = colorMap[section.color]
  const Icon = section.icon

  return (
    <FadeIn delay={index * 0.04}>
      <div className="relative group">
        {/* Large background number */}
        <span
          className={`absolute -top-6 -left-2 text-[7rem] font-sans font-black leading-none select-none pointer-events-none ${c.num}`}
        >
          {section.num}
        </span>

        <div className="relative pl-8 md:pl-12">
          {/* Left accent border */}
          <div
            className={`absolute left-0 top-0 bottom-0 w-1 rounded-full ${c.dot} opacity-30 group-hover:opacity-100 transition-opacity duration-500`}
          />

          {/* Glassmorphism card wrapper */}
          <div className="glassmorphism rounded-2xl p-6 md:p-8 transition-all duration-300 group-hover:shadow-soft">
            {/* Icon + Title */}
            <div className="flex items-center gap-4 mb-5">
              <div
                className={`w-12 h-12 bg-gradient-to-br ${c.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}
              >
                <Icon size={22} className={c.text} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-brand-navy">
                {section.title}
              </h3>
            </div>

            {/* Content */}
            {section.content && (
              <p className="text-lg text-brand-navy/60 leading-relaxed mb-4">
                {section.content}
              </p>
            )}

            {/* Subsections (for section 2) */}
            {section.subsections &&
              section.subsections.map((sub, si) => (
                <div key={si} className="mb-6 last:mb-0">
                  <h4 className="text-lg font-semibold text-brand-navy/80 mb-2">
                    {sub.title}
                  </h4>
                  <p className="text-brand-navy/60 leading-relaxed mb-3">{sub.text}</p>
                  <ul className="space-y-2.5">
                    {sub.items.map((item, ii) => (
                      <li key={ii} className="flex items-start gap-3">
                        <span
                          className={`w-1.5 h-1.5 ${c.dot} rounded-full mt-2.5 flex-shrink-0`}
                        />
                        <span className="text-brand-navy/55 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

            {/* List items */}
            {section.items && (
              <ul className="space-y-2.5">
                {section.items.map((item, ii) => (
                  <li key={ii} className="flex items-start gap-3">
                    <span
                      className={`w-1.5 h-1.5 ${c.dot} rounded-full mt-2.5 flex-shrink-0`}
                    />
                    <span className="text-brand-navy/55 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* ─── Hero ─── */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-intense" />
        <div className="absolute top-20 right-[10%] w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-[5%] w-72 h-72 bg-brand-purple/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-40 left-[20%] w-48 h-48 bg-brand-coral/8 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-[25%] w-40 h-40 bg-brand-gold/6 rounded-full blur-3xl animate-float" />

        {/* Decorative dots */}
        <div className="absolute top-28 right-[15%] pointer-events-none">
          <div className="w-2 h-2 rounded-full bg-brand-teal/30 animate-pulse-soft" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-purple/25 mt-5 ml-7 animate-pulse-soft" style={{ animationDelay: '1s' }} />
          <div className="w-2.5 h-2.5 rounded-full bg-brand-coral/20 mt-4 ml-2 animate-pulse-soft" style={{ animationDelay: '2s' }} />
        </div>
        <div className="absolute bottom-24 left-[12%] pointer-events-none">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/30 animate-pulse-soft" />
          <div className="w-2 h-2 rounded-full bg-brand-teal/25 mt-4 ml-5 animate-pulse-soft" style={{ animationDelay: '0.7s' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-32 pb-16">
          <FadeIn delay={0.1}>
            <span className="inline-block px-5 py-2 bg-brand-teal/10 text-brand-teal text-xs font-semibold tracking-[0.2em] uppercase rounded-full mb-8 shadow-soft">
              Your Data, Your Rights
            </span>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-light leading-[1.1] mb-8">
              Privacy{' '}
              <em className="text-brand-teal italic">Policy</em>
            </h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="text-xl md:text-2xl text-brand-navy/60 max-w-2xl mx-auto leading-relaxed mb-4">
              We take your privacy seriously. This policy explains how we collect,
              use, and protect your personal information.
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <p className="text-sm text-brand-navy/40 tracking-wide">
              Effective Date: January 1, 2025
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Table of Contents ─── */}
      <section className="relative py-12 px-6 overflow-hidden" style={{
        background: 'radial-gradient(ellipse at 20% 50%, rgba(78, 205, 196, 0.06) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(124, 92, 191, 0.05) 0%, transparent 50%), #ffffff'
      }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="glassmorphism rounded-2xl p-8 shadow-soft">
              <h3 className="text-lg font-bold text-brand-navy mb-5">Table of Contents</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {sections.map((section) => {
                  const c = colorMap[section.color]
                  return (
                    <div key={section.num} className="flex items-center gap-3 group">
                      <span className={`w-2.5 h-2.5 rounded-full ${c.tocDot} flex-shrink-0 group-hover:scale-125 transition-transform`} />
                      <span className="text-sm text-brand-navy/60 group-hover:text-brand-navy transition-colors">
                        <span className={`font-semibold ${c.text}`}>{section.num}.</span> {section.title}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Intro ─── */}
      <section className="relative py-16 md:py-20 px-6 mesh-gradient-cool overflow-hidden">
        <div className="absolute top-8 right-[8%] w-32 h-32 bg-brand-teal/5 rounded-full blur-3xl animate-float-slow pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <FadeIn>
            <p className="text-lg md:text-xl text-brand-navy/60 leading-relaxed">
              Welcome to CollWi (&quot;Site&quot;). Your privacy is of utmost importance to us. This
              Privacy Policy explains how we collect, use, and protect your personal
              information when you visit or interact with our website. We comply with
              international data protection regulations, including the General Data
              Protection Regulation (GDPR) in the European Union, the California Consumer
              Privacy Act (CCPA) in the United States, and other relevant laws.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Policy Sections ─── */}
      <section className="relative py-16 md:py-24 px-6 mesh-gradient-warm overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-[5%] w-48 h-48 bg-brand-coral/4 rounded-full blur-3xl animate-float-slow pointer-events-none" />
        <div className="absolute bottom-40 right-[5%] w-40 h-40 bg-brand-purple/4 rounded-full blur-3xl animate-float pointer-events-none" />
        <div className="absolute top-1/3 right-[8%] pointer-events-none">
          <div className="w-2 h-2 rounded-full bg-brand-teal/20 animate-pulse-soft" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-coral/15 mt-6 ml-4 animate-pulse-soft" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-20 md:space-y-24">
          {sections.map((section, i) => (
            <SectionBlock key={section.num} section={section} index={i} />
          ))}
        </div>
      </section>

      {/* ─── Contact Card ─── */}
      <section className="relative py-20 md:py-28 px-6 overflow-hidden" style={{
        background: 'radial-gradient(ellipse at 30% 50%, rgba(78, 205, 196, 0.06) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(244, 132, 95, 0.05) 0%, transparent 50%), #ffffff'
      }}>
        <div className="max-w-2xl mx-auto relative z-10">
          <FadeIn>
            <div className="glassmorphism rounded-3xl p-10 md:p-14 shadow-soft-xl">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1.5 bg-brand-teal/10 text-brand-teal text-xs font-semibold tracking-[0.15em] uppercase rounded-full mb-5 shadow-soft">
                  Get in Touch
                </span>
                <h2 className="text-3xl md:text-4xl font-sans font-light leading-tight">
                  Contact <em className="text-brand-teal italic">Us</em>
                </h2>
              </div>

              <p className="text-lg text-brand-navy/60 text-center mb-8 leading-relaxed">
                For questions, concerns, or support, please reach out to us.
              </p>

              <div className="space-y-4">
                {[
                  { label: 'Customer Care', value: 'care@collwi.com', href: 'mailto:care@collwi.com' },
                  { label: 'Tech Support', value: 'support@collwi.com', href: 'mailto:support@collwi.com' },
                ].map((contact, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-4 px-5 glassmorphism rounded-xl hover:shadow-soft transition-all duration-300"
                  >
                    <span className="text-sm font-semibold tracking-wide uppercase text-brand-navy/40">
                      {contact.label}
                    </span>
                    <a
                      href={contact.href}
                      className="text-brand-teal font-medium hover:text-brand-teal-dark transition-colors"
                    >
                      {contact.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Thank You ─── */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal via-brand-teal-dark to-brand-purple" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-48 h-48 bg-brand-gold rounded-full blur-3xl" />
        </div>
        <div className="absolute top-16 left-[15%] w-32 h-32 bg-white/8 rounded-full blur-2xl animate-float pointer-events-none" />
        <div className="absolute bottom-12 right-[18%] w-24 h-24 bg-brand-gold/10 rounded-full blur-2xl animate-float-delayed pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-light text-white mb-6 leading-tight">
              Thank you for trusting CollWi
              <br />
              with your personal growth{' '}
              <em className="italic">journey.</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl text-white/70">
              Your privacy is our priority.
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
