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
  uri,
}) => {
  const [deferredCount] = usePaginationCount({
    secteur,
    region,
    category,
    tag,
    search,
  })

  const pages = useMemo(
    () => getPagination(deferredCount, currentPage),
    [deferredCount, currentPage]
  )

  const url = useCallback(
    (page) =>
      search !== undefined
        ? `${
            isFirstPage(page)
              ? uri.replace('_page_', '')
              : uri.replace('_page_', `page/${page}/`)
          }`
        : `${uri}${!isFirstPage(page) ? `page/${page}/` : ''}`,
    [search, uri]
  )
  return { pages, url }
}

export default usePagination
