import { memo, useMemo } from 'react'

import { gql, useQuery } from '@apollo/client'
import { similarQuery } from '@graphql/similarQuery'
import { mapPost } from '@utils/mapping'
import SwiperContainer from './swiperContainer'
import SwiperTitle from './swiperTitle'
import SwiperHome from './swiperHome'

const SimilarPosts = ({ id, categoryId }) => {
  const QUERY = gql`
    ${similarQuery.replace('$id', id).replace('$categoryId', categoryId)}
  `

  const { data } = useQuery(QUERY)
  const posts = useMemo(
    () => data?.posts?.nodes?.map((post) => mapPost(post)),
    [data]
  )

  return (
    <SwiperContainer posts={posts} title="Publications similaires">
      <SwiperTitle className="title-secondary" />
      <SwiperHome />
    </SwiperContainer>
  )
}

export default memo(SimilarPosts)
