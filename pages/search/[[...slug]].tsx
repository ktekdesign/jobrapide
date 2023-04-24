import MoreStories from '@components/more-stories'
import Pagination from '@components/pagination'
import Layout from '@layout/layout'
import ArchiveTitle from '@components/archive-title'
import { initializeApollo } from '@graphql/client'
import { performSearch } from '@graphql/api'
import getPagination from '@utils/getPagination'
import addLayoutData from '@utils/addLayoutData'

export const getServerSideProps = async ({ query, params, res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate=3659'
  )
  const client = initializeApollo()
  const { s, category, secteur, region } = query
  const currentPage = parseInt(params?.slug?.pop()) || 1
  const { posts, count } = await performSearch({
    search: s,
    category,
    secteur,
    region,
    page: currentPage,
    isSearch: true,
    client,
  })

  const pages = getPagination(count, currentPage)
  const uri = `/search/_page_?s=${query.s}&category=${query.category}&secteur=${query.secteur}&region=${query.region}`
  const layout = await addLayoutData(
    {
      posts,
      pages,
      currentPage,
      uri,
      search: query.s,
      isSearch: true,
    },
    client
  )
  return layout
}

const Search = ({ posts, pages, currentPage, uri, search, layout }) => (
  <Layout {...layout}>
    <ArchiveTitle
      currentPage={currentPage}
    >{`Recherche pour ${search}`}</ArchiveTitle>
    <MoreStories posts={posts} />
    <Pagination currentPage={currentPage} uri={uri} pages={pages} isSearch />
  </Layout>
)

export default Search
