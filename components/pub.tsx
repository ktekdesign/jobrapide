import React, { memo, useEffect, useState } from 'react'
import parse from 'html-react-parser'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFlip } from 'swiper'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'
import 'swiper/css/effect-flip'

import useTerms from '@hooks/useTerms'

import { populatePosts } from '@utils/populateContext'

export const Pub = ({ term }) => {
  const { stateTerms, dispatchTerms } = useTerms()
  const [termWithPosts, setTermsWithPosts] = useState(
    stateTerms.posts.find((termPosts) => termPosts?.uri === term)
  )

  useEffect(() => {
    if (!termWithPosts) {
      populatePosts(term, 'category', dispatchTerms, setTermsWithPosts)
    }
  }, [termWithPosts])

  if (!termWithPosts) return <></>

  return (
    <div className="swiper-container pub">
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
        {termWithPosts.posts.map(({ id, content }) => (
          <SwiperSlide key={id}>{parse(content)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
export default memo(Pub)
