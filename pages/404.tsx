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

    <div className="border border-gray-500 p-8">
      <ArchiveTitle>Error 404 : page introuvable</ArchiveTitle>
      <p>La page que vous recherchée a été supprimée ou est inexistante.</p>
      <SeoLink
        as="div"
        className="text-center row"
        href="/"
        innerClassName="button"
        label="Retour"
      >
        Retour
      </SeoLink>
    </div>
  </>
)

export default PageError
