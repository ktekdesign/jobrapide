export const initialModalState = {
  toggleModal: false,
  toggleSearchForm: false,
}
export const actions = {
  SET_POSTS: 'SET_POSTS',
  SET_TERMS: 'SET_TERMS',
  SET_TOGGLE_MODAL: 'SET_TOGGLE_MODAL',
  SET_TOGGLE_SEARCHFRORM: 'SET_TOGGLE_SEARCHFRORM',
}

export const postsReducer = (state, action) => {
  const { type, payload } = action

  if (type === actions.SET_POSTS) {
    const filteredPosts = state?.filter((post) => post?.uri !== payload[1])
    return [...filteredPosts, payload[0]]
  }
  return state
}

export const modalReducer = (state, action) => {
  const { type } = action
  switch (type) {
    case actions.SET_TOGGLE_MODAL:
      return {
        ...state,
        toggleModal: !state.toggleModal,
      }
    case actions.SET_TOGGLE_SEARCHFRORM:
      return {
        ...state,
        toggleSearchForm: !state.toggleSearchForm,
      }
    default:
      return state
  }
}
