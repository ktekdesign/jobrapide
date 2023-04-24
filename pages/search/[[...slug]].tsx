import Pagination from '@components/pagination'
import ArchiveTitle from '@components/archive-title'
import client from '@graphql/client'
import { performSearch } from '@graphql/api'
import getPagination from '@utils/getPagination'
import addLayoutData from '@utils/addLayoutData'
import ArchiveBody from '@components/archive-body'

export const getServerSideProps = async ({ query, params, res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate=3659'
  )
  const { s, category, secteur, region } = query
  const currentPage = parseInt(params?.slug?.pop()) || 1
  const { posts, count } = await performSearch({
    search: s,
    category,
    secteur,
    region,
    page: currentPage,
    client,
  })

  const pages = getPagination(count, currentPage)
  const uri = `/search/_page_?s=${query.s}&category=${query.category}&secteur=${query.secteur}&region=${query.region}`
  const layout = await addLayoutData({
    posts,
    pages,
    currentPage,
    uri,
    search: query.s,
  })
  return layout
}

const Search = ({ posts, pages, currentPage, uri, search }) => (
  <>
    <ArchiveTitle
      currentPage={currentPage}
    >{`Recherche pour ${search}`}</ArchiveTitle>
    {posts.length ? (
      <>
        <ArchiveBody posts={posts} />
        <Pagination
          currentPage={currentPage}
          uri={uri}
          pages={pages}
          isSearch
        />
      </>
    ) : (
      <p>Votre recherche n&apos;a retourné aucun résultat.</p>
    )}
  </>
)

export default Search
