import SeoLink from '@components/seoLink'
import { memo } from 'react'

const PaginationItem = ({ page = 1, current = 1, url = null }) => (
  <SeoLink
    as="span"
    title={`Page ${page}`}
    data-current={current === page}
    data-page={page}
    className={page ? 'pagination-item' : ''}
    active={Number(current === page)}
    href={url(page)}
  >
    {page || '...'}
  </SeoLink>
)

export default memo(PaginationItem)
