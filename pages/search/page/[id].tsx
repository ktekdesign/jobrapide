import Pagination from '@components/pagination'
import ArchiveTitle from '@components/archive-title'
import addLayoutData from '@utils/addLayoutData'
import ArchiveBody from '@components/archive-body'
import Loading from '@components/loading'
import Breadcrumb from '@components/breadcrumb'
import useSearch from '@hooks/useSearch'

export const getServerSideProps = async ({ query, params }) => {
  const { s: search, category, secteur, region } = query
  const currentPage = parseInt(params?.id)

  const layout = addLayoutData({
    currentPage,
    search,
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
  const { posts, loading, error, uri } = useSearch({
    currentPage,
    search,
    category,
    secteur,
    region,
  })

  return (
    <>
      <Loading
        data={{
          posts,
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
      </Loading>
      <Pagination
        {...{ secteur, region, category, currentPage, search, uri }}
      />
    </>
  )
}
export default Search