import Pub from '@components/pub'
import { memo, useMemo, useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import Loading from '@components/loading'
import { sidebarHeaderQuery } from '@graphql/sidebarHeaderQuery'
import { mapPost } from '@utils/mapping'

const SidebarHeader = () => {
  const [posts, setPosts] = useState()
  const QUERY = gql`
    ${sidebarHeaderQuery}
  `
  const { data } = useQuery(QUERY)

  useMemo(() => {
    setPosts(data?.posts?.nodes?.map((pub) => mapPost(pub)))
  }, [data?.posts?.nodes])

  return (
    <Loading data={{ posts }} loading={!posts}>
      <Pub className="pub-in-header" />
    </Loading>
  )
}
export default memo(SidebarHeader)
