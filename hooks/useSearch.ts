import getSearchQuery from '@graphql/api/getSearchQuery'
import { gql, useQuery } from '@apollo/client'
import { mapPost } from '@utils/mapping'

const useSearch = ({ currentPage, search, category, secteur, region }) => {
  const QUERY = gql`
    ${getSearchQuery({ currentPage, search, category, secteur, region })}
  `

  const { data } = useQuery(QUERY)
  const posts = data?.posts?.nodes?.map((post) => mapPost(post))

  const href = `/search/_page_?s=${search}&category=${category}&secteur=${secteur}&region=${region}`
  return { posts, href }
}

export default useSearch
