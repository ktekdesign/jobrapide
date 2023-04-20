import PostBody from '@components/post-body'
import Layout from '@layout/layout'
import { getAllPages, getPage } from '@graphql/api'
import PostTitle from '@components/post-title'
import { preventUndefined } from '@utils/manipulateArray'

export default function Page({ page }) {
  return (
    <Layout seo={preventUndefined(page?.seo)}>
      <PostTitle>{preventUndefined(page?.title)}</PostTitle>
      <PostBody>{preventUndefined(page?.content)}</PostBody>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const page = await getPage(`/${params?.slug}/`)

  if (!page?.id) return { notFound: true }

  return {
    props: {
      page: preventUndefined(page),
    },
  }
}

export async function getStaticPaths() {
  const slugs = await getAllPages()
  // remove contact slug
  const filteredSlugs = slugs.filter((slug) => slug.slug !== 'contact')
  const paths = filteredSlugs.map((slug) => ({ params: { slug: slug.slug } }))

  return {
    paths,
    fallback: true,
  }
}
