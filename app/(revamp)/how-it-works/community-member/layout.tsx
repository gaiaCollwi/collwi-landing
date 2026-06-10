import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How CollWi Works for Community Members | Join & Grow Together",
  description: "Learn how CollWi connects you with expert coaches and a supportive community. Sign up free, join programs, and achieve your goals with collective support.",
  openGraph: {
    title: "How CollWi Works — Community Members",
    description: "Group coaching, empowered. Learn how to get started on your growth journey.",
    url: "https://collwi.com/how-it-works/community-member",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "How CollWi Works for Community Members" }],
  },
  alternates: {
    canonical: "https://collwi.com/how-it-works/community-member",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
