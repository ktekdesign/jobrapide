import SeoLink from '@components/seoLink'
import { memo } from 'react'

const PaginationItem = ({ page = '1', current = 1, url = null }) => (
  <SeoLink
    as="span"
    title={`Page ${page}`}
    data-current={current === parseInt(page)}
    data-page={page}
    className="pagination-item"
    active={Number(page === '...' || current === parseInt(page))}
    href={url(page)}
  >
    {page}
  </SeoLink>
)

export default memo(PaginationItem)
