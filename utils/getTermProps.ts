import getTermAndPosts from '@graphql/api/getTermAndPosts'
import { isEmpty } from '@utils/manipulateArray'
import getSidebar from '@graphql/api/getSidebar'
import getLayoutProps from './getLayoutProps'

export const getTermProps = async (slug, type, currentPage = 1) => {
  const [term, sidebar] = await Promise.all([
    getTermAndPosts({
      slug,
      type,
      currentPage,
    }),
    getSidebar(),
  ])

  if (isEmpty(term)) return { notFound: true }

  return getLayoutProps(
    {
      currentPage,
      ...term,
    },
    slug,
    sidebar
  )
}
