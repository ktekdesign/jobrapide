import React, { FC, memo } from 'react'

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

interface PaginationProps {
  secteur?: number
  region?: number
  category?: number
  tag?: number
  pages?: string[]
  href?: string
  currentPage?: number
  search?: string
}

const Pagination: FC<PaginationProps> = ({
  secteur,
  region,
  category,
  tag,
  href,
  currentPage,
  search,
}) => {
  const { pages, url } = usePagination({
    secteur,
    region,
    category,
    tag,
    href,
    currentPage,
    search,
  })

  return (
    <div className="pagination">
      <SeoLink
        as="span"
        title="Page précédente"
        data-hidden={isFirstPage(currentPage)}
        className="pagination-item"
        href={url(prev(currentPage))}
      >
        <ArrowLeft className="icon" />
      </SeoLink>
      {pages?.map((page, key) => (
        <SeoLink
          as="span"
          title={`Page ${page}`}
          data-current={currentPage === parseInt(page)}
          data-page={page}
          className="pagination-item"
          active={Number(page === '...' || currentPage === parseInt(page))}
          href={url(page)}
          key={key}
        >
          {page}
        </SeoLink>
      ))}
      <SeoLink
        title="Page suivante"
        as="span"
        data-hidden={isCurrentPage(currentPage, getLast(pages))}
        className="pagination-item"
        href={url(next(currentPage))}
      >
        <ArrowRight className="icon" />
      </SeoLink>
    </div>
  )
}

export default memo(Pagination)
