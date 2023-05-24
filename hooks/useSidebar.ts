import { gql, useQuery } from '@apollo/client'
import { sidebarQuery } from '@graphql/sidebarQuery'
import { filterSidebar } from '@utils/filterSidebar'
import { useEffect, useState } from 'react'

const useSidebar = () => {
  const [sidebar, setSidebar] = useState(null)
  const GET_SIDEBAR = gql`
    ${sidebarQuery}
  `
  const { data } = useQuery(GET_SIDEBAR)

  useEffect(() => {
    const largeScreen = document.body.clientWidth >= 1024
    setSidebar(filterSidebar(data, largeScreen))
  }, [data])

  return sidebar || {}
}

export default useSidebar
