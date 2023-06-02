import getSearchQuery from '@graphql/api/getSearchQuery'
import { mapPost } from '@utils/mapping'
import useClientQuery from '@hooks/useClientQuery'

const useSearch = ({ currentPage, search, category, secteur, region }) => {
  const QUERY = `${getSearchQuery({
    currentPage,
    search,
    category,
    secteur,
    region,
  })}`

  const data = useClientQuery(QUERY)
  const posts = data?.posts?.nodes?.map((post) => mapPost(post))

  const href = `/search/_page_?s=${search}&category=${category}&secteur=${secteur}&region=${region}`
  return { posts, href }
}

export default useSearch
