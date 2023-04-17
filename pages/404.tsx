import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '@layout/layout'

const PageError = () => (
  <Layout>
    <Head>
      <title>Page introuvable - JobRapide</title>
      <meta
        name="description"
        content="Page introuvable sur le site web de JobRapide"
      />
    </Head>

    <div className="border border-gray-500 p-8">
      <h1 className="bg-primary text-white text-2xl p-2">
        Error 404 : page introuvable
      </h1>
      <p>La page que vous recherchée a été supprimée ou est inexistante.</p>

      <div className="back-btn">
        <Link href="/" className="btn btn-primary">
          Retour
        </Link>
      </div>
    </div>
  </Layout>
)

export default PageError
