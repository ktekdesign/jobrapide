import Head from 'next/head'
import { FC, memo } from 'react'
import { Seo } from '@utils/interfaces/data'
import Script from 'next/script'
import defaultSeo from '@utils/data/seo.json'

const Meta: FC<{ seo?: Seo }> = ({ seo = defaultSeo }) => (
  <>
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf8" />
      <meta name="robots" content="follow" />
      <meta name="resource-type" content="document" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="general" />
      <meta httpEquiv="content-language" content="fr_FR" />
      <meta name="copyright" content="© 2017 JobRapide" />
      <meta name="revisit-after" content="15 days" />
      <meta name="doc-class" content="Completed" />
      <meta name="doc-rights" content="Public" />
      <link
        rel="preconnect"
        href="https://www.jobrapide.org/"
        crossOrigin="anonymous"
      />
      <link rel="dns-prefetch" href="https://www.jobrapide.org/" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:type" content="website" />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@TchadCarriere" />
      <meta name="twitter:widgets:link-color" content="#18a096" />
      <meta name="twitter:widgets:border-color" content="#f8b333" />
      <meta name="msapplication-TileImage" content="/images/logo.webp" />
      <link rel="icon" type="image/x-icon" href="/images/logo.webp" />
      <meta name="twitter:card" content="summary" />
      <meta name="theme-color" content="#18a096" />
      <meta name="twitter:title" content={seo.twitterTitle ?? seo.title} />
      <meta name="twitter:site" content="@tchadcarriere" />
      <meta
        name="twitter:description"
        content={seo.twitterDescription ?? seo.opengraphDescription}
      />
      <meta httpEquiv="last-modified" content={seo.opengraphModifiedTime} />
      <meta
        name="description"
        content={seo.metaDesc ?? seo.opengraphDescription}
      />
      <link rel="canonical" href={seo.canonical} />
      <meta property="og:title" content={seo.opengraphTitle ?? seo.title} />
      <meta property="og:description" content={seo.opengraphDescription} />
      <meta property="og:url" content={seo.opengraphUrl ?? seo.canonical} />
      <meta
        property="og:site_name"
        content={seo.opengraphSiteName ?? process.env.NEXT_PUBLIC_CMS_NAME}
      />
      <meta
        property="article:publisher"
        content={seo.opengraphPublisher ?? process.env.NEXT_PUBLIC_CMS_NAME}
      />
      <meta
        property="article:modified_time"
        content={seo.opengraphModifiedTime}
      />
      <meta property="og:image" content={seo.opengraphImage} />
      <title>{seo.title}</title>
    </Head>
    <Script type="application/ld+json" id="schema">
      {typeof seo?.schema === 'string' && JSON.parse(seo.schema)}
    </Script>
    {process.env.NEXT_PUBLIC_SITE_URL === 'https://v2.jobrapide.org' && (
      <Script
        async
        nonce="random123"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
    )}
  </>
)

export default memo(Meta)
