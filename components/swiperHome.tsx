import { memo } from 'react'
import dynamic from 'next/dynamic'
const PostPreview = dynamic(() => import('@components/post-preview'))
const SwiperController = dynamic(() => import('@components/swiper-controller'))

const SwiperHome = ({ posts = null, slides = 3, ...props }) => (
  <SwiperController posts={posts} slides={slides}>
    <PostPreview {...props} />
  </SwiperController>
)

export default memo(SwiperHome)
