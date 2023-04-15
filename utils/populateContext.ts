import { actions } from '../context/dataReducer'
import { getCategories, getTermAndPosts, getTerms } from '../lib/api'

export const populateTerms = async (type, dispatch, setTerms = null) => {
  const data = await (type === 'categories' ? getCategories() : getTerms(type))
  dispatch({ type: actions.SET_TERMS, payload: [data[type], type] })
  if (setTerms) setTerms(data[type])
  return data[type]
}

export const populatePosts = async (
  term,
  type,
  dispatch = null,
  setTermsWithPosts = null
) => {
  const data = await getTermAndPosts(term, type)
  if (dispatch)
    dispatch({ type: actions.SET_POSTS, payload: [data[type], term] })
  if (setTermsWithPosts) setTermsWithPosts(data[type])
  return data[type]
}
