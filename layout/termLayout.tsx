import Pagination from '@components/pagination'
import ArchiveTitle from '@components/archive-title'
import Breadcrumb from '@components/breadcrumb'
import ArchiveBody from '@components/archive-body'
import { memo } from 'react'
import Loading from '@components/loaders/loading'

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
    <Loading data={{ title, breadcrumbs, posts }} loading={!posts}>
      <ArchiveTitle />
      <Breadcrumb />
      <ArchiveBody />
    </Loading>
    <Pagination {...{ secteur, region, category, tag, href, currentPage }} />
  </>
)

export default memo(TermLayout)
