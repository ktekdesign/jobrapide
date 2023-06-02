/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const crypto = require('crypto')

/* eslint-disable no-undef */
if (!process.env.NEXT_PUBLIC_WORDPRESS_API_URL) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `)
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nonce = crypto
  .createHash('sha256')
  .update(crypto.randomUUID())
  .digest('base64')
const isDev = process.env.NODE_ENV !== 'production'
const ContentSecurityPolicy = `
  base-uri 'self';
  default-src 'self';
  script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https: 'unsafe-inline'${
  isDev ? " 'unsafe-eval'" : ''
};
  child-src 'self';
  style-src 'self'${
    isDev ? " 'unsafe-inline'" : ''
  } *.gstatic.com *.googleapis.com *.googlesyndication.com 'unsafe-inline';
  font-src 'self' data:;
  connect-src 'self' *.google-analytics.com *.googleapis.com *.google.com *.google-analytics.com *.googlesyndication.com *.jobrapide.org *.gstatic.com *.analytics.google.com *.googletagmanager.com;
  frame-src *.g.doubleclick.net *.twitter.com *.facebook.com *.googlesyndication.com *.google.com *.googleadservices.com *.googletagmanager.com;
  img-src 'self' *.jobrapide.org *.twitter.com *.facebook.com *.googleadservices.com *.googlesyndication.com *.googleapis.com *.gstatic.com *.google.com *.g.doubleclick.net *.google-analytics.com *.googletagmanager.com *.atdmt.com;
`
/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
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
  env: {
    nonce,
  },
  swcMinify: true,
  // Adding policies:
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
          },
        ],
      },
    ]
  },
  trailingSlash: true,
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
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
})
