import React, { FC, memo } from 'react'

import PostPreview from '@components/post-preview'
import ComponentsProps from '@utils/interfaces/components'
import SwiperController from '@components/swiper-controller'

const SwiperHome: FC<ComponentsProps> = ({
  posts,
  slides = 3,
  onlyImage,
  priority,
  className,
}) => (
  <div {...{ className: onlyImage && 'onlyImage' }}>
    <SwiperController posts={posts} slides={slides}>
      <PostPreview {...{ className, priority }} />
    </SwiperController>
  </div>
)

export default memo(SwiperHome)
