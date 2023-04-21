import { getTermAndPosts } from '@graphql/api'
import { TermType } from '@utils/interfaces'
import { getLast, isEmpty } from './manipulateArray'
import getPagination from './getPagination'

export const getTermProps = async (
  resolvedUrl: string,
  type: TermType,
  currentPage: number
) => {
  const term = await getTermAndPosts({
    term: resolvedUrl,
    type,
    page: currentPage,
  })

  if (isEmpty(term)) return { notFound: true }
  const pages = getPagination(term.count, currentPage)
  if (
    isEmpty(pages) ||
    currentPage < 1 ||
    currentPage > parseInt(getLast(pages))
  )
    return { notFound: true }
  return { props: { term, currentPage, pages, revalidate: 3600 } }
}
