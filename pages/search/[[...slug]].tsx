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
import { useMemo } from 'react'

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
  const count = data?.posts?.pageInfo?.offsetPagination?.total

  const pages = useMemo(
    () => getPagination(count, currentPage),
    [count, currentPage]
  )

  const uri = `/search/_page_?s=${search}&category=${category}&secteur=${secteur}&region=${region}`

  return (
    <Loading
      data={{
        posts,
        pages,
        currentPage,
        breadcrumbs,
        search,
        uri,
        title: `Recherche pour ${search}`,
      }}
      loading={loading}
      error={error}
    >
      <ArchiveTitle />
      <Breadcrumb />
      <ArchiveBody />
      <Pagination />
    </Loading>
  )
}
export default Search
