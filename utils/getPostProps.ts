import { getPostAndMorePosts } from '@graphql/api'
import { isEmpty } from './manipulateArray'

export const getPostProps = async (resolvedUrl) => {
  const { post, posts } = await getPostAndMorePosts(resolvedUrl)

  if (isEmpty(post)) return { notFound: true }

  return {
    props: {
      post,
      posts,
    },
  }
}
