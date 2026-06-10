'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logoImg from "@/assets/images/collwi nav logo.png";
import { useState, useEffect } from 'react';

const TopNavLanding = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (path: string) =>
    pathname === path ? 'text-secondary-dark' : 'text-slate-600 hover:text-slate-900';

  const navLinks = [
    { href: '/how-it-works/community-member', label: 'How It Works' },
    { href: 'https://collwi.com/programs', label: 'Events' },
    { href: '/about', label: 'About Us' },
    { href: '/blog', label: 'Blog' },
    { href: '/privacy', label: 'Privacy' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-white/80 backdrop-blur-xl shadow-soft border-b border-slate-100'
          : 'py-5 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10 flex-shrink-0">
              <Image src={logoImg} alt="CollWi" height={40} width={150} className="h-10 w-auto" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${isActive(link.href)} hover:bg-slate-50`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Auth */}
            <div className="hidden lg:flex items-center gap-3">
              <>
                  <Link
                    href="https://collwi.com/login"
                    className="px-5 py-2.5 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
                  >
                    Log in
                  </Link>
                  <Link
                    href="https://collwi.com/register"
                    className="btn-primary !py-2.5 !px-6 !text-sm"
                  >
                    Get Started Free
                  </Link>              </>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <span className={`w-5 h-0.5 bg-slate-800 rounded-full transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <span className={`w-5 h-0.5 bg-slate-800 rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-0' : ''}`} />
              <span className={`w-5 h-0.5 bg-slate-800 rounded-full transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
        mobileOpen ? 'visible' : 'invisible'
      }`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity duration-500 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />
        {/* Panel */}
        <div className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-white shadow-heavy transition-transform duration-500 ease-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col pt-24 px-8 gap-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3 text-lg font-medium transition-colors ${isActive(link.href)}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-slate-100 my-4" />
            <div className="flex flex-col gap-3 mt-2">
                <Link href="https://collwi.com/login" className="btn-outline text-center">Log in</Link>
                <Link href="https://collwi.com/register" className="btn-primary text-center">Get Started Free</Link>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavLanding;
