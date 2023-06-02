import { gql, useQuery } from '@apollo/client'
import client from '@graphql/client'

const useClientQuery = (query) => {
  const { data } = useQuery(
    gql`
      ${query}
    `,
    { client }
  )

  return data
}

export default useClientQuery
