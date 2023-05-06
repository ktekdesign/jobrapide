import { getSearchQuery } from '@graphql/api'
import { useQuery, gql } from '@apollo/client'
import { mapPost } from '@utils/mapping'
import { useMemo } from 'react'

const useSearch = ({ currentPage, search, category, secteur, region }) => {
  const QUERY = gql`
    ${getSearchQuery({ currentPage, search, category, secteur, region })}
  `

  const { data, loading, error } = useQuery(QUERY)
  const posts = useMemo(
    () => data?.posts?.nodes?.map((post) => mapPost(post)),
    [data]
  )

  const uri = `/search/_page_?s=${search}&category=${category}&secteur=${secteur}&region=${region}`
  return { posts, loading, error, uri }
}

export default useSearch
