import { getTermAndPosts } from '@graphql/api'
import { TermType } from '@utils/interfaces'
import { isEmpty } from './manipulateArray'

export const getTermProps = async (
  resolvedUrl,
  type: TermType,
  currentPage
) => {
  const term = await getTermAndPosts({
    term: resolvedUrl,
    type,
    page: currentPage,
  })

  if (isEmpty(term)) return { notFound: true }

  return { props: { term, currentPage, revalidate: 3600 } }
}
