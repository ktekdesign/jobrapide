import { getAllPages } from './getPagination'
import { populateTerms } from './populateContext'

export const generateTermsStaticPaths = async (term) => {
  const MAX_PAGE = parseInt(process.env.NEXT_PUBLIC_MAX_PAGE)
  const termsPaths = await populateTerms(term)
  const paths = []
  termsPaths.map((path) => {
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
