import React, { memo } from 'react'

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

const Pagination = ({
  pages,
  uri,
  currentPage,
  isSearch = false,
}: {
  pages?: string[]
  uri?: string
  currentPage?: number
  isSearch?: boolean
}) => {
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
        if (page == '...') {
          return (
            <span key={i} className="pagination-more">
              {page}
            </span>
          )
        } else if (currentPage === parseInt(page)) {
          return (
            <span key={i} className="current-page">
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
