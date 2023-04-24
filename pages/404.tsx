import React from 'react'
import Head from 'next/head'
import Layout from '@layout/layout'
import ArchiveTitle from '@components/archive-title'
import addLayoutData from '@utils/addLayoutData'
import SeoLink from '@components/seoLink'

export const getStaticProps = async () => {
  const layout = await addLayoutData({})
  return layout
}

const PageError = (props) => (
  <Layout {...props.layout}>
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
        <SeoLink href="/" className="button" label="Retour">
          Retour
        </SeoLink>
      </div>
    </div>
  </Layout>
)

export default PageError
