import React, { FC, memo } from 'react'

import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'

import PostPreview from '@components/post-preview'
import ComponentsProps from '@utils/interfaces/components'
import SwiperController from './swiper-controller'

const SwiperHome: FC<ComponentsProps> = ({
  posts,
  slides = 3,
  onlyImage,
  priority,
  className,
}) => (
  <div {...{ className: onlyImage && 'onlyImage' }}>
    <SwiperController className="swiper-container" slides={slides}>
      {posts?.map(({ uri, title, image }, key) => (
        <PostPreview
          key={key}
          title={title}
          image={image}
          uri={uri}
          onlyImage={onlyImage}
          className={className}
          priority={priority && key < 3}
        />
      ))}
    </SwiperController>
  </div>
)

export default memo(SwiperHome)
