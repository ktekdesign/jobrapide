import { getCategories, getRegions, getTerms } from '@graphql/api'
import { TermTypePlural } from '@utils/interfaces/data'

export const generateTermsStaticPaths = async (term, isPage = true) => {
  const termsPaths = await (term === TermTypePlural.categories
    ? getCategories()
    : term === TermTypePlural.regions
    ? getRegions()
    : getTerms(term))

  const paths = []
  termsPaths?.map((path) => {
    if (isPage) {
      paths.push({ params: { slug: path.slug, id: '2' } })
    } else {
      paths.push({ params: { slug: path.slug } })
    }
  })

  return {
    paths,
    fallback: true,
  }
}
