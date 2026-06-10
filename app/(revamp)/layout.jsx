import TopNavLanding from '@/app/components/revamp/TopNavLanding';
import Footer from '@/app/components/revamp/Footer';
import SmoothScrollProvider from '@/app/components/revamp/SmoothScrollProvider';

export default function LandingLayout({ children }) {
  return (
    <SmoothScrollProvider>
      <TopNavLanding />
      <main className="min-h-screen bg-[#FAFAF8] pt-20">
        {children}
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
