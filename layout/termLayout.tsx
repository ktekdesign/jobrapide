import Pagination from '@components/pagination'
import ArchiveTitle from '@components/archive-title'
import Breadcrumb from '@components/breadcrumb'
import ArchiveBody from '@components/archive-body'
import Loading from '@components/loading'
import { Suspense, memo } from 'react'

const TermLayout = ({
  title,
  posts,
  uri,
  currentPage,
  breadcrumbs,
  secteur,
  region,
  category,
  tag,
}) => (
  <Suspense>
    <Loading data={{ posts, currentPage, title, breadcrumbs }} loading={!posts}>
      <ArchiveTitle />
      <Breadcrumb />
      <ArchiveBody />
    </Loading>
    <Pagination {...{ secteur, region, category, tag, uri, currentPage }} />
  </Suspense>
)

export default memo(TermLayout)
