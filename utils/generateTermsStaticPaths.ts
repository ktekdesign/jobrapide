import { getCategories, getRegions, getTerms } from '@graphql/api'
import { TermTypePlural } from '@utils/interfaces/data'
import { MAX_PAGES } from '@utils/constants'

export const generateTermsStaticPaths = async (term, isPage = true) => {
  const termsPaths = await (term === TermTypePlural.categories
    ? getCategories()
    : term === TermTypePlural.regions
    ? getRegions()
    : getTerms(term))

  const paths = []
  termsPaths?.map((path) => {
    if (isPage) {
      for (let index = 2; index <= MAX_PAGES; index++) {
        paths.push({ params: { slug: path.slug, id: `${index}` } })
      }
    } else {
      paths.push({ params: { slug: path.slug } })
    }
  })

  return {
    paths,
    fallback: true,
  }
}
