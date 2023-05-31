import { getPostAndMorePosts } from '@graphql/api'
import { isEmpty } from '@utils/manipulateArray'
import addLayoutData from '@utils/addLayoutData'

export const getPostProps = async (slugs, prefix) => {
  const pageSlug = `${prefix}${slugs.join('/')}`
  const postPage = await getPostAndMorePosts(pageSlug)

  if (isEmpty(postPage?.post)) return { notFound: true }

  const { post } = postPage
  const layout = await addLayoutData(
    {
      ...post,
    },
    pageSlug
  )
  return layout
}
