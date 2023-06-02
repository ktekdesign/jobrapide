import { gql, useQuery } from '@apollo/client'
import client from '@graphql/client'

const useClientQuery = (query) => {
  const { data } = useQuery(
    gql`
      ${query}
    `,
    {
      client,
      fetchPolicy: 'cache-first', // Used for first execution
      nextFetchPolicy: 'cache-only', // Used for subsequent executions
    }
  )

  return data
}

export default useClientQuery
