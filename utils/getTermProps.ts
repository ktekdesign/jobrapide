import { getTermAndPosts } from '@graphql/api'
import { isEmpty } from '@utils/manipulateArray'
import addLayoutData from '@utils/addLayoutData'

export const getTermProps = async (slug, type, currentPage = 1) => {
  const term = await getTermAndPosts({
    slug,
    type,
    currentPage,
  })

  if (isEmpty(term)) return { notFound: true }

  return await addLayoutData(
    {
      currentPage,
      ...term,
    },
    slug
  )
}
