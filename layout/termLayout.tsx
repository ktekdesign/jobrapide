import Layout from '@layout/layout'

import dynamic from 'next/dynamic'
import Pagination from '@components/pagination'
import ArchiveTitle from '@components/archive-title'
import { isEmpty } from '@utils/manipulateArray'
import Loading from '@components/loading'
const MoreStories = dynamic(() => import('@components/more-stories'), {
  ssr: false,
})

const TermLayout = ({ term, currentPage }) => {
  if (isEmpty(term) || isEmpty(currentPage)) return <Loading />

  return (
    <Layout seo={term.seo}>
      <ArchiveTitle currentPage={currentPage}>{term.name}</ArchiveTitle>
      <MoreStories posts={term.posts} />
      <Pagination count={term.count} uri={term.uri} currentPage={currentPage} />
    </Layout>
  )
}

export default TermLayout
