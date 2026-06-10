import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — CollWi | Our Mission & Story",
  description: "CollWi is a digital platform fostering collaboration, connection, and growth through virtual social groups, professional group coaching programs, and topic-based sharing rooms.",
  openGraph: {
    title: "About Us — CollWi",
    description: "Learn about CollWi — a vibrant community of CollWiers united by a passion for personal growth. Discover our mission, our story, and what drives us to empower each other.",
    url: "https://collwi.com/about",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "CollWi — Group Coaching Platform" }],
  },
  alternates: {
    canonical: "https://collwi.com/about",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
