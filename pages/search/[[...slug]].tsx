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
  const data = await getSearchProps(query, params)
  const uri = `/search/_page_?s=${query.s}&category=${query.category}&secteur=${query.secteur}&region=${query.region}`
  return { props: { ...data, uri, search: query.s } }
}

const Search = ({ posts, pages, currentPage, uri, search }) => {
  return (
    <Layout seo={null}>
      <ArchiveTitle
        currentPage={currentPage}
      >{`Recherche pour ${search}`}</ArchiveTitle>
      <MoreStories posts={posts} />
      <Pagination currentPage={currentPage} uri={uri} pages={pages} isSearch />
    </Layout>
  )
}

export default Search
