import Pub from '@components/pub'
import { memo } from 'react'
import { useQuery, gql } from '@apollo/client'
import Loading from '@components/loading'
import { sidebarHeaderQuery } from '@graphql/sidebarHeaderQuery'
import { mapPost } from '@utils/mapping'

const SidebarHeader = () => {
  const QUERY = gql`
    ${sidebarHeaderQuery}
  `

  const { data, loading, error } = useQuery(QUERY)
  const posts = data?.posts?.nodes?.map((pub) => mapPost(pub))

  return (
    <Loading data={{ posts }} loading={loading} error={error}>
      <Pub className="pub-in-header" />
    </Loading>
  )
}
export default memo(SidebarHeader)
