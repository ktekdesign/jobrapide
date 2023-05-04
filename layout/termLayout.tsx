import { memo, useEffect, useMemo, useState } from 'react'

import Pagination from '@components/pagination'
import ArchiveTitle from '@components/archive-title'
import Breadcrumb from '@components/breadcrumb'
import ArchiveBody from '@components/archive-body'
import Loading from '@components/loading'
import getPagination from '@utils/getPagination'
import { isEmpty } from '@utils/manipulateArray'
import { getTermPostsCount } from '@graphql/api'

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
  const [pages, setPages] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    getTermPostsCount({ secteur, region, category, tag }).then((response) =>
      setCount(response)
    )
  }, [secteur, region, category, tag])

  useMemo(
    () => setPages(getPagination(count, currentPage)),
    [count, currentPage]
  )

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
