import { memo } from 'react'
import dynamic from 'next/dynamic'
const PostPreview = dynamic(() => import('@components/post-preview'))
const SwiperController = dynamic(() => import('@components/swiper-controller'))

const SwiperHome = ({
  posts = null,
  slides = 3,
  onlyImage = false,
  ...props
}) => {
  console.log(posts)
  return (
    <SwiperController
      {...{ className: onlyImage ? 'onlyImage' : 'swiperContainer' }}
      posts={posts}
      slides={slides}
    >
      <PostPreview onlyImage {...props} />
    </SwiperController>
  )
}
export default memo(SwiperHome)
