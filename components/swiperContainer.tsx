import React, { FC, memo } from 'react'

import Loading from '@components/loading'
import { useQuery, gql } from '@apollo/client'
import { getPostsHome } from '@graphql/api'
import ComponentsProps from '@utils/interfaces/components'

export const SwiperContainer: FC<ComponentsProps> = ({
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

  const loader = {
    posts: term?.posts,
    uri: term?.uri,
    title: term?.name,
    slides,
    ...props,
  }

  return (
    <Loading data={loader} loading={loading} error={error}>
      {children}
    </Loading>
  )
}

export default memo(SwiperContainer)
