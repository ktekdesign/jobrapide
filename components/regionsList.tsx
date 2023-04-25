import React, { memo } from 'react'
import Loading from '@components/loading'
import { useQuery, gql } from '@apollo/client'
import { regionsLastQuery, regionsQuery } from '@graphql/termQueries'
import { mapTerm } from '@utils/mapping'
import { isEmpty } from '@utils/manipulateArray'
import SeoLink from '@components/seoLink'

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
          <SeoLink
            as="li"
            key={id}
            href={uri}
            label={name}
            className="regions-list"
          >
            {name} ({count})
          </SeoLink>
        ))}
      </ul>
    </Loading>
  )
}
export default memo(RegionsList)
