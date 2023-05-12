import categories from './data/categories.json'

export const generateOthersCategoriesStaticPaths = (isPage = true) => {
  const termsPaths = categories
    .filter((category) => category.parentId !== 16 && category.id !== 16)
    .slice(0, 2)

  const paths = isPage
    ? termsPaths?.map((path) => ({ params: { slug: path.slug, id: '2' } }))
    : termsPaths?.map((path) => ({ params: { slug: path.slug } }))

  return {
    paths,
    fallback: true,
  }
}
