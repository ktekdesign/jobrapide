import { memo, useMemo } from 'react'

import Pagination from '@components/pagination'
import ArchiveTitle from '@components/archive-title'
import Breadcrumb from '@components/breadcrumb'
import ArchiveBody from '@components/archive-body'
import Loading from '@components/loading'
import getPagination from '@utils/getPagination'
import { isEmpty } from '@utils/manipulateArray'

const TermLayout = ({ title, posts, uri, currentPage, count, breadcrumbs }) => {
  const pages = useMemo(
    () => getPagination(count, currentPage),
    [count, currentPage]
  )

  return (
    <Loading
      data={{ posts, currentPage, title, breadcrumbs, pages, uri }}
      loading={isEmpty(posts)}
    >
      <ArchiveTitle />
      <Breadcrumb />
      <ArchiveBody />
      <Pagination />
    </Loading>
  )
}

export default memo(TermLayout)
