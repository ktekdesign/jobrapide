import { actions } from '../context/dataReducer'
import {
  getCategories,
  getRegions,
  getTermAndPosts,
  getTerms,
} from '@graphql/api'
import { Term, TermType, TermTypePlural } from './interfaces'
import { Dispatch, SetStateAction } from 'react'

export const populateTerms = async ({
  type,
  dispatch,
  setTerms,
}: {
  type: TermTypePlural
  dispatch?: Dispatch<{
    type: string
    payload: [Term[], TermTypePlural]
  } | null>
  setTerms?: Dispatch<SetStateAction<Term[]>>
}) => {
  const data = await (type === TermTypePlural.categories
    ? getCategories()
    : type === TermTypePlural.regions
    ? getRegions()
    : getTerms(type))

  if (dispatch) dispatch({ type: actions.SET_TERMS, payload: [data, type] })
  if (setTerms) setTerms(data)

  return data
}

export const populatePosts = async ({
  term,
  type = TermType.Category,
  dispatch,
  setTermsWithPosts,
}: {
  term: string
  type?: TermType
  dispatch?: Dispatch<{
    type: string
    payload: [Term, string]
  } | null>
  setTermsWithPosts?: Dispatch<SetStateAction<Term>>
}) => {
  const data = await getTermAndPosts({ term, type })

  if (dispatch) dispatch({ type: actions.SET_POSTS, payload: [data, term] })
  if (setTermsWithPosts) setTermsWithPosts(data)

  return data
}
