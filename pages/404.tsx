import React from 'react'
import Head from 'next/head'
import ArchiveTitle from '@components/archive-title'
import SeoLink from '@components/seoLink'
import addLayoutData from '@utils/addLayoutData'

export const getStaticProps = async () => {
  return await addLayoutData(
    {
      text: 'Votre recherche n&apos;a retourné aucun résultat.',
    },
    '404'
  )
}
const PageError = ({ text }) => (
  <>
    <Head>
      <title>Page introuvable - JobRapide</title>
      <meta
        name="description"
        content="Page introuvable sur le site web de JobRapide"
      />
    </Head>

    <ArchiveTitle title="Error 404 : page introuvable" />
    <p>{text}</p>
    <SeoLink as="div" href="/" linkClassName="button" title="Retour">
      Retour
    </SeoLink>
  </>
)

export default PageError
