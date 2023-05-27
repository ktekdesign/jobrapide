import { getTermsPaths } from '@graphql/api'

export const generateTermsStaticPaths = async (term, isPage = true) => {
  const termsPaths = await getTermsPaths(term)

  const paths = isPage
    ? termsPaths?.map((path) => ({ params: { slug: path.slug, id: '2' } }))
    : termsPaths?.map((path) => ({ params: { slug: path.slug } }))

  return {
    paths,
    fallback: true,
  }
}
