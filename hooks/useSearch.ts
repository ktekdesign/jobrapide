import { getSearchQuery } from '@graphql/api'
import { gql, useLazyQuery } from '@apollo/client'
import { mapPost } from '@utils/mapping'
import { useEffect, useState } from 'react'

const useSearch = ({ currentPage, search, category, secteur, region }) => {
  const QUERY = gql`
    ${getSearchQuery({ currentPage, search, category, secteur, region })}
  `

  const [getPosts] = useLazyQuery(QUERY)
  const [posts, setPosts] = useState(null)
  useEffect(() => {
    getPosts().then(({ data }) =>
      setPosts(data.posts?.nodes?.map((post) => mapPost(post)))
    )
  }, [getPosts])

  const href = `/search/_page_?s=${search}&category=${category}&secteur=${secteur}&region=${region}`
  return { posts, href }
}

export default useSearch
