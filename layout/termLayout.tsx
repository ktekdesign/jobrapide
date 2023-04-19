import Head from 'next/head'
import Layout from '@layout/layout'

import { CMS_NAME } from '@lib/constants'

import dynamic from 'next/dynamic'
import Pagination from '@components/pagination'
import ArchiveTitle from '@components/archive-title'
import getPagination from '@utils/getPagination'
const MoreStories = dynamic(() => import('@components/more-stories'), {
  ssr: false,
})

const TermLayout = ({ term, currentPage }) => {
  const pages = getPagination(term.count, currentPage)

  return (
    <Layout>
      <Head>
        <title>{`${term.name} | ${CMS_NAME}`}</title>
        <meta property="og:image" content={term?.posts[0]?.image} />
      </Head>

      <ArchiveTitle currentPage={currentPage}>{term.name}</ArchiveTitle>
      <MoreStories posts={term?.posts} />
      <Pagination uri={term.uri} currentPage={currentPage} pages={pages} />
    </Layout>
  )
}

export default TermLayout
