import { getPostAndMorePosts } from '@graphql/api'
import { isEmpty } from './manipulateArray'
import { REVALIDATE } from './constants'

export const getPostProps = async (slugs, prefix) => {
  const { post, posts } = await getPostAndMorePosts(
    `${prefix}${slugs.join('/')}`
  )

  if (isEmpty(post)) return { notFound: true }

  return {
    props: {
      post,
      posts,
      revalidate: REVALIDATE,
    },
  }
}
