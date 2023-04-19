import { actions } from '../context/dataReducer'
import {
  getCategories,
  getRegions,
  getTermAndPosts,
  getTerms,
} from '@graphql/api'

export const populateTerms = async (type, dispatch = null, setTerms = null) => {
  const data = await (type === 'categories'
    ? getCategories()
    : type === 'regions'
    ? getRegions()
    : getTerms(type))

  if (dispatch) dispatch({ type: actions.SET_TERMS, payload: [data, type] })
  if (setTerms) setTerms(data)

  return data
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
