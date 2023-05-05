import { memo } from 'react'

import Pagination from '@components/pagination'
import ArchiveTitle from '@components/archive-title'
import Breadcrumb from '@components/breadcrumb'
import ArchiveBody from '@components/archive-body'
import Loading from '@components/loading'
import { isEmpty } from '@utils/manipulateArray'

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
  return (
    <>
      <Loading
        data={{ posts, currentPage, title, breadcrumbs }}
        loading={isEmpty(posts)}
      >
        <ArchiveTitle />
        <Breadcrumb />
        <ArchiveBody />
      </Loading>
      <Pagination {...{ secteur, region, category, tag, uri, currentPage }} />
    </>
  )
}

export default memo(TermLayout)
