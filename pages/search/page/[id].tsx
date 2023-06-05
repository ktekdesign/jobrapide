import addLayoutData from '@utils/addLayoutData'
import useSearch from '@hooks/useSearch'
import TermLayout from '@layout/termLayout'

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
  const { posts, href } = useSearch({
    currentPage,
    search,
    category,
    secteur,
    region,
  })

  return (
    <TermLayout
      {...{
        posts,
        currentPage,
        breadcrumbs,
        search,
        category,
        secteur,
        region,
        href,
        title: `Recherche pour ${search} / Page ${currentPage}`,
      }}
    />
  )
}
export default Search
