import React, { memo, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import PostPreview from './post-preview'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'
import CoverImage from './cover-image'
import Link from 'next/link'
import useTerms from '../context/useTerms'
import { populatePosts } from '../utils/populateContext'
import { actions } from '../context/dataReducer'

export const SwiperContainer = ({
  term,
  type,
  slides = 3,
  light = false,
  alternate = false,
  redirect = '',
  posts = null,
}) => {
  const { state, dispatch } = useTerms()
  const [termWithPosts, setTermsWithPosts] = useState(
    posts || state.posts.find((termPosts) => termPosts?.uri === term)
  )
  const priority = posts !== null
  if (priority) {
    dispatch({ type: actions.SET_POSTS, payload: [posts, term] })
  }
  useEffect(() => {
    if (!termWithPosts) {
      populatePosts(term, type, dispatch, setTermsWithPosts)
    }
  }, [termWithPosts])

  if (!termWithPosts) return <></>

  return (
    <div
      className={`shadow-lg ${
        !light ? 'bg-dark' : ''
      } hover:border hover:bg-gray-600 hover:shadow-2xl transition-all duration-200`}
    >
      {!light && (
        <h2
          className={`p-4 text-white font-bold ${
            alternate ? 'bg-secondary' : 'bg-primary'
          }`}
        >
          <Link className="hover:underline" href={termWithPosts.uri}>
            {termWithPosts.name}
          </Link>
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
              <Link href={redirect || node.uri} target={redirect && '_blank'}>
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
