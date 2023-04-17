import { actions } from '../context/dataReducer'
import { getCategories, getTermAndPosts, getTerms } from '../lib/api'

export const populateTerms = async (type, dispatch = null, setTerms = null) => {
  const data = await (type === 'categories' ? getCategories() : getTerms(type))
  if (dispatch)
    dispatch({ type: actions.SET_TERMS, payload: [data.nodes, type] })
  if (setTerms) setTerms(data.nodes)
  return data.nodes
}

export const populatePosts = async (
  term,
  type = 'category',
  dispatch = null,
  setTermsWithPosts = null
) => {
  const data = await getTermAndPosts(term, type)
  if (dispatch) dispatch({ type: actions.SET_POSTS, payload: [data, term] })
  if (setTermsWithPosts) setTermsWithPosts(data)
  return data
}
