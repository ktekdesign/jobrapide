import React, { FC, HTMLAttributes, ReactNode, memo } from 'react'

import Loading from '@components/loading'
import { useQuery, gql } from '@apollo/client'
import { getPostsHome } from '@graphql/api'

interface SwiperContainerProps extends HTMLAttributes<HTMLElement> {
  query?: string
  slides?: number
  children: ReactNode
}

export const SwiperContainer: FC<SwiperContainerProps> = ({
  children,
  query,
  slides = 3,
  ...props
}) => {
  const QUERY = gql`
    ${query}
  `

  const { data, loading, error } = useQuery(QUERY)

  const term = getPostsHome(data)

  return (
    <Loading
      data={{
        items: term?.posts,
        uri: term?.uri,
        name: term?.name,
        slides,
        ...props,
      }}
      loading={loading}
      error={error}
    >
      {children}
    </Loading>
  )
}

export default memo(SwiperContainer)
