import { getPostAndMorePosts } from '@graphql/api'

export const getPostProps = async (resolvedUrl) => {
  const props = await getPostAndMorePosts(resolvedUrl)

  if (!props?.post?.id) return { notFound: true }

  return {
    props,
  }
}
