import { gql, useLazyQuery } from '@apollo/client'
import { getQuery } from '@graphql/countQuery'
import { useEffect, useState } from 'react'

const usePagination = ({ secteur, region, category, tag, search }) => {
  const query = gql`
    ${getQuery({ secteur, region, category, tag, search })}
  `
  const [getCount] = useLazyQuery(query)
  const [count, setCount] = useState(0)

  useEffect(() => {
    getCount().then((response) =>
      setCount(Number(response?.data?.posts?.pageInfo?.offsetPagination?.total))
    )
  }, [getCount])

  return count
}

export default usePagination
