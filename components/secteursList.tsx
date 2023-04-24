import React, { memo } from 'react'
import Loading from './loading'
import { useQuery, gql } from '@apollo/client'
import { getSecteursQuery } from '@graphql/termQueries'
import { mapTerm } from '@utils/mapping'
import SeoLink from '@components/seoLink'

const SecteursList = ({ active }) => {
  const QUERY = gql`
    ${getSecteursQuery()}
  `

  const { data, loading, error } = useQuery(QUERY)

  const secteurs = data
    ? data.secteurs.nodes.map((secteur) => mapTerm(secteur))
    : null

  return (
    <Loading loading={loading} error={error}>
      <ul className={active === 1 ? 'terms-list flex' : 'terms-list hidden'}>
        {secteurs?.map(({ id, uri, name, count }) => (
          <li className="secteurs-list" key={id}>
            <SeoLink href={uri} label={name}>
              {name} ({count})
            </SeoLink>
          </li>
        ))}
      </ul>
    </Loading>
  )
}
export default memo(SecteursList)
