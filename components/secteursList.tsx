import React, { memo } from 'react'
import Loading from '@components/loading'
import { useQuery, gql } from '@apollo/client'
import { secteursQuery } from '@graphql/termQueries'
import { mapTerm } from '@utils/mapping'

const SecteursList = ({ children }) => {
  const QUERY = gql`
    ${secteursQuery}
  `

  const { data, loading, error } = useQuery(QUERY)

  const secteurs = data
    ? data.secteurs.nodes.map((secteur) => mapTerm(secteur))
    : null

  return (
    <Loading
      data={{ terms: secteurs, className: 'secteurs-list' }}
      loading={loading}
      error={error}
    >
      {children}
    </Loading>
  )
}
export default memo(SecteursList)
