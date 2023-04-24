import React, { memo } from 'react'
import Link from 'next/link'
import Loading from '@components/loading'
import { useQuery, gql } from '@apollo/client'
import { regionsLastQuery, regionsQuery } from '@graphql/termQueries'
import { mapTerm } from '@utils/mapping'

const RegionsList = ({ active }) => {
  const QUERY = gql`
    ${regionsQuery}
  `
  const QUERYLAST = gql`
    ${regionsLastQuery}
  `
  const { data, loading, error } = useQuery(QUERY)
  const { data: last } = useQuery(QUERYLAST)

  if (loading) return <Loading />
  if (error) return <></>

  const allRegions = [...data.regions.nodes, ...last.regions.nodes]
  const regions = allRegions.map((region) => mapTerm(region))

  return (
    <ul className={active === 2 ? 'terms-list flex' : 'terms-list hidden'}>
      {regions?.map(({ id, uri, name, count }) => (
        <li className="regions-list" key={id}>
          <Link href={uri}>
            {name} ({count})
          </Link>
        </li>
      ))}
    </ul>
  )
}
export default memo(RegionsList)
