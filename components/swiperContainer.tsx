import React, { FC, memo } from 'react'

import Loading from '@components/loading'
import SwiperHome from '@components/swiperHome'
import { useQuery, gql } from '@apollo/client'
import { getPostsHome } from '@graphql/api'
import SwiperTitle from './swiperTitle'

export const SwiperContainer: FC<{
  query: string
  slides?: number
  className?: string
}> = ({ query, slides = 3, className }) => {
  const QUERY = gql`
    ${query}
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
