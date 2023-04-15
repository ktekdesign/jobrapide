import Link from 'next/link'
import React, { memo, useEffect, useState } from 'react'
import useTerms from '../context/useTerms'
import { populateTerms } from '../utils/populateContext'
import Container from './container'

const TermsList = ({ term, className = '' }) => {
  const { state, dispatch } = useTerms()
  const [terms, setTerms] = useState(state[term].nodes)
  useEffect(() => {
    populateTerms(term, dispatch, setTerms)
  }, [])
  if (!terms?.length) return <></>
  return (
    <Container>
      <ul className="flex flex-wrap text-xs justify-around">
        {terms.nodes.map((term) => (
          <li className={`p-1 ${className || 'md:w-1/3'}`} key={term.id}>
            <Link href={term.uri}>
              {term.name} ({term.count})
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  )
}
export default memo(TermsList)
