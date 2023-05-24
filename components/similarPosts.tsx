import { memo } from 'react'

import SwiperHome from './swiperHome'
import useSimilarPosts from '@hooks/useSimilarPosts'

const SimilarPosts = ({ id, categoryId }) => {
  const posts = useSimilarPosts({
    id,
    categoryId,
  })
  return (
    <>
      <h3 className="title-secondary">Publications similaires</h3>
      <SwiperHome posts={posts} />
    </>
  )
}

export default memo(SimilarPosts)
