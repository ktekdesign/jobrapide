import { getLatestPosts } from '@graphql/api'

export const generatePostsStaticPaths = async (term) => {
  const postsPaths = await getLatestPosts(term)

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
