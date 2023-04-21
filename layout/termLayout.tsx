import Layout from '@layout/layout'

import dynamic from 'next/dynamic'
import Pagination from '@components/pagination'
import ArchiveTitle from '@components/archive-title'
import getPagination from '@utils/getPagination'
import { isEmpty } from '@utils/manipulateArray'
const MoreStories = dynamic(() => import('@components/more-stories'), {
  ssr: false,
})

const TermLayout = ({ term, currentPage }) => {
  if (isEmpty(term) || isEmpty(currentPage)) return <></>

  const pages = getPagination(term.count, currentPage)

  return (
    <Layout seo={term.seo}>
      <ArchiveTitle currentPage={currentPage}>{term.name}</ArchiveTitle>
      <MoreStories posts={term?.posts} />
      <Pagination uri={term.uri} currentPage={currentPage} pages={pages} />
    </Layout>
  )
}

export default TermLayout
