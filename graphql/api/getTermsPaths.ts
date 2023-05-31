import { outputErrors } from '@utils/outputErrors'

import { filterTerms } from '@utils/filterTerms'
import {
  categoriesPathsQuery,
  niveauxPathsQuery,
  othersCategoriesPathsQuery,
  regionsPathsQuery,
  secteursPathsQuery,
  tagsPathsQuery,
} from '@graphql/termQueriesPaths'
import loadFromWPGraphQL from '@graphql/api/loadFromWPGraphQL'

const getTermsPaths = async (name, isOther = false) => {
  const query =
    name === 'secteurs'
      ? secteursPathsQuery
      : name === 'regions'
      ? regionsPathsQuery
      : name === 'niveaux'
      ? niveauxPathsQuery
      : name === 'tags'
      ? tagsPathsQuery
      : isOther
      ? othersCategoriesPathsQuery
      : categoriesPathsQuery

  try {
    const data = await loadFromWPGraphQL(query)
    return filterTerms(data)
  } catch (err) {
    return outputErrors(err)
  }
}

export default getTermsPaths
