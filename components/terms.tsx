import React, { memo, useState } from 'react'
import Link from 'next/link'
import { isEmpty } from '@utils/manipulateArray'

const Terms = ({ terms, name }) => {
  const [hideTerms, setHideTerms] = useState(true)

  if (isEmpty(terms)) return <></>

  return (
    <span className={hideTerms ? 'terms terms-hide' : 'terms'}>
      {name}

      {terms.map(({ uri, name }, key) => (
        <span key={key}>
          <Link href={uri}>{name}</Link>
        </span>
      ))}

      <small
        className={`more-terms ${terms?.length > 3 ? '' : 'hidden'}`}
        onClick={() => setHideTerms(!hideTerms)}
      >
        {hideTerms ? '... Afficher plus' : 'Afficher moins'}
      </small>
    </span>
  )
}

export default memo(Terms)
