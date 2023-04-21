import React, { memo, useEffect } from 'react'
import Link from 'next/link'

import useTerms from '@hooks/useTerms'

import { populateTerms } from '@utils/populateContext'
import { isEmpty } from '@utils/manipulateArray'
import { TermTypePlural } from '@utils/interfaces'

const SecteursList = ({ active }) => {
  const { secteurs, setSecteurs } = useTerms()

  useEffect(() => {
    if (isEmpty(secteurs))
      populateTerms({
        type: TermTypePlural.secteurs,
        setTerms: setSecteurs,
      })
  }, [secteurs])

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
