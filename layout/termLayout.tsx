import { memo, useMemo } from 'react'

import Pagination from '@components/pagination'
import ArchiveTitle from '@components/archive-title'
import Breadcrumb from '@components/breadcrumb'
import ArchiveBody from '@components/archive-body'
import Loading from '@components/loading'
import getPagination from '@utils/getPagination'

const TermLayout = ({ term, currentPage, count, breadcrumbs }) => {
  const pages = useMemo(
    () => getPagination(count, currentPage),
    [count, currentPage]
  )

  return (
    <>
      <ArchiveTitle currentPage={currentPage}>{term?.name}</ArchiveTitle>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <Loading data={{ posts: term?.posts }} loading={!term?.posts.length}>
        <ArchiveBody />
      </Loading>
      <Pagination pages={pages} uri={term?.uri} currentPage={currentPage} />
    </>
  )
}

export default memo(TermLayout)
