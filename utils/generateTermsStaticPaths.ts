import { getCategories, getRegions, getTerms } from '@graphql/api'
import { getAllPages } from './getPagination'
import { TermTypePlural } from './interfaces'

export const generateTermsStaticPaths = async (term, client) => {
  const MAX_PAGE = parseInt(process.env.NEXT_PUBLIC_MAX_PAGE)
  const termsPaths = await (term === TermTypePlural.categories
    ? getCategories(client)
    : term === TermTypePlural.regions
    ? getRegions(client)
    : getTerms(term, client))

  const paths = []
  termsPaths?.map((path) => {
    paths.push({ params: { slug: [path.slug] } })
    for (
      let index = 2;
      index <= Math.min(getAllPages(path.count), MAX_PAGE);
      index++
    ) {
      paths.push({ params: { slug: [path.slug, 'page', `${index}`] } })
    }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}
