import { memo } from 'react'

import SwiperHome from './swiperHome'
import useSimilarPosts from '@hooks/useSimilarPosts'
import StringComponent from './loaders/string-component'

const SimilarPosts = ({ id, categoryId }) => {
  const posts = useSimilarPosts({
    id,
    categoryId,
  })
  return (
    <StringComponent cond={!!posts}>
      <h3 className="title-secondary">Publications similaires</h3>
      <SwiperHome posts={posts} />
    </StringComponent>
  )
}

export default memo(SimilarPosts)
