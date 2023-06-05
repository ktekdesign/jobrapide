import addLayoutData from '@utils/addLayoutData'
import useSearch from '@hooks/useSearch'
import TermLayout from '@layout/termLayout'

export const getServerSideProps = async ({ query }) => {
  const { s: search, category, secteur, region } = query

  const layout = addLayoutData({
    currentPage: 1,
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
        title: `Recherche pour ${search}`,
      }}
    />
  )
}
export default Search
