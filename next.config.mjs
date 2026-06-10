/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Ported TSX pages type-check in their home repo (collwi-frontend);
    // TS here is syntax-only so type drift never blocks a deploy.
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
