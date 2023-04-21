import PostBody from '@components/post-body'
import Layout from '@layout/layout'
import { getAllPages, getPage } from '@graphql/api'
import PostTitle from '@components/post-title'
import { Page } from '@utils/interfaces'
import { isEmpty } from '@utils/manipulateArray'

const Page = ({ seo, title, content }) => (
  <Layout seo={seo}>
    <PostTitle>{title}</PostTitle>
    <PostBody>{content}</PostBody>
  </Layout>
)

export const getStaticProps = async ({ params }) => {
  const page: Page = await getPage(`/${params?.slug}/`)

  if (isEmpty(page)) return { notFound: true }

  return {
    props: {
      ...page,
    },
  }
}

export const getStaticPaths = async () => {
  const slugs = await getAllPages()
  // remove contact slug
  const filteredSlugs = slugs.filter((slug) => slug.slug !== 'contact')
  const paths = filteredSlugs.map((slug) => ({ params: { slug: slug.slug } }))

  return {
    paths,
    fallback: true,
  }
}

export default Page
