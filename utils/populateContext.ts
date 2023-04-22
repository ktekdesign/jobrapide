import { Dispatch, SetStateAction } from 'react'
import { getCategories, getPostsHome, getRegions, getTerms } from '@graphql/api'
import { Term, TermType, TermTypePlural } from '@utils/interfaces'

export const populateTerms = async ({
  type,
  setTerms,
}: {
  type: TermTypePlural
  setTerms?: Dispatch<SetStateAction<Term[]>>
}) => {
  const data = await (type === TermTypePlural.categories
    ? getCategories()
    : type === TermTypePlural.regions
    ? getRegions()
    : getTerms(type))

  if (setTerms) setTerms(data)

  return data
}

export const populatePosts = async ({
  term,
  type = TermType.Category,
  postsPerPage = 10,
}: {
  term: string
  type?: TermType
  dispatch?: Dispatch<{
    type: string
    payload: [Term, string]
  }>
  setTermsWithPosts?: Dispatch<SetStateAction<Term>>
  postsPerPage?: number
}) => {
  const data = await getPostsHome({ term, type, postsPerPage })
  return data
}
