import Pub from '@components/pub'
import { memo, useMemo } from 'react'
import { getSidebarData } from '@graphql/api'
import { useQuery, gql } from '@apollo/client'
import Loading from '@components/loading'
import SwiperSidebar from '@components/swiperSidebar'
import { sidebarQuery } from '@graphql/sidebarQuery'

const Sidebar = () => {
  const QUERY = gql`
    ${sidebarQuery}
  `

  const { data, loading } = useQuery(QUERY)
  const layoutData = useMemo(() => getSidebarData(data), [data])

  return (
    <>
      <Loading data={...layoutData} loading={loading} serial>
        <Pub />
        <SwiperSidebar title="Offres sponsorisées" />
        <SwiperSidebar
          onlyImage
          title="Partenaires"
          className="title-secondary"
        />
        <Pub />
      </Loading>
    </>
  )
}
export default memo(Sidebar)
