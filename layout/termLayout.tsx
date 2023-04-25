import { memo, useMemo } from 'react'

import Pagination from '@components/pagination'
import ArchiveTitle from '@components/archive-title'
import Breadcrumb from '@components/breadcrumb'
import ArchiveBody from '@components/archive-body'
import Loading from '@components/loading'
import getPagination from '@utils/getPagination'
import { isEmpty } from '@utils/manipulateArray'

const TermLayout = ({ name, posts, uri, currentPage, count, breadcrumbs }) => {
  const pages = useMemo(
    () => getPagination(count, currentPage),
    [count, currentPage]
  )

  return (
    <>
      <ArchiveTitle currentPage={currentPage}>{name}</ArchiveTitle>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <Loading data={{ posts }} loading={isEmpty(posts)}>
        <ArchiveBody />
      </Loading>
      <Pagination pages={pages} uri={uri} currentPage={currentPage} />
    </>
  )
}

export default memo(TermLayout)
