import { getPostAndMorePosts } from '@lib/api'

export const getPostProps = async (resolvedUrl) => {
  const { post, posts } = await getPostAndMorePosts(resolvedUrl)

  if (!post?.id) return { notFound: true }

  return {
    props: {
      post: post,
      posts: posts,
    },
  }
}
