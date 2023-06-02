import { similarQuery } from '@graphql/similarQuery'
import { mapPost } from '@utils/mapping'
import useClientQuery from '@hooks/useClientQuery'

const useSimilarPosts = ({ id, categoryId }) => {
  const QUERY = `${similarQuery
    .replace('$id', id)
    .replace('$categoryId', categoryId)}`

  const data = useClientQuery(QUERY)

  return data?.posts?.nodes?.map((post) => mapPost(post))
}

export default useSimilarPosts
