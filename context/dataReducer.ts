export const initialState = {
  secteurs: [],
  regions: [],
  categories: [],
  niveaux: [],
  posts: [],
}
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
const postIndex = (uri, posts) => {
  return posts?.findIndex((term) => term?.uri === uri)
}

export const termsReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case actions.SET_TERMS:
      state[payload[1]] = payload[0]
      return state
    case actions.SET_POSTS:
      if (postIndex(payload[1], state.posts) !== -1) {
        state.posts[postIndex(payload[1], state.post)] = payload[0]
      } else {
        state.posts.push(payload[0])
      }
      return state
    default:
      return state
  }
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
