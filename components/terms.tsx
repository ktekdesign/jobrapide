import React, { FC, memo, useCallback, useState } from 'react'
import SeoLink from '@components/seoLink'
import ComponentsProps from '@utils/interfaces/components'
import MappedComponent from '@components/loaders/mapped-component'
import ParsedComponent from './parsed-component'
import StringComponent from './loaders/string-component'

const Terms: FC<ComponentsProps> = ({ terms, title, ...props }) => {
  const [hideTerms, setHideTerms] = useState(true)
  const toggleTerms = useCallback(() => setHideTerms(!hideTerms), [hideTerms])

  return (
    <StringComponent
      as="p"
      cond={!!terms?.length}
      data-terms={!!terms}
      {...props}
    >
      {title}
      <span data-terms-hidden={hideTerms}>
        <MappedComponent items={terms}>
          <SeoLink as="span">
            <ParsedComponent />
          </SeoLink>
        </MappedComponent>

        <StringComponent
          as="small"
          cond={terms?.length > 2}
          className="more-terms"
          onClick={toggleTerms}
        >
          {hideTerms ? '... Afficher plus' : 'Afficher moins'}
        </StringComponent>
      </span>
    </StringComponent>
  )
}

export default memo(Terms)
