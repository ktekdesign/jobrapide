import { outputErrors } from '@utils/outputErrors'
import {
  categoriesQuery,
  niveauxQuery,
  regionsQuery,
  secteursQuery,
  tagsQuery,
} from '@graphql/termQueries'
import { filterTerms } from '@utils/filterTerms'
import loadFromWPGraphQL from './loadFromWPGraphQL'

const getTerms = async (name) => {
  const query =
    name === 'secteurs'
      ? secteursQuery
      : name === 'regions'
      ? regionsQuery
      : name === 'niveaux'
      ? niveauxQuery
      : name === 'tags'
      ? tagsQuery
      : categoriesQuery

  try {
    const data = await loadFromWPGraphQL(query)
    return filterTerms(data)
  } catch (err) {
    return outputErrors(err)
  }
}

export default getTerms
