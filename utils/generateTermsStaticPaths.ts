import { getAllPages } from './getPagination'
import { populateTerms } from './populateContext'

export const generateTermsStaticPaths = async (term) => {
  const termsPaths = await populateTerms(term)
  const paths = []
  termsPaths.map((path) => {
    paths.push({ params: { slug: [path.slug] } })
    for (let index = 2; index <= getAllPages(path.count); index++) {
      paths.push({ params: { slug: [path.slug, 'page', `${index}`] } })
    }
  })
  return {
    paths,
    fallback: true,
  }
}
