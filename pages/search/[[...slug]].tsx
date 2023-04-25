import Pagination from '@components/pagination'
import ArchiveTitle from '@components/archive-title'
import { getSearchQuery } from '@graphql/api'
import getPagination from '@utils/getPagination'
import addLayoutData from '@utils/addLayoutData'
import ArchiveBody from '@components/archive-body'
import { useQuery, gql } from '@apollo/client'
import { mapPost } from '@utils/mapping'
import Loading from '@components/loading'
import Breadcrumb from '@components/breadcrumb'

export const getServerSideProps = async ({ query, params, res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=7200, stale-while-revalidate=7259'
  )
  const { s, category, secteur, region } = query
  const currentPage = parseInt(params?.slug?.pop()) || 1

  const layout = addLayoutData({
    currentPage,
    search: s,
    category,
    secteur,
    region,
  })
  return layout
}

const Search = ({
  currentPage,
  search,
  category,
  secteur,
  region,
  breadcrumbs,
}) => {
  const QUERY = gql`
    ${getSearchQuery({ currentPage, search, category, secteur, region })}
  `

  const { data, loading, error } = useQuery(QUERY)
  const posts = data?.posts?.nodes?.map((post) => mapPost(post))
  const pages = getPagination(
    data?.posts?.pageInfo?.offsetPagination?.total,
    currentPage
  )
  const uri = `/search/_page_?s=${search}&category=${category}&secteur=${secteur}&region=${region}`

  return (
    <Loading
      data={{ posts, pages, currentPage, search, uri }}
      loading={loading}
      error={error}
    >
      <ArchiveTitle>{`Recherche pour ${search}`}</ArchiveTitle>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <ArchiveBody />
      <Pagination isSearch />
    </Loading>
  )
}
export default Search
