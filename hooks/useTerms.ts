import {
  categoriesQuery,
  niveauxQuery,
  regionsQuery,
  secteursQuery,
  tagsQuery,
} from '@graphql/termQueries'
import { filterTerms } from '@utils/filterTerms'
import useClientQuery from '@hooks/useClientQuery'

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

  const data = useClientQuery(query)

  return filterTerms(data)
}

export default useTerms
