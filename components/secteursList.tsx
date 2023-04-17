import React, { memo, useEffect, useState } from 'react'
import Link from 'next/link'

import useTerms from '@hooks/useTerms'

import { populateTerms } from '@utils/populateContext'

const SecteursList = ({ active }) => {
  const { stateTerms, dispatchTerms } = useTerms()
  const [secteurs, setSecteurs] = useState(stateTerms.secteurs)

  useEffect(() => {
    if (!secteurs?.length) {
      populateTerms('secteurs', dispatchTerms, setSecteurs)
    }
  }, [secteurs])

  if (!secteurs?.length) return <></>

  return (
    <ul className={active === 1 ? 'terms-list flex' : 'terms-list hidden'}>
      {secteurs.map(({ id, uri, name, count }) => (
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
