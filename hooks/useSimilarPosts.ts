import { gql, useQuery } from '@apollo/client'
import { similarQuery } from '@graphql/similarQuery'
import { mapPost } from '@utils/mapping'

const useSimilarPosts = ({ id, categoryId }) => {
  const QUERY = gql`
    ${similarQuery.replace('$id', id).replace('$categoryId', categoryId)}
  `

  const { data } = useQuery(QUERY)

  return data?.posts?.nodes?.map((post) => mapPost(post))
}

export default useSimilarPosts
