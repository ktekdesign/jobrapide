import React, { FC, memo, useCallback, useState } from 'react'
import SeoLink from '@components/seoLink'
import ComponentsProps from '@utils/interfaces/components'
import MappedComponent from '@components/loaders/mapped-component'
import ParsedComponent from './parsed-component'

const Terms: FC<ComponentsProps> = ({ terms, title, ...props }) => {
  const [hideTerms, setHideTerms] = useState(true)
  const toggleTerms = useCallback(() => setHideTerms(!hideTerms), [hideTerms])

  return (
    <p data-terms={!!terms} {...props}>
      {title}
      <span data-terms-hidden={hideTerms}>
        <MappedComponent items={terms}>
          <SeoLink as="span">
            <ParsedComponent />
          </SeoLink>
        </MappedComponent>

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
