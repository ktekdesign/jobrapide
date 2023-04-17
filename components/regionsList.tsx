import React, { memo, useEffect, useState } from 'react'
import Link from 'next/link'

import useTerms from '@hooks/useTerms'

import { populateTerms } from '@utils/populateContext'

const RegionsList = ({ active }) => {
  const { stateTerms, dispatchTerms } = useTerms()
  const [regions, setRegions] = useState(stateTerms.regions)

  useEffect(() => {
    if (!regions?.length) {
      populateTerms('regions', dispatchTerms, setRegions)
    }
  }, [])

  if (!regions?.length) return <></>

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
