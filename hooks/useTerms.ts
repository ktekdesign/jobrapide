import { useQuery, gql } from '@apollo/client'
import {
  regionsQuery,
  categoriesQuery,
  niveauxQuery,
  secteursQuery,
} from '@graphql/termQueries'
import { filterTerms } from '@utils/filterTerms'

export const useTerms = (name, isActive = true) => {
  const query =
    name === 'secteurs'
      ? secteursQuery
      : name === 'regions'
      ? regionsQuery
      : name === 'niveaux'
      ? niveauxQuery
      : categoriesQuery

  const QUERY = gql`
    ${isActive ? query : 'query{null}'}
  `

  const { data, loading, error } = useQuery(QUERY)

  const terms = filterTerms(data)

  return { data: { terms }, loading, error }
}
