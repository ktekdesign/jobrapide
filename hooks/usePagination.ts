import { getTermPostsCount } from '@graphql/api'
import getPagination from '@utils/getPagination'
import { useEffect, useMemo, useState } from 'react'

const usePagination = ({
  secteur,
  region,
  category,
  tag,
  currentPage,
  search,
}) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!secteur && !region && !category && !tag && !search) return
    getTermPostsCount({ secteur, region, category, tag, search }).then(
      (response) => setCount(response)
    )
  }, [secteur, region, category, tag, search])

  const pages = useMemo(
    () => getPagination(count, currentPage),
    [count, currentPage]
  )
  return pages
}

export default usePagination
