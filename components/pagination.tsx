import React, { memo, useCallback, useMemo } from 'react'

import ArrowLeft from '/public/images/left.svg'
import ArrowRight from '/public/images/right.svg'

import {
  getLast,
  isCurrentPage,
  isFirstPage,
  next,
  prev,
} from '@utils/manipulateArray'
import SeoLink from '@components/seoLink'
import usePagination from '@hooks/usePagination'
import getPagination from '@utils/getPagination'

const Pagination = ({
  secteur,
  region,
  category,
  tag,
  uri,
  currentPage,
  search,
}: {
  secteur?: number
  region?: number
  category?: number
  tag?: number
  pages?: string[]
  uri?: string
  currentPage?: number
  search?: string
}) => {
  const count = usePagination({
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
            !isFirstPage(page)
              ? uri.replace('_page_', `page/${page}/`)
              : uri.replace('_page_', '')
          }`
        : `${uri}${!isFirstPage(page) ? `page/${page}/` : ''}`,
    [search, uri]
  )

  if (!pages) return <></>
  return (
    <div className="pagination">
      <SeoLink
        label="Page précédente"
        className={`pagination-item ${
          isFirstPage(currentPage) ? 'hidden' : ''
        }`}
        href={url(prev(currentPage))}
      >
        <ArrowLeft className="icon" />
      </SeoLink>
      {pages?.map((page, i) => {
        if (page === '...' || currentPage === parseInt(page)) {
          return (
            <span
              key={i}
              className={page === '...' ? 'pagination-more' : 'current-page'}
            >
              {page}
            </span>
          )
        } else {
          return (
            <SeoLink
              label={`Page ${page}`}
              className="pagination-item"
              href={url(page)}
              key={i}
            >
              {page}
            </SeoLink>
          )
        }
      })}
      <SeoLink
        label="Page suivante"
        className={`pagination-item ${
          isCurrentPage(currentPage, getLast(pages)) ? 'hidden' : ''
        }`}
        href={url(next(currentPage))}
      >
        <ArrowRight className="icon" />
      </SeoLink>
    </div>
  )
}

export default memo(Pagination)
