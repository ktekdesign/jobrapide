import { getTermAndPosts } from '@graphql/api'
import { isEmpty } from '@utils/manipulateArray'
import addLayoutData from '@utils/addLayoutData'

export const getTermProps = async (slug, type, currentPage = 1) => {
  const term = await getTermAndPosts({
    term: slug,
    type,
    page: currentPage,
  })

  if (isEmpty(term)) return { notFound: true }

  return addLayoutData({
    currentPage,
    ...term,
  })
}
