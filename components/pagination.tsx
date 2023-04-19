import { getLast, isFirstPage, next, prev } from '@utils/manipulateArray'
import Link from 'next/link'
import React, { memo } from 'react'

const Pagination = ({ currentPage, uri, pages, isSearch = false }) => {
  const isLastPage = currentPage === getLast(pages)
  const url = (page) =>
    isSearch
      ? `${
          !isFirstPage(page)
            ? uri.replace('_page_', `page/${page}/`)
            : uri.replace('_page_', '')
        }`
      : `${uri}${!isFirstPage(page) ? `page/${page}/` : ''}`

  return (
    <div className="pagination">
      {!isFirstPage(currentPage) && (
        <Link className="pagination-item" href={url(prev(currentPage))}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 md:w-6 h-3 md:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </Link>
      )}
      {pages.map((page, i) => {
        if (page == '...') {
          return (
            <span key={i} className="pagination-more">
              {page}
            </span>
          )
        } else if (currentPage === page) {
          return (
            <span key={i} className="current-page">
              {page}
            </span>
          )
        } else {
          return (
            <Link className="pagination-item" href={url(page)} key={i}>
              {page}
            </Link>
          )
        }
      })}

      {!isLastPage && (
        <Link className="pagination-item" href={url(next(currentPage))}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 md:w-6 h-3 md:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      )}
    </div>
  )
}

export default memo(Pagination)