import React, { memo, useEffect, useState } from 'react'

import { getPostsHome } from '@graphql/api'
import { isEmpty } from '@utils/manipulateArray'

import Loading from '@components/loading'
import SwiperHome from '@components/swiperHome'

export const SwiperContainer = ({
  term,
  slides = 3,
  className = '',
  postsPerPage = 10,
}) => {
  const [current, setCurrent] = useState(null)

  useEffect(() => {
    if (isEmpty(current)) {
      getPostsHome({ term, postsPerPage }).then((data) => {
        setCurrent(data)
      })
    }
  }, [])

  if (isEmpty(current)) return <Loading />

  return (
    <SwiperHome
      {...{
        items: current?.posts,
        uri: current?.uri,
        name: current?.name,
        slides,
        className,
      }}
    />
  )
}

export default memo(SwiperContainer)
