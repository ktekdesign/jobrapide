import React, { memo, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFlip } from 'swiper'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'
import 'swiper/css/effect-flip'

import useTerms from '@hooks/useTerms'

import { populatePosts } from '@utils/populateContext'

export const ImageSlider = ({ term, width = 0, height = 0 }) => {
  const { stateTerms, dispatchTerms } = useTerms()
  const [termWithPosts, setTermsWithPosts] = useState(
    stateTerms.posts.find((termPosts) => termPosts?.uri === term)
  )

  useEffect(() => {
    if (!termWithPosts)
      populatePosts(term, 'category', dispatchTerms, setTermsWithPosts)
  }, [termWithPosts])

  if (!termWithPosts) return <></>

  return (
    <div className="swiper-container">
      <h2 className="title-secondary">{termWithPosts.name}</h2>
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
        {termWithPosts.posts.map(({ id, uri, title, image }) => (
          <SwiperSlide key={id}>
            <Link href={uri} className="flex justify-center" target="_blank">
              <Image
                width={width || 200}
                height={height || 200}
                alt={title}
                src={image}
                className="max-h-max h-auto"
                priority
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
export default memo(ImageSlider)
