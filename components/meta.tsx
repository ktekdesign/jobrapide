import Head from 'next/head'
import { FC, memo } from 'react'
import { Seo } from '@utils/interfaces'
import { isEmpty } from '@utils/manipulateArray'
import Script from 'next/script'

const Meta: FC<{ seo: Seo }> = ({ seo }) => (
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
      <meta name="viewport" content="width=device-width, user-scalable=yes" />
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
      <meta name="twitter:widgets:link-color" content="#000000" />
      <meta name="twitter:widgets:border-color" content="#000000" />
      <meta name="twitter:partner" content="tfwp" />
      <meta name="msapplication-TileImage" content="/images/logo.png" />

      <meta name="twitter:card" content="summary" />
      {!isEmpty(seo) && (
        <>
          <meta name="twitter:title" content={seo.twitterTitle} />
          <meta name="twitter:site" content="@tchadcarriere" />
          <meta name="twitter:description" content={seo.twitterDescription} />
          <meta httpEquiv="last-modified" content={seo.opengraphModifiedTime} />
          <meta name="description" content={seo.metaDesc} />
          <link rel="canonical" href={seo.canonical} />
          <meta property="og:title" content={seo.opengraphTitle} />
          <meta property="og:description" content={seo.opengraphDescription} />
          <meta property="og:url" content={seo.opengraphUrl} />
          <meta property="og:site_name" content={seo.opengraphSiteName} />
          <meta property="article:publisher" content={seo.opengraphPublisher} />
          <meta
            property="article:modified_time"
            content={seo.opengraphModifiedTime}
          />
          <meta property="og:image" content={seo.opengraphImage} />
          <title>{seo.title}</title>
        </>
      )}
    </Head>
    <Script type="application/ld+json" id="schema">
      {typeof seo?.schema === 'string' && JSON.parse(seo.schema)}
    </Script>
  </>
)

export default memo(Meta)
