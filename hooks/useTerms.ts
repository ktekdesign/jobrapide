import { gql, useQuery } from '@apollo/client'
import {
  categoriesQuery,
  niveauxQuery,
  regionsQuery,
  secteursQuery,
  tagsQuery,
} from '@graphql/termQueries'
import { filterTerms } from '@utils/filterTerms'

const useTerms = (name) => {
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

  const { data } = useQuery(
    gql`
      ${query}
    `
  )
  const terms = filterTerms(data)
  return terms
}

export default useTerms
