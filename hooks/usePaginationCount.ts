import { gql, useLazyQuery } from '@apollo/client'
import { getQuery } from '@graphql/countQuery'
import { useDeferredValue, useEffect, useState, useTransition } from 'react'

const usePaginationCount = ({ secteur, region, category, tag, search }) => {
  const query = gql`
    ${getQuery({ secteur, region, category, tag, search })}
  `
  const [getCount] = useLazyQuery(query)
  const [count, setCount] = useState(0)
  const deferredCount = useDeferredValue(count)
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    startTransition(() => {
      getCount().then((response) =>
        setCount(
          Number(response?.data?.posts?.pageInfo?.offsetPagination?.total)
        )
      )
    })
  }, [getCount, secteur, region, category, tag, search])

  return [deferredCount, isPending]
}

export default usePaginationCount
