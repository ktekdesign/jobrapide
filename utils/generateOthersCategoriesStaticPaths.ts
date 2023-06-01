import getTermsPaths from '@graphql/api/getTermsPaths'

export const generateOthersCategoriesStaticPaths = async (isPage = true) => {
  const termsPaths = await getTermsPaths('CATEGORY', true)

  const paths = isPage
    ? termsPaths?.map((path) => ({ params: { slug: path.slug, id: '2' } }))
    : termsPaths?.map((path) => ({ params: { slug: path.slug } }))

  return {
    paths,
    fallback: true,
  }
}
