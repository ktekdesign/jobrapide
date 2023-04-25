import React, { FC, memo } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFlip } from 'swiper'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'
import 'swiper/css/effect-flip'
import SeoLink from '@components/seoLink'
import ComponentsProps from '@utils/interfaces/components'

export const ImageSlider: FC<ComponentsProps> = ({
  posts,
  width,
  height,
  className,
  ...props
}) => (
  <div className={className || 'swiper-container'} {...props}>
    <Swiper
      pagination={{
        clickable: true,
      }}
      spaceBetween={30}
      centeredSlides={true}
      centeredSlidesBounds={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
      effect="flip"
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
      }}
      modules={[Pagination, Autoplay, EffectFlip]}
    >
      {posts?.map(({ uri, title, image }, key) => (
        <SwiperSlide key={key}>
          <SeoLink href={uri} label={title} target="_blank">
            <Image
              width={width || 200}
              height={height || 200}
              alt={title}
              src={image}
              className="max-w-xs w-full"
              priority
            />
          </SeoLink>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
)

export default memo(ImageSlider)
