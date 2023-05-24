import { TermTypePlural } from '@utils/interfaces/data'
import categories from './data/categories.json'
import regions from './data/regions.json'
import secteurs from './data/secteurs.json'

export const generateTermsStaticPaths = (term, isPage = true) => {
  const termsPaths =
    term === TermTypePlural.categories
      ? categories.filter((category) => category.parentid === 16)
      : term === TermTypePlural.regions
      ? regions.slice(0, 2)
      : secteurs.slice(0, 2)

  const paths = isPage
    ? termsPaths?.map((path) => ({ params: { slug: path.slug, id: '2' } }))
    : termsPaths?.map((path) => ({ params: { slug: path.slug } }))

  return {
    paths,
    fallback: true,
  }
}
