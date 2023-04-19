import Head from 'next/head'
import PostBody from '@components/post-body'
import Layout from '@layout/layout'
import { getPage } from 'graphql/api'
import { CMS_NAME } from '@utils/constants'
import PostTitle from '@components/post-title'

export default function Page({ page }) {
  return (
    <Layout seo={page.seo}>
      <Head>
        <title>{`${page.title} | ${CMS_NAME}`}</title>
        <meta property="og:image" content="/images/logo.png" />
      </Head>
      <PostTitle>{page.title}</PostTitle>
      <PostBody content={page.content} />
    </Layout>
  )
}

export async function getServerSideProps({ resolvedUrl, res }) {
  const data = await getPage(resolvedUrl)

  if (!data?.id) return { notFound: true }

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  return {
    props: {
      page: data,
    },
  }
}
