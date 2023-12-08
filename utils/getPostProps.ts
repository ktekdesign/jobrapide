import getPostAndMorePosts from '@graphql/api/getPostAndMorePosts'
import { isEmpty } from '@utils/manipulateArray'
import getSidebar from '@graphql/api/getSidebar'
import getLayoutProps from './getLayoutProps'

export const getPostProps = async (slugs, prefix) => {
  const pageSlug = `${prefix}${slugs.join('/')}`
  const [postPage, sidebar] = await Promise.all([
    getPostAndMorePosts(pageSlug),
    getSidebar(),
  ])

  if (isEmpty(postPage?.post)) return { notFound: true }

  const { post } = postPage
  return getLayoutProps(post, pageSlug, sidebar)
}
