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
import { Post, PostProps } from '@utils/interfaces'

export const SwiperContainer = ({
  term,
  type = 'category',
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
  const items: Post[] = termWithPosts?.posts

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
        {items.map(({ id, uri, title, image }) => (
          <SwiperSlide key={id}>
            {light ? (
              <Link href={uri}>
                <CoverImage title={title} image={image} />
              </Link>
            ) : (
              <PostPreview key={id} title={title} image={image} uri={uri} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default memo(SwiperContainer)
