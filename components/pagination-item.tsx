import SeoLink from '@components/seoLink'
import { memo } from 'react'

const PaginationItem = ({ page = '1', currentPage = 1, url = null }) => (
  <SeoLink
    as="span"
    title={`Page ${page}`}
    data-current={currentPage === parseInt(page)}
    data-page={page}
    className="pagination-item"
    active={Number(page === '...' || currentPage === parseInt(page))}
    href={url(page)}
  >
    {page}
  </SeoLink>
)

export default memo(PaginationItem)
