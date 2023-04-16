import React, { memo, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFlip } from 'swiper'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'
import 'swiper/css/effect-flip'
import Link from 'next/link'
import Image from 'next/image'
import useTerms from '../context/useTerms'
import { populatePosts } from '../utils/populateContext'

export const Pub = ({ term, withTitle = false, width = 0, height = 0 }) => {
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
        {termWithPosts.posts.edges.map(({ node }) => (
          <SwiperSlide key={node.id}>
            <Link
              href={node.uri}
              className="flex justify-center"
              target="_blank"
            >
              <Image
                width={width || 200}
                height={height || 200}
                alt={node.title}
                src={node.featuredImage?.node.sourceUrl}
                className="max-h-max h-auto"
                priority
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
export default memo(Pub)
