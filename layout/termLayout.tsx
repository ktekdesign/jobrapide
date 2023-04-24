import { memo } from 'react'
import Layout from '@layout/layout'

import dynamic from 'next/dynamic'
import Pagination from '@components/pagination'
import ArchiveTitle from '@components/archive-title'
import Breadcrumb from '@components/breadcrumb'
import { isEmpty } from '@utils/manipulateArray'
import Loading from '@components/loading'
const MoreStories = dynamic(() => import('@components/more-stories'), {
  ssr: false,
})

const TermLayout = ({ term, currentPage, pages, layout }) => (
  <Layout {...layout}>
    {isEmpty(term) || isEmpty(pages) ? (
      <Loading />
    ) : (
      <>
        <ArchiveTitle currentPage={currentPage}>{term?.name}</ArchiveTitle>
        <Breadcrumb breadcrumbs={layout?.seo?.breadcrumbs} />
        <MoreStories posts={term?.posts} />
        <Pagination pages={pages} uri={term?.uri} currentPage={currentPage} />
      </>
    )}
  </Layout>
)

export default memo(TermLayout)
