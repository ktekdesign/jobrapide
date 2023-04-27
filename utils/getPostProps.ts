import { getPostAndMorePosts } from '@graphql/api'
import { isEmpty } from '@utils/manipulateArray'
import addLayoutData from '@utils/addLayoutData'

export const getPostProps = async (slugs, prefix) => {
  const { post, posts } = await getPostAndMorePosts(
    `${prefix}${slugs.join('/')}`
  )
  if (isEmpty(post)) return { notFound: true }
  const layout = addLayoutData({
    ...post,
    posts,
  })
  return layout
}
