import Pub from '@components/pub'
import { memo } from 'react'
import { getSidebarData } from '@graphql/api'
import { useQuery, gql } from '@apollo/client'
import Loading from '@components/loading'
import SwiperSidebar from '@components/swiperSidebar'
import { sidebarQuery } from '@graphql/sidebarQuery'

const Sidebar = () => {
  const QUERY = gql`
    ${sidebarQuery}
  `

  const { data, loading, error } = useQuery(QUERY)
  const layoutData = getSidebarData(data)

  return (
    <Loading data={...layoutData} loading={loading} error={error} serial>
      <Pub />
      <SwiperSidebar title="Offres sponsorisées" />
      <SwiperSidebar
        onlyImage
        title="Partenaires"
        className="title-secondary"
      />
      <Pub />
    </Loading>
  )
}
export default memo(Sidebar)
