/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline"
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"]
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY"
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin"
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()"
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload"
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: blob: https:; font-src 'self' data: https:; connect-src 'self' https:; frame-src 'self' https:;"
          }
        ]
      },
      {
        source: "/(.*)",
        has: [{ type: "host", value: "tech-lume-ai.vercel.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }]
      }
    ];
  },
  async redirects() {
    return [
      { source: "/index", destination: "/", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/home", destination: "/", permanent: true }
    ];
  },
  async rewrites() {
    return [
      // Top-level Pillar URL aliases
      { source: "/ai-engineering", destination: "/category/ai-engineering" },
      { source: "/enterprise-ai", destination: "/category/enterprise-ai" },
      { source: "/ai-tools", destination: "/category/ai-tools" },
      { source: "/programming-dev", destination: "/category/programming-dev" },
      { source: "/ai-business", destination: "/category/ai-business" },
      { source: "/cybersecurity-ai", destination: "/category/cybersecurity-ai" },
      { source: "/ai-hardware", destination: "/category/ai-hardware" },
      { source: "/future-tech", destination: "/category/future-tech" },
      // Top-level Topic Cluster aliases
      { source: "/prompt-engineering", destination: "/topics/prompt-engineering" },
      { source: "/model-context-protocol", destination: "/topics/model-context-protocol" },
      { source: "/multi-agent-systems", destination: "/topics/multi-agent-systems" },
      { source: "/rag-architecture", destination: "/topics/rag-architecture" },
      { source: "/zero-trust-ai-security", destination: "/topics/zero-trust-ai-security" },
      { source: "/ai-finops", destination: "/topics/ai-finops" },
      { source: "/quantization-int4-fp8", destination: "/topics/quantization-int4-fp8" }
    ];
  }
};

export default nextConfig;
