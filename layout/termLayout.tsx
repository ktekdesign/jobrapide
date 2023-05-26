import Pagination from '@components/pagination'
import ArchiveTitle from '@components/archive-title'
import Breadcrumb from '@components/breadcrumb'
import ArchiveBody from '@components/archive-body'
import { memo } from 'react'

const TermLayout = ({
  title,
  posts,
  href,
  currentPage,
  breadcrumbs,
  secteur,
  region,
  category,
  tag,
}) => (
  <>
    <ArchiveTitle title={title} />
    <Breadcrumb breadcrumbs={breadcrumbs} />
    <ArchiveBody posts={posts} />
    <Pagination {...{ secteur, region, category, tag, href, currentPage }} />
  </>
)

export default memo(TermLayout)
