import Pub from '@components/pub'
import { memo, useMemo } from 'react'
import { useQuery, gql } from '@apollo/client'
import Loading from '@components/loading'
import { sidebarHeaderQuery } from '@graphql/sidebarHeaderQuery'
import { mapPost } from '@utils/mapping'

const SidebarHeader = () => {
  const QUERY = gql`
    ${sidebarHeaderQuery}
  `
  const { data, loading } = useQuery(QUERY)

  const posts = useMemo(
    () => data?.posts?.nodes?.map((pub) => mapPost(pub)),
    [data]
  )

  return (
    <Loading data={{ posts }} loading={loading}>
      <Pub className="pub-in-header" />
    </Loading>
  )
}
export default memo(SidebarHeader)
