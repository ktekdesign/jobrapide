import React, { memo } from 'react'
import Link from 'next/link'
import Loading from '@components/loading'
import { useQuery, gql } from '@apollo/client'
import { regionsLastQuery, regionsQuery } from '@graphql/termQueries'
import { mapTerm } from '@utils/mapping'
import { isEmpty } from '@utils/manipulateArray'

const RegionsList = ({ active }) => {
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
    <Loading loading={loading} error={error}>
      <ul className={active === 2 ? 'terms-list flex' : 'terms-list hidden'}>
        {regions?.map(({ id, uri, name, count }) => (
          <li className="regions-list" key={id}>
            <Link href={uri}>
              {name} ({count})
            </Link>
          </li>
        ))}
      </ul>
    </Loading>
  )
}
export default memo(RegionsList)
