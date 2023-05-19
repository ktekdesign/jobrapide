import { gql, useLazyQuery } from '@apollo/client'
import { similarQuery } from '@graphql/similarQuery'
import { mapPost } from '@utils/mapping'
import { useEffect, useState } from 'react'

const useSimilarPosts = ({ id, categoryId }) => {
  const QUERY = gql`
    ${similarQuery.replace('$id', id).replace('$categoryId', categoryId)}
  `

  const [getPosts] = useLazyQuery(QUERY)
  const [posts, setPosts] = useState(null)
  useEffect(() => {
    getPosts().then(({ data }) =>
      setPosts(data?.posts?.nodes?.map((post) => mapPost(post)))
    )
  }, [getPosts])

  return posts
}

export default useSimilarPosts
