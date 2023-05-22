import { memo } from 'react'

import SwiperContainer from './swiperContainer'
import SwiperTitle from './swiperTitle'
import SwiperHome from './swiperHome'
import useSimilarPosts from '@hooks/useSimilarPosts'

const SimilarPosts = ({ id, categoryId }) => {
  const posts = useSimilarPosts({
    id,
    categoryId,
  })
  return (
    <SwiperContainer posts={posts} title="Publications similaires">
      <SwiperTitle className="title-secondary" />
      <SwiperHome />
    </SwiperContainer>
  )
}

export default memo(SimilarPosts)
