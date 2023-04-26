import React, { FC, memo, useState } from 'react'
import { isEmpty } from '@utils/manipulateArray'
import SeoLink from '@components/seoLink'
import ComponentsProps from '@utils/interfaces/components'

const Terms: FC<ComponentsProps> = ({ terms, title, ...props }) => {
  const [hideTerms, setHideTerms] = useState(true)

  if (isEmpty(terms)) return <></>

  return (
    <p {...props}>
      <span className={hideTerms ? 'terms terms-hide' : 'terms'}>
        {title}

        {terms?.map(({ uri, name }, key) => (
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
    </p>
  )
}

export default memo(Terms)
