import React from 'react'
import Head from 'next/head'
import ArchiveTitle from '@components/archive-title'
import SeoLink from '@components/seoLink'

const PageError = () => (
  <>
    <Head>
      <title>Page d&apos;erreur</title>
      <meta name="description" content="Erreur serveur" />
    </Head>

    <ArchiveTitle title="Error 500 : Erreur du serveur" />
    <p>
      Il s&apos;est produit une erreur critique au niveau de nos serveurs. Nous
      ferons une investigation pour résoudre le problème.
    </p>
    <SeoLink as="div" href="/" innerClassName="button" label="Retour">
      Retour
    </SeoLink>
  </>
)

export default PageError
