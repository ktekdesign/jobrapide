/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextSafe = require('next-safe')

/* eslint-disable no-undef */
if (!process.env.NEXT_PUBLIC_WORDPRESS_API_URL) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `)
}

const isDev = process.env.NODE_ENV !== 'production'

/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    )

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      }
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
  reactStrictMode: true,
  swcMinify: true,
  // Adding policies:
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: nextSafe({
          isDev,
          permissionsPolicy: false,
          contentSecurityPolicy: {
            'connect-src': [
              "'self'",
              '*.google-analytics.com',
              '*.googleapis.com',
              '*.google.com',
              '*.google-analytics.com',
              '*.googlesyndication.com',
              '*.jobrapide.org',
            ],
            'font-src': "'self' data:",
            'frame-src': [
              '*.g.doubleclick.net',
              '*.twitter.com',
              '*.facebook.com',
              '*.googlesyndication.com',
              '*.google.com',
              '*.googleadservices.com',
            ],
            'img-src': [
              "'self'",
              '*.jobrapide.org',
              '*.twitter.com',
              '*.facebook.com',
              '*.googleadservices.com',
              '*.googlesyndication.com',
              '*.google.com',
              '*.g.doubleclick.net',
            ],
            'script-src': [
              "'self'",
              '*.twitter.com',
              '*.facebook.net',
              '*.googleapis.com',
              '*.google.com',
              '*.gstatic.com',
              'www.googletagmanager.com',
              '*.googlesyndication.com',
              '*.googleadservices.com',
            ],
            'style-src': "'self'",
          },
        }),
      },
    ]
  },
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.jobrapide.org',
      },
      {
        protocol: 'https',
        hostname: '**.gravatar.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
}
