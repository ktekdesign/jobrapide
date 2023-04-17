import React, { memo, useState } from 'react'
import Link from 'next/link'

const Terms = ({ terms, name }) => {
  const moreTerms = terms.length > 4
  const [hideTerms, setHideTerms] = useState(moreTerms)

  if (!terms.length) return <></>

  return (
    <span className={hideTerms ? 'terms terms-hide' : 'terms'}>
      {name}

      {terms.map(({ node }) => (
        <span key={node.id}>
          <Link href={node.uri}>{node.name}</Link>
        </span>
      ))}

      {moreTerms && (
        <small className="more-terms" onClick={() => setHideTerms(!hideTerms)}>
          {hideTerms ? '... Afficher plus' : 'Afficher moins'}
        </small>
      )}
    </span>
  )
}

export default memo(Terms)
