import React from 'react'
import Head from 'next/head'
import ArchiveTitle from '@components/archive-title'
import SeoLink from '@components/seoLink'
import getSidebar from '@graphql/api/getSidebar'
import getLayoutProps from '@utils/getLayoutProps'

export const getStaticProps = async () => {
  const sidebar = await getSidebar()
  return getLayoutProps(
    {
      text: 'Il s&apos;est produit une erreur critique au niveau de nos serveurs. Nous ferons une investigation pour résoudre le problème.',
    },
    '500',
    sidebar
  )
}
const PageError = ({ text }) => (
  <>
    <Head>
      <title>Page d&apos;erreur</title>
      <meta name="description" content="Erreur serveur" />
    </Head>

    <ArchiveTitle title="Error 500 : Erreur du serveur" />
    <p>{text}</p>
    <SeoLink as="div" href="/" linkClassName="button" title="Retour">
      Retour
    </SeoLink>
  </>
)

export default PageError
