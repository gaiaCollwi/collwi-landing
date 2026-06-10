'use client';

import Image from 'next/image';
import Link from 'next/link';
import colli_logo from "@/assets/images/collwi footer logo black.png";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Footer = () => {
  const pathname = usePathname();

  const [data, setData] = useState({
    descriptionText: "Don't face challenges alone.",
    subText: "Join CollWi today.",
    buttonText: 'Get Started for Free',
  });

  useEffect(() => {
    if (pathname === '/how-it-works/coach') {
      setData({ descriptionText: 'You deserve to make', subText: 'greater impact.', buttonText: 'Become a Coach' });
    } else if (pathname === '/how-it-works/community-member') {
      setData({ descriptionText: "You deserve a community", subText: "that understands you.", buttonText: 'Get Started Free' });
    } else if (pathname === '/about') {
      setData({ descriptionText: "Belong and thrive.", subText: "Start your journey today.", buttonText: 'Join Free' });
    } else if (pathname === '/programs' || pathname.includes('/blogs') || pathname.includes('/terms')) {
      setData({ descriptionText: "Find your path forward.", subText: "Join CollWi today.", buttonText: 'Join Free' });
    } else {
      setData({ descriptionText: "Don't face challenges alone.", subText: "Join CollWi today.", buttonText: 'Get Started Free' });
    }
  }, [pathname]);

  return (
    <footer>
      {/* CTA Section */}
      <section className="relative overflow-hidden bg-slate-900 py-24 px-6">
        <div className="absolute inset-0 bg-hero-glow opacity-30" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-tertiary/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-display text-display-md md:text-display-lg text-white mb-3">
            {data.descriptionText}
          </h2>
          <p className="font-display text-display-sm md:text-display-md text-secondary mb-10">
            {data.subText}
          </p>
          <Link
            href="https://collwi.com/register"
            className="inline-flex items-center gap-3 bg-white text-slate-900 font-semibold py-4 px-10 rounded-full text-sm hover:bg-slate-50 transition-all duration-300 hover:shadow-heavy hover:-translate-y-0.5 group"
          >
            {data.buttonText}
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer Links */}
      <div className="bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Brand */}
            <div className="md:col-span-4">
              <Image src={colli_logo} alt="CollWi" height={40} width={140} className="h-10 w-auto mb-5" />
              <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                Empowering community.<br />Inspiring transformation.
              </p>
            </div>

            {/* Links */}
            <div className="md:col-span-8 grid grid-cols-3 gap-8">
              <div>
                <h4 className="text-label text-slate-400 uppercase mb-5">Discover</h4>
                <div className="flex flex-col gap-3">
                  <Link href="https://collwi.com/programs" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Programs</Link>
                  <Link href="/about" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">About Us</Link>
                </div>
              </div>
              <div>
                <h4 className="text-label text-slate-400 uppercase mb-5">How It Works</h4>
                <div className="flex flex-col gap-3">
                  <Link href="/how-it-works/community-member" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">For Members</Link>
                  <Link href="https://collwi.com/how-it-works/coach" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">For Coaches</Link>
                </div>
              </div>
              <div>
                <h4 className="text-label text-slate-400 uppercase mb-5">Resources</h4>
                <div className="flex flex-col gap-3">
                  <Link href="/how-it-works/coach#faq" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">FAQs</Link>
                  <Link href="/blog" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Blog</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-sm text-slate-400">&copy; {new Date().getFullYear()} CollWi PBC</span>
            <div className="flex items-center gap-6">
              <Link href="https://collwi.com/terms" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">Terms</Link>
              <Link href="/privacy" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">Privacy</Link>
              <div className="flex items-center gap-4">
                <Link className="text-slate-400 hover:text-secondary transition-colors" href="https://www.facebook.com/profile.php?id=61565171915248" target="_blank">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </Link>
                <Link className="text-slate-400 hover:text-secondary transition-colors" href="https://www.instagram.com/collwi_collective_wisdom/" target="_blank">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
                </Link>
                <Link className="text-slate-400 hover:text-secondary transition-colors" href="https://www.linkedin.com/company/collwi-collective-wisdom/" target="_blank">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
