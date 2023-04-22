import { getSearchProps } from '@utils/getSearchProps'
import MoreStories from '@components/more-stories'
import Pagination from '@components/pagination'
import Layout from '@layout/layout'
import ArchiveTitle from '@components/archive-title'

export const getServerSideProps = async ({ query, params, res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate=3659'
  )
  const layout = await getSearchProps(query, params)
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
