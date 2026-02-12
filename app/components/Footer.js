import Logo from './Logo'

const footerLinks = {
  Discover: [
    { label: 'Events', href: 'https://collwi.com/events' },
    { label: 'About Us', href: 'https://collwi.com/about' },
    { label: 'Blog', href: 'https://collwi.com/blog' },
  ],
  'How It Works': [
    { label: 'For Members', href: '/collwiers' },
    { label: 'For Coaches', href: '/coaches' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: 'https://collwi.com/privacy' },
    { label: 'Terms of Service', href: 'https://collwi.com/terms' },
    { label: 'FAQs', href: 'https://collwi.com/faqs' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <Logo size="default" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Turning personal growth from a lonely journey into a shared, guided
              experience through live group coaching and community.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-5">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-brand-teal transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} CollWi. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Facebook', 'Instagram', 'LinkedIn'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-xs text-white/30 hover:text-white/60 transition-colors"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
