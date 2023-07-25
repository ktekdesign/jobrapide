import { memo } from 'react'
import dynamic from 'next/dynamic'
const PostPreview = dynamic(() => import('@components/post-preview'))
const SwiperController = dynamic(() => import('@components/swiper-controller'))

const SwiperHome = ({
  posts = null,
  slides = 3,
  onlyImage = false,
  priority = false,
  ...props
}) => (
  <SwiperController
    {...{ className: onlyImage ? 'onlyImage' : 'swiperContainer' }}
    posts={posts}
    slides={slides}
  >
    <PostPreview {...{ ...props, priority, onlyImage }} />
  </SwiperController>
)

export default memo(SwiperHome)
