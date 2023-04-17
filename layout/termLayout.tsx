import Head from 'next/head'
import Layout from '@layout/layout'

import { CMS_NAME } from '@lib/constants'

import dynamic from 'next/dynamic'
import Pagination from '@components/pagination'
import { getFirst, getLast, next, prev } from '@utils/manipulateArray'
const MoreStories = dynamic(() => import('@components/more-stories'), {
  ssr: false,
})

const TermLayout = ({ term, current }) => {
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
  if (current >= getLast(first) && current <= getFirst(last)) {
    first.pop()
    last.shift()
    if (current === 3 || current === 4) middle.splice(0, 1)
    if (prev(current) !== getLast(first)) middle.push(prev(current))
    middle.push(current)
    if (current + 1 !== getFirst(last)) {
      middle.push(next(current))
      middle.push('...')
    }
  }
  const pages = [...first, ...middle, ...last]

  return (
    <Layout>
      <Head>
        <title>{`${term.name} | ${CMS_NAME}`}</title>
        <meta
          property="og:image"
          content={
            term?.posts?.edges?.shift().node.featuredImage?.node.sourceUrl
          }
        />
      </Head>

      <h1 className="archive-main-title">{term.name}</h1>
      <MoreStories posts={term?.posts?.edges} />
      <Pagination uri={term.uri} currentPage={current} pages={pages} />
    </Layout>
  )
}

export default TermLayout
