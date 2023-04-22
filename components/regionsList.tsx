import React, { memo, useEffect } from 'react'
import Link from 'next/link'

import useTerms from '@hooks/useTerms'

import { populateTerms } from '@utils/populateContext'
import { isEmpty } from '@utils/manipulateArray'
import { TermTypePlural } from '@utils/interfaces'
import Loading from '@components/loading'

const RegionsList = ({ active }) => {
  const { regions, setRegions } = useTerms()

  useEffect(() => {
    if (active === 2 && isEmpty(regions))
      populateTerms({
        type: TermTypePlural.regions,
        setTerms: setRegions,
      })
  }, [active, regions])

  if (active === 2 && isEmpty(regions)) return <Loading />

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
