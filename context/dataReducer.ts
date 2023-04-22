export const actions = {
  SET_POSTS: 'SET_POSTS',
}

export const postsReducer = (state, action) => {
  const { type, payload } = action

  if (type === actions.SET_POSTS) {
    const filteredPosts = state?.filter((post) => post?.uri !== payload[1])
    return [...filteredPosts, payload[0]]
  }
  return state
}
