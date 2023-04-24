import React, { memo } from 'react'
import Link from 'next/link'
import Loading from './loading'
import { useQuery, gql } from '@apollo/client'
import { getSecteursQuery } from '@graphql/termQueries'
import { mapTerm } from '@utils/mapping'

const SecteursList = ({ active }) => {
  const QUERY = gql`
    ${getSecteursQuery()}
  `

  const { data, loading, error } = useQuery(QUERY)

  if (loading) return <Loading />
  if (error) return <></>

  const secteurs = data.secteurs.nodes.map((secteur) => mapTerm(secteur))

  return (
    <ul className={active === 1 ? 'terms-list flex' : 'terms-list hidden'}>
      {secteurs?.map(({ id, uri, name, count }) => (
        <li className="secteurs-list" key={id}>
          <Link href={uri}>
            {name} ({count})
          </Link>
        </li>
      ))}
    </ul>
  )
}
export default memo(SecteursList)
