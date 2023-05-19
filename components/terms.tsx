import React, { FC, memo, useCallback, useState } from 'react'
import SeoLink from '@components/seoLink'
import ComponentsProps from '@utils/interfaces/components'

const Terms: FC<ComponentsProps> = ({ terms, title, className, ...props }) => {
  const [hideTerms, setHideTerms] = useState(true)
  const toggleTerms = useCallback(() => setHideTerms(!hideTerms), [hideTerms])

  return (
    <p
      className={`${className || ''}${(!terms && ' hidden') || ' terms'}`}
      {...props}
    >
      {title}
      <span className={hideTerms ? 'terms-hide' : ''}>
        {terms?.map(({ uri, name }, key) => (
          <SeoLink key={key} href={uri} label={name}>
            {name}
          </SeoLink>
        ))}

        <small
          className={`more-terms 
          ${(terms?.length < 3 && 'hidden') || ''}`}
          onClick={toggleTerms}
        >
          {hideTerms ? '... Afficher plus' : 'Afficher moins'}
        </small>
      </span>
    </p>
  )
}

export default memo(Terms)
