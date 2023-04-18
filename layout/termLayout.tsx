import Head from 'next/head'
import Layout from '@layout/layout'

import { CMS_NAME } from '@lib/constants'

import dynamic from 'next/dynamic'
import Pagination from '@components/pagination'
import { getFirst, getLast, next, prev } from '@utils/manipulateArray'
import ArchiveTitle from '@components/archive-title'
const MoreStories = dynamic(() => import('@components/more-stories'), {
  ssr: false,
})

const TermLayout = ({ term, currentPage }) => {
  const PER_PAGE = 10
  const PAGE_BREAK = 3
  const totalPages = Math.ceil(term.count / PER_PAGE)

  const first = []
  const middle = []
  const last = []

  for (let index = 1; index <= Math.min(PAGE_BREAK, totalPages); index++) {
    first.push(index)
  }
  if (totalPages <= PER_PAGE && totalPages > PAGE_BREAK) {
    for (let index = PAGE_BREAK + 1; index <= totalPages; index++) {
      last.push(index)
    }
  } else if (totalPages > PER_PAGE) {
    middle.push('...')
    for (
      let index = totalPages - PAGE_BREAK + 1;
      index <= totalPages;
      index++
    ) {
      last.push(index)
    }
  }
  if (currentPage >= getLast(first) && currentPage <= getFirst(last)) {
    first.pop()
    last.shift()
    if (currentPage === 3 || currentPage === 4) middle.splice(0, 1)
    if (prev(currentPage) !== getLast(first)) middle.push(prev(currentPage))
    middle.push(currentPage)
    if (currentPage + 1 !== getFirst(last)) {
      middle.push(next(currentPage))
      middle.push('...')
    }
  }
  const pages = [...first, ...middle, ...last]

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
