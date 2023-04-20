import React, { memo, useReducer } from 'react'
import { postsReducer } from '@context/dataReducer'
import PostsContext from '@context/postsContext'

const PostsContextProvider = ({ children }) => {
  const [statePosts, dispatchPosts] = useReducer(postsReducer, [])
  return (
    <PostsContext.Provider value={{ statePosts, dispatchPosts }}>
      {children}
    </PostsContext.Provider>
  )
}

export default memo(PostsContextProvider)
