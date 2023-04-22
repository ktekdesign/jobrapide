import { getTermAndPosts } from '@graphql/api'
import { getLast, isEmpty, prev } from './manipulateArray'
import getPagination from './getPagination'
import { REVALIDATE } from './constants'

export const getTermProps = async (params, type) => {
  const pageIndex = params?.slug?.findIndex((param) => param === 'page')
  const resolvedSlug =
    pageIndex && pageIndex !== -1
      ? params.slug[prev(pageIndex)]
      : getLast(params.slug)
  const currentPage =
    pageIndex && pageIndex !== -1 ? parseInt(getLast(params.slug)) : 1

  const term = await getTermAndPosts({
    term: resolvedSlug,
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
  return { props: { term, currentPage, pages, revalidate: REVALIDATE } }
}
