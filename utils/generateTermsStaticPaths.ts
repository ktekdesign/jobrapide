import { getCategories, getRegions, getSecteurs } from '@graphql/api'
import { TermTypePlural } from '@utils/interfaces/data'

export const generateTermsStaticPaths = async (term, isPage = true) => {
  const termsPaths = await (term === TermTypePlural.categories
    ? getCategories()
    : term === TermTypePlural.regions
    ? getRegions()
    : getSecteurs())

  const paths = isPage
    ? termsPaths?.map((path) => ({ params: { slug: path.slug, id: '2' } }))
    : termsPaths?.map((path) => ({ params: { slug: path.slug } }))

  return {
    paths,
    fallback: true,
  }
}
