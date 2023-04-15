import Link from 'next/link'
import React, { memo, useEffect, useState } from 'react'
import useTerms from '../context/useTerms'
import Container from './container'
import { populateTerms } from '../utils/populateContext'

const RegionsList = () => {
  const { state, dispatch } = useTerms()
  const [regions, setRegions] = useState(state.regions?.nodes)

  useEffect(() => {
    if (!regions?.length) {
      populateTerms('regions', dispatch, setRegions)
    }
  }, [])

  if (!regions?.length) return <></>

  return (
    <Container>
      <ul className="flex flex-wrap text-xs justify-around">
        {regions.map(({ id, uri, name, count }) => (
          <li className="p-1 w-1/2 md:w-1/5" key={id}>
            <Link href={uri}>
              {name} ({count})
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  )
}
export default memo(RegionsList)
