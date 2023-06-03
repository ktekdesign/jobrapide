import Pagination from '@components/pagination'
import ArchiveTitle from '@components/archive-title'
import Breadcrumb from '@components/breadcrumb'
import ArchiveBody from '@components/archive-body'
import { memo } from 'react'
import Loading from '@components/loaders/loading'
import Row from '@layout/row'

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
    <Row>
      <Pagination {...{ secteur, region, category, tag, href, currentPage }} />
    </Row>
  </>
)

export default memo(TermLayout)
