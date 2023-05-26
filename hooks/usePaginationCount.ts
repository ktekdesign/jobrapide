import { gql, useQuery } from '@apollo/client'
import { getQuery } from '@graphql/countQuery'

const usePaginationCount = ({ secteur, region, category, tag, search }) => {
  const query = gql`
    ${getQuery({ secteur, region, category, tag, search })}
  `
  const { data } = useQuery(query)

  return data?.posts?.pageInfo?.offsetPagination?.total
}

export default usePaginationCount
