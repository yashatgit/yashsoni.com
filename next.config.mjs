import fs from "fs";
import path from "path";

// Tools that live in their own folder (public/tools/<name>/index.html)
const folderTools = fs
  .readdirSync(path.join(process.cwd(), "public", "tools"), { withFileTypes: true })
  .filter((d) => d.isDirectory() && fs.existsSync(path.join(process.cwd(), "public", "tools", d.name, "index.html")))
  .map((d) => d.name);

const nextConfig = {
  experimental: {
    ppr: false,
  },
  headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async rewrites() {
    return [
      // Folder tools: /tools/<name> serves public/tools/<name>/index.html
      ...folderTools.map((name) => ({ source: `/tools/${name}`, destination: `/tools/${name}/index.html` })),
      {
        // Rewrite /tools/:path to /tools/:path.html
        // This allows clean URLs like /tools/polaroid-studio instead of /tools/polaroid-studio.html
        // Individual tools are served directly from public/tools/ via this rewrite
        source: "/tools/:path([^.]+)",
        destination: "/tools/:path.html",
      },
    ];
  },
};

const ContentSecurityPolicy = `
    default-src 'self' vercel.live;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.vercel-insights.com vercel.live va.vercel-scripts.com cdn.tailwindcss.com cdnjs.cloudflare.com;
    style-src 'self' 'unsafe-inline' fonts.googleapis.com;
    img-src * blob: data:;
    media-src 'self';
    connect-src *;
    font-src 'self' data: fonts.gstatic.com;
    frame-src 'self' *.codesandbox.io vercel.live;
`;

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\n/g, ""),
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

export default nextConfig;
