import { getPostAndMorePosts } from '@graphql/api'
import { isEmpty } from '@utils/manipulateArray'
import addLayoutData from '@utils/addLayoutData'

export const getPostProps = async (slugs, prefix) => {
  const postPage = await getPostAndMorePosts(`${prefix}${slugs.join('/')}`)

  if (isEmpty(postPage?.post)) return { notFound: true }

  const { post, posts } = postPage
  const layout = addLayoutData({
    ...post,
    posts,
  })
  return layout
}
