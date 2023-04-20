import Head from 'next/head'
import PostBody from '@components/post-body'
import Layout from '@layout/layout'
import { getAllPages, getPage } from 'graphql/api'
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

export async function getStaticProps({ params }) {
  const page = await getPage(`/${params?.slug}/`)

  if (!page?.databaseId) return { notFound: true }

  return {
    props: {
      page,
    },
  }
}

export async function getStaticPaths() {
  const slugs = await getAllPages()
  const paths = slugs.map((slug) => ({ params: { slug: slug.slug } }))

  return {
    paths,
    fallback: true,
  }
}
