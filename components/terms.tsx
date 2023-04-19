import React, { memo, useState } from 'react'
import Link from 'next/link'
import { isEmpty } from '@utils/manipulateArray'

const Terms = ({ terms, name }) => {
  const moreTerms = terms?.length > 4
  const [hideTerms, setHideTerms] = useState(moreTerms)

  if (isEmpty(terms)) return <></>

  return (
    <span className={hideTerms ? 'terms terms-hide' : 'terms'}>
      {name}

      {terms.map(({ id, uri, name }) => (
        <span key={id}>
          <Link href={uri}>{name}</Link>
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
