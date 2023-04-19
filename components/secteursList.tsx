import React, { memo, useEffect, useState } from 'react'
import Link from 'next/link'

import useTerms from '@hooks/useTerms'

import { populateTerms } from '@utils/populateContext'
import { isEmpty } from '@utils/manipulateArray'
import { TermTypePlural } from '@utils/interfaces'

const SecteursList = ({ active }) => {
  const { stateTerms, dispatchTerms } = useTerms()
  const [secteurs, setSecteurs] = useState(stateTerms.secteurs)

  useEffect(() => {
    if (isEmpty(secteurs))
      populateTerms({
        type: TermTypePlural.secteurs,
        dispatch: dispatchTerms,
        setTerms: setSecteurs,
      })
  }, [secteurs])

  if (isEmpty(secteurs)) return <></>

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
