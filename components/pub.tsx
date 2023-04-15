import React, { memo, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFlip } from 'swiper'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'
import 'swiper/css/effect-flip'
import CoverImage from './cover-image'
import Link from 'next/link'
import useTerms from '../context/useTerms'
import { populatePosts } from '../utils/populateContext'

export const Pub = ({ term, withTitle = false }) => {
  const { state, dispatch } = useTerms()
  const [termWithPosts, setTermsWithPosts] = useState(
    state.posts.find((termPosts) => termPosts?.uri === term)
  )

  useEffect(() => {
    if (!termWithPosts) {
      populatePosts(term, 'category', dispatch, setTermsWithPosts)
    }
  }, [termWithPosts])

  if (!termWithPosts) return <></>
  return (
    <>
      {withTitle && (
        <h2 className="p-4 font-bold text-white bg-secondary">
          {termWithPosts.name}
        </h2>
      )}
      <Swiper
        pagination={{
          clickable: true,
        }}
        spaceBetween={30}
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
        {termWithPosts.posts.edges.map(({ node }) => (
          <SwiperSlide key={node.id}>
            <Link href={node.uri} target="_blank">
              <CoverImage
                title={node.title}
                featuredImage={node.featuredImage}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
export default memo(Pub)
