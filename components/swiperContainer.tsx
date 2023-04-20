import React, { memo, useEffect, useState } from 'react'

import { populatePosts } from '@utils/populateContext'
import { getFirst, isEmpty } from '@utils/manipulateArray'
import { TermType } from '@utils/interfaces'
import usePosts from '@hooks/usePosts'
import { actions } from '@context/dataReducer'

export const SwiperContainer = ({
  term,
  type = TermType.Category,
  slides = 3,
  className = '',
  postsData = null,
  width = 0,
  height = 0,
  isPub = false,
  postsPerPage = 10,
  component: Component,
}) => {
  const { statePosts, dispatchPosts } = usePosts()
  const getPost = () => statePosts?.filter((post) => post?.uri === term)
  const [current, setCurrent] = useState(postsData)

  useEffect(() => {
    const updatePosts = async () => {
      if (!isEmpty(postsData?.posts)) {
        return dispatchPosts({
          type: actions.SET_POSTS,
          payload: [postsData, term],
        })
      }
      const termPosts = getFirst(getPost())
      if (!termPosts?.id) {
        const data = await populatePosts({
          term,
          type,
          isPub,
          postsPerPage,
          dispatch: dispatchPosts,
        })
        dispatchPosts({ type: actions.SET_POSTS, payload: [data, term] })
        setCurrent(data)
        return
      }
      dispatchPosts({ type: actions.SET_POSTS, payload: [termPosts, term] })
      setCurrent(termPosts)
    }
    updatePosts()
  }, [current])

  if (isEmpty(current?.posts)) return <></>

  const { posts: items, uri, name } = current
  const props = { items, uri, name, slides, width, height, className }

  return <Component {...props} />
}

export default memo(SwiperContainer)
