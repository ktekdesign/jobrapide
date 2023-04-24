import React, { FC, memo } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFlip } from 'swiper'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'
import 'swiper/css/effect-flip'
import SeoLink from '@components/seoLink'
import { PostsContainerProps } from '@utils/interfaces'

export const ImageSlider: FC<PostsContainerProps> = ({
  items,
  width,
  height,
  ...props
}) => (
  <div {...props}>
    <div className="swiper-container">
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
        {items?.map(({ uri, title, image }, key) => (
          <SwiperSlide key={key}>
            <SeoLink
              href={uri}
              label={title}
              className="flex justify-center"
              target="_blank"
            >
              <Image
                width={width || 200}
                height={height || 200}
                alt={title}
                src={image}
                className="h-auto max-w-xs w-full"
                priority
              />
            </SeoLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
)

export default memo(ImageSlider)
