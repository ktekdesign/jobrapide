import { getQuery } from '@graphql/countQuery'
import useClientQuery from '@hooks/useClientQuery'

const usePaginationCount = ({ secteur, region, category, tag, search }) => {
  const query = `${getQuery({ secteur, region, category, tag, search })}`
  const data = useClientQuery(query)

  return data?.posts?.pageInfo?.offsetPagination?.total
}

export default usePaginationCount
