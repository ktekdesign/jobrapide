import { actions } from '../context/dataReducer'
import { getCategories, getTermAndPosts, getTerms } from '../lib/api'

export const populateTerms = async (type, dispatch = null, setTerms = null) => {
  const data = await (type === 'categories' ? getCategories() : getTerms(type))
  if (dispatch)
    dispatch({ type: actions.SET_TERMS, payload: [data[type].nodes, type] })
  if (setTerms) setTerms(data[type].nodes)
  return data[type].nodes
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
