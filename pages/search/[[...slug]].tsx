import { getSearchProps } from '@utils/getSearchProps'
import Head from 'next/head'
import MoreStories from '@components/more-stories'
import Pagination from '@components/pagination'
import Layout from '@layout/layout'
import { CMS_NAME } from '@lib/constants'
import ArchiveTitle from '@components/archive-title'
import getPagination from '@utils/getPagination'
import { getFirst } from '@utils/manipulateArray'

export const getServerSideProps = async ({ query, params, res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate=3659'
  )
  const data = await getSearchProps(query, params)
  const uri = `/search/_page_?s=${query.s}&category=${query.category}&secteur=${query.secteur}&region=${query.region}`
  return { props: { ...data, uri, search: query.s } }
}

const Search = ({ posts, count, currentPage, uri, search }) => {
  const pages = getPagination(count, currentPage)

  return (
    <Layout>
      <Head>
        <title>{`Recherche pour ${search} | ${CMS_NAME}`}</title>
        <meta property="og:image" content={posts && getFirst(posts).image} />
      </Head>

      <ArchiveTitle>{`Recherche pour ${search}`}</ArchiveTitle>
      <MoreStories posts={posts} />
      <Pagination currentPage={currentPage} uri={uri} pages={pages} isSearch />
    </Layout>
  )
}

export default Search
