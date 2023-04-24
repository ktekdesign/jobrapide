import { memo } from 'react'

import Pagination from '@components/pagination'
import ArchiveTitle from '@components/archive-title'
import Breadcrumb from '@components/breadcrumb'
import ArchiveBody from '@components/archive-body'

const TermLayout = ({ term, currentPage, pages, breadcrumbs }) => (
  <>
    <ArchiveTitle currentPage={currentPage}>{term?.name}</ArchiveTitle>
    <Breadcrumb breadcrumbs={breadcrumbs} />
    <ArchiveBody posts={term?.posts} />
    <Pagination pages={pages} uri={term?.uri} currentPage={currentPage} />
  </>
)

export default memo(TermLayout)
