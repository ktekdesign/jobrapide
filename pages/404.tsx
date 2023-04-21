import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '@layout/layout'
import ArchiveTitle from '@components/archive-title'

const PageError = () => (
  <Layout seo={null}>
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

      <div className="text-center row">
        <Link href="/" className="button">
          Retour
        </Link>
      </div>
    </div>
  </Layout>
)

export default PageError
