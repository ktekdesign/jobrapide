import { getLatestPosts } from '@graphql/api'

export const generatePostsStaticPaths = async (term, client) => {
  const postsPaths = await getLatestPosts(term, client)

  const paths = postsPaths.map((path) => {
    const slugs = path.uri.split('/')
    slugs.pop()
    slugs.shift()
    return { params: { slug: slugs } }
  })

  return {
    paths,
    fallback: true,
  }
}
