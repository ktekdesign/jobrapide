import { useQuery, gql } from '@apollo/client'
import {
  regionsQuery,
  categoriesQuery,
  niveauxQuery,
  secteursQuery,
} from '@graphql/termQueries'
import { filterTerms } from '@utils/filterTerms'
import { Term } from '@utils/interfaces/data'
import { useMemo, useState } from 'react'

export const useTerms = (name, isActive = true) => {
  const [terms, setTerms] = useState([] as Term[])
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

  useMemo(() => setTerms(filterTerms(data)), [data])

  return { data: { terms }, loading, error }
}
