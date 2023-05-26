import { useCallback, useMemo } from 'react'
import usePaginationCount from './usePaginationCount'
import getPagination from '@utils/getPagination'
import { isFirstPage } from '@utils/manipulateArray'

const usePagination = ({
  secteur,
  region,
  category,
  tag,
  search,
  currentPage,
  href,
}) => {
  const count = usePaginationCount({
    secteur,
    region,
    category,
    tag,
    search,
  })

  const pages = useMemo(
    () => getPagination(count, currentPage),
    [count, currentPage]
  )

  const url = useCallback(
    (page) =>
      search !== undefined
        ? `${
            isFirstPage(page)
              ? href?.replace('_page_', '')
              : href?.replace('_page_', `page/${page}/`)
          }`
        : `${href}${!isFirstPage(page) ? `page/${page}/` : ''}`,
    [search, href]
  )
  return { pages, url }
}

export default usePagination
