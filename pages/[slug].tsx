import PostBody from '@components/post-body'
import { getAllPages, getPage } from '@graphql/api'
import PostTitle from '@components/post-title'
import { Page } from '@utils/interfaces/data'
import { isEmpty } from '@utils/manipulateArray'
import addLayoutData from '@utils/addLayoutData'
import client from '@graphql/client'
import Loading from '@components/loading'

const Page = (props) => (
  <Loading data={props} loading={isEmpty(props)}>
    <PostTitle />
    <PostBody />
  </Loading>
)

export const getStaticProps = async ({ params }) => {
  const page: Page = await getPage(`/${params?.slug}/`, client)
  if (isEmpty(page)) return { notFound: true }
  const layout = addLayoutData(page)
  return layout
}

export const getStaticPaths = async () => {
  const slugs = await getAllPages(client)
  // remove contact slug
  const filteredSlugs = slugs.filter((slug) => slug.slug !== 'contact')
  const paths = filteredSlugs.map((slug) => ({ params: { slug: slug.slug } }))

  return {
    paths,
    fallback: true,
  }
}

export default Page
