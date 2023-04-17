import React, { memo, useEffect, useState } from 'react'
import Link from 'next/link'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'

import PostPreview from '@components/post-preview'
import CoverImage from '@components/cover-image'

import { actions } from '@context/dataReducer'

import useTerms from '@hooks/useTerms'

import { populatePosts } from '@utils/populateContext'

export const SwiperContainer = ({
  term,
  type,
  slides = 3,
  light = false,
  className = '',
  posts = null,
}) => {
  const { stateTerms, dispatchTerms } = useTerms()
  const [termWithPosts, setTermsWithPosts] = useState(
    posts || stateTerms.posts.find((termPosts) => termPosts?.uri === term)
  )
  const priority = posts !== null

  useEffect(() => {
    if (priority) {
      dispatchTerms({ type: actions.SET_POSTS, payload: [posts, term] })
    }

    if (!termWithPosts) {
      populatePosts(term, type, dispatchTerms, setTermsWithPosts)
    }
  }, [termWithPosts])

  if (!termWithPosts) return <></>

  return (
    <div className={light ? 'swiper-container' : 'swiper-container bg-dark'}>
      {!light && (
        <h2 className={className}>
          <Link href={termWithPosts.uri}>{termWithPosts.name}</Link>
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
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: Math.max(slides - 1, 2),
          },
          1024: {
            slidesPerView: slides,
          },
        }}
        modules={[Pagination, Autoplay]}
      >
        {termWithPosts.posts.edges.map(({ node }) => (
          <SwiperSlide key={node.id}>
            {light ? (
              <Link href={node.uri}>
                <CoverImage
                  title={node.title}
                  featuredImage={node.featuredImage}
                />
              </Link>
            ) : (
              <PostPreview
                key={node.id}
                id={node.id}
                title={node.title}
                featuredImage={node.featuredImage}
                uri={node.uri}
                priority={priority}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default memo(SwiperContainer)
