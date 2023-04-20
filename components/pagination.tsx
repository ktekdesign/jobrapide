import React, { memo } from 'react'
import Link from 'next/link'

import ArrowLeft from '/public/images/left.svg'
import ArrowRight from '/public/images/right.svg'

import { getLast, isFirstPage, next, prev } from '@utils/manipulateArray'

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
      <Link
        className={`pagination-item ${
          isFirstPage(currentPage) ? 'hidden' : ''
        }`}
        href={url(prev(currentPage))}
      >
        <ArrowLeft className="icon" />
      </Link>
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
      <Link
        className={`pagination-item ${isLastPage ? 'hidden' : ''}`}
        href={url(next(currentPage))}
      >
        <ArrowRight className="icon" />
      </Link>
    </div>
  )
}

export default memo(Pagination)
