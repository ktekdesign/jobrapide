import React, { FC, memo } from 'react'

import Loading from '@components/loading'
import SwiperHome from '@components/swiperHome'
import { useQuery, gql } from '@apollo/client'
import getHomeSliderQuery from '@graphql/homeQueries'
import { getPostsHome } from '@graphql/api'
import SwiperTitle from './swiperTitle'

export const SwiperContainer: FC<{
  id: number
  slides?: number
  className?: string
  postsPerPage?: number
}> = ({ id, slides = 3, className, postsPerPage = 10 }) => {
  const QUERY = gql`
    ${getHomeSliderQuery(id, postsPerPage)}
  `

  const { data, loading, error } = useQuery(QUERY)

  const term = getPostsHome(data)

  return (
    <Loading loading={loading} error={error}>
      <SwiperTitle uri={term?.uri} name={term?.name} className={className} />
      <SwiperHome
        {...{
          items: term?.posts,
          slides,
          className,
        }}
      />
    </Loading>
  )
}

export default memo(SwiperContainer)
