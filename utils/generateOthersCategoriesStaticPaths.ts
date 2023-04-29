import { getCategoriesWithoutChildren } from '@graphql/api'
import { MAX_PAGES } from '@utils/constants'

export const generateOthersCategoriesStaticPaths = async (isPage = true) => {
  const termsPaths = await getCategoriesWithoutChildren()

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
