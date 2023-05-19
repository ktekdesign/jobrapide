import { memo } from 'react'

import SwiperContainer from './swiperContainer'
import SwiperTitle from './swiperTitle'
import SwiperHome from './swiperHome'

const SimilarPosts = ({ posts }) => (
  <SwiperContainer posts={posts} title="Publications similaires">
    <SwiperTitle className="title-secondary" />
    <SwiperHome />
  </SwiperContainer>
)

export default memo(SimilarPosts)
