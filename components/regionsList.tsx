import React, { memo } from 'react'
import Loading from '@components/loading'
import { useQuery, gql } from '@apollo/client'
import { regionsLastQuery, regionsQuery } from '@graphql/termQueries'
import { mapTerm } from '@utils/mapping'
import { isEmpty } from '@utils/manipulateArray'

const RegionsList = ({ children }) => {
  const QUERY = gql`
    ${regionsQuery}
  `
  const QUERYLAST = gql`
    ${regionsLastQuery}
  `
  const { data, loading, error } = useQuery(QUERY)
  const { data: last } = useQuery(QUERYLAST)

  const allRegions =
    data && last ? [...data.regions.nodes, ...last.regions.nodes] : null
  const regions = !isEmpty(allRegions)
    ? allRegions.map((region) => mapTerm(region))
    : null

  return (
    <Loading
      data={{ terms: regions, className: 'regions-list' }}
      loading={loading}
      error={error}
    >
      {children}
    </Loading>
  )
}
export default memo(RegionsList)
