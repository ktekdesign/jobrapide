import { createContext, Dispatch } from 'react'
import { Term } from '@utils/interfaces'

export const PostsContext = createContext<{
  statePosts: Term[]
  dispatchPosts: Dispatch<{
    type: string
    payload: [Term, string]
  } | null>
}>({
  statePosts: [],
  dispatchPosts: () => null,
})

export default PostsContext
