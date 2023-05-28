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
import MappedComponent from './loaders/mapped-component'
import PaginationItem from './pagination-item'

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
      <MappedComponent items={pages} url={url}>
        <PaginationItem />
      </MappedComponent>
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
