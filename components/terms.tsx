import React, { FC, memo, useCallback, useState } from 'react'
import SeoLink from '@components/seoLink'
import ComponentsProps from '@utils/interfaces/components'

const Terms: FC<ComponentsProps> = ({ terms, title, ...props }) => {
  const [hideTerms, setHideTerms] = useState(true)
  const toggleTerms = useCallback(() => setHideTerms(!hideTerms), [hideTerms])

  return (
    <p data-hidden={!terms} data-terms={!!terms} {...props}>
      {title}
      <span data-terms-hidden={hideTerms}>
        {terms?.map(({ uri, name }, key) => (
          <SeoLink key={key} href={uri} label={name}>
            {name}
          </SeoLink>
        ))}

        <small
          data-hidden={terms?.length < 3}
          className="more-terms"
          onClick={toggleTerms}
        >
          {hideTerms ? '... Afficher plus' : 'Afficher moins'}
        </small>
      </span>
    </p>
  )
}

export default memo(Terms)
