import { getTermPostsCount } from '@graphql/api'
import getPagination from '@utils/getPagination'
import { useMemo, useState } from 'react'

const usePagination = ({ secteur, region, category, tag, currentPage }) => {
  const [pages, setPages] = useState([])
  const [count, setCount] = useState(0)

  useMemo(() => {
    getTermPostsCount({ secteur, region, category, tag }).then((response) =>
      setCount(response)
    )
  }, [secteur, region, category, tag])

  useMemo(
    () => setPages(getPagination(count, currentPage)),
    [count, currentPage]
  )
  return pages
}

export default usePagination
