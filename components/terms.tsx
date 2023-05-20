import React, { FC, memo, useCallback, useState } from 'react'
import SeoLink from '@components/seoLink'
import ComponentsProps from '@utils/interfaces/components'
import Translate from './translate'

const Terms: FC<ComponentsProps> = ({ terms, title, className, ...props }) => {
  const [hideTerms, setHideTerms] = useState(true)
  const toggleTerms = useCallback(() => setHideTerms(!hideTerms), [hideTerms])

  return (
    <p
      className={`${className || ''}${(!terms && ' hidden') || ' terms'}`}
      {...props}
    >
      <Translate text={title} />
      <span className={hideTerms ? 'terms-hide' : ''}>
        {terms?.map(({ uri, name }, key) => (
          <SeoLink key={key} href={uri} label={name}>
            <Translate text={name} />
          </SeoLink>
        ))}

        <small
          className={`more-terms 
          ${(terms?.length < 3 && 'hidden') || ''}`}
          onClick={toggleTerms}
        >
          <Translate
            text={hideTerms ? '... Afficher plus' : 'Afficher moins'}
          />
        </small>
      </span>
    </p>
  )
}

export default memo(Terms)
