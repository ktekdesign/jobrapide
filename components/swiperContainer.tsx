import React, { FC, memo } from 'react'

import Loading from '@components/loading'
import { useQuery, gql } from '@apollo/client'
import { getPostsHome } from '@graphql/api'
import ComponentsProps from '@utils/interfaces/components'

export const SwiperContainer: FC<ComponentsProps> = ({
  children,
  query,
  slides,
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
    <div className="row">
      <Loading data={loader} loading={loading} error={error}>
        {children}
      </Loading>
    </div>
  )
}

export default memo(SwiperContainer)
