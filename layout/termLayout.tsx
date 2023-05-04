import { memo } from 'react'

import Pagination from '@components/pagination'
import ArchiveTitle from '@components/archive-title'
import Breadcrumb from '@components/breadcrumb'
import ArchiveBody from '@components/archive-body'
import Loading from '@components/loading'
import { isEmpty } from '@utils/manipulateArray'
import usePagination from '@hooks/usePagination'

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
}) => {
  const pages = usePagination({ secteur, region, category, tag, currentPage })

  return (
    <>
      <Loading
        data={{ posts, currentPage, title, breadcrumbs, pages, uri }}
        loading={isEmpty(posts)}
      >
        <ArchiveTitle />
        <Breadcrumb />
        <ArchiveBody />
      </Loading>
      <Loading data={{ pages, uri, currentPage }} loading={isEmpty(pages)}>
        <Pagination />
      </Loading>
    </>
  )
}

export default memo(TermLayout)
