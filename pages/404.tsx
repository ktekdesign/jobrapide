import React from 'react'
import Head from 'next/head'
import ArchiveTitle from '@components/archive-title'
import SeoLink from '@components/seoLink'

const PageError = () => (
  <>
    <Head>
      <title>Page introuvable - JobRapide</title>
      <meta
        name="description"
        content="Page introuvable sur le site web de JobRapide"
      />
    </Head>

    <ArchiveTitle title="Error 404 : page introuvable" />
    <p>Votre recherche n&apos;a retourné aucun résultat.</p>
    <SeoLink as="div" href="/" innerClassName="button" title="Retour">
      Retour
    </SeoLink>
  </>
)

export default PageError
