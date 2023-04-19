import React, { memo, useEffect, useState } from 'react'
import Link from 'next/link'

import useTerms from '@hooks/useTerms'

import { populateTerms } from '@utils/populateContext'
import { isEmpty } from '@utils/manipulateArray'
import { TermTypePlural } from '@utils/interfaces'

const RegionsList = ({ active }) => {
  const { stateTerms, dispatchTerms } = useTerms()
  const [regions, setRegions] = useState(stateTerms.regions)

  useEffect(() => {
    if (isEmpty(regions))
      populateTerms({
        type: TermTypePlural.regions,
        dispatch: dispatchTerms,
        setTerms: setRegions,
      })
  }, [])

  if (isEmpty(regions)) return <></>

  return (
    <ul className={active === 2 ? 'terms-list flex' : 'terms-list hidden'}>
      {regions.map(({ id, uri, name, count }) => (
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
