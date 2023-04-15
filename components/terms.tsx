import Link from 'next/link'
import React, { memo, useState } from 'react'
import styles from './terms.module.css'

const Terms = ({ terms, name }) => {
  const [hideTerms, setHideTerms] = useState(terms.length > 4)

  if (!terms.length) return <></>

  return (
    <span className={`mb-2 block text-dark ${hideTerms && styles.terms}`}>
      {name}
      {terms.map(({ node }) => (
        <span
          key={node.id}
          className="mr-2 inline-block text-primary hover:text-secondary"
        >
          <Link href={node.uri}>{node.name}</Link>
        </span>
      ))}
      {terms.length > 4 && (
        <small
          className="cursor-pointer font-normal"
          onClick={() => setHideTerms(!hideTerms)}
        >
          {!hideTerms ? 'Afficher moins' : '... Afficher plus'}
        </small>
      )}
    </span>
  )
}

export default memo(Terms)
