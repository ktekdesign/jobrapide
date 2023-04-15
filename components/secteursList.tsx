import Link from 'next/link'
import React, { memo, useEffect, useState } from 'react'
import useTerms from '../context/useTerms'
import Container from './container'
import { populateTerms } from '../utils/populateContext'

const SecteursList = () => {
  const { state, dispatch } = useTerms()
  const [secteurs, setSecteurs] = useState(state.secteurs?.nodes)

  useEffect(() => {
    if (!secteurs?.length) {
      populateTerms('secteurs', dispatch, setSecteurs)
    }
  }, [secteurs])

  if (!secteurs?.length) return <></>

  return (
    <Container>
      <ul className="flex flex-wrap text-xs md:justify-around">
        {secteurs.map(({ id, uri, name, count }) => (
          <li className="p-1 md:w-1/3" key={id}>
            <Link href={uri}>
              {name} ({count})
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  )
}
export default memo(SecteursList)
