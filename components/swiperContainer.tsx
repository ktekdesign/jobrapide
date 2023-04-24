import React, { memo } from 'react'

import Loading from '@components/loading'
import SwiperHome from '@components/swiperHome'
import { useQuery, gql } from '@apollo/client'
import getHomeSliderQuery from '@graphql/homeQueries'
import { getPostsHome } from '@graphql/api'

export const SwiperContainer = ({
  id,
  slides = 3,
  className = '',
  postsPerPage = 10,
}) => {
  const QUERY = gql`
    ${getHomeSliderQuery(id, postsPerPage)}
  `

  const { data, loading, error } = useQuery(QUERY)

  if (loading) return <Loading />
  if (error) return <></>

  const term = getPostsHome(data)

  return (
    <SwiperHome
      {...{
        items: term.posts,
        uri: term.uri,
        name: term.name,
        slides,
        className,
      }}
    />
  )
}

export default memo(SwiperContainer)
