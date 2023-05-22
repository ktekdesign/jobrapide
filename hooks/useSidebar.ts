import { gql, useQuery } from '@apollo/client'
import { sidebarQuery } from '@graphql/sidebarQuery'
import { filterSidebar } from '@utils/filterSidebar'
import { useMemo } from 'react'

const useSidebar = () => {
  const GET_SIDEBAR = gql`
    ${sidebarQuery}
  `
  const { data } = useQuery(GET_SIDEBAR)

  const sidebar = useMemo(() => filterSidebar(data), [data])

  return sidebar
}

export default useSidebar
