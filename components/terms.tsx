import React, { memo, useState } from 'react'
import { isEmpty } from '@utils/manipulateArray'
import SeoLink from '@components/seoLink'

const Terms = ({ terms, name }) => {
  const [hideTerms, setHideTerms] = useState(true)

  if (isEmpty(terms)) return <></>

  return (
    <span className={hideTerms ? 'terms terms-hide' : 'terms'}>
      {name}

      {terms.map(({ uri, name }, key) => (
        <span key={key}>
          <SeoLink href={uri} label={name}>
            {name}
          </SeoLink>
        </span>
      ))}

      <small
        className={`more-terms 
        ${
          terms?.length >= parseInt(process.env.NEXT_PUBLIC_MAX_TERMS_BY_POST)
            ? ''
            : 'hidden'
        }`}
        onClick={() => setHideTerms(!hideTerms)}
      >
        {hideTerms ? '... Afficher plus' : 'Afficher moins'}
      </small>
    </span>
  )
}

export default memo(Terms)
