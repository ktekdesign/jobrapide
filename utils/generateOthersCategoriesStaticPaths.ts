import { getCategoriesWithoutChildren } from '@graphql/api'

export const generateOthersCategoriesStaticPaths = async (isPage = true) => {
  const termsPaths = await getCategoriesWithoutChildren()

  const paths = isPage
    ? termsPaths?.map((path) => ({ params: { slug: path.slug, id: '2' } }))
    : termsPaths?.map((path) => ({ params: { slug: path.slug } }))

  return {
    paths,
    fallback: true,
  }
}
