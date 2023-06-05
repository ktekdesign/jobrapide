import React, { memo } from 'react'
import SeoLink from '@components/seoLink'
import MappedComponent from '@components/loaders/mapped-component'
import ParsedComponent from '@components/parsed-component'
import useTerms from '@hooks/useTerms'

const TermsList = ({ name, ...props }) => {
  const items = useTerms(name)
  return (
    <MappedComponent
      as="ul"
      className="terms-list flex"
      cond={!!items}
      items={items}
    >
      <SeoLink as="li" {...props}>
        <ParsedComponent />
      </SeoLink>
    </MappedComponent>
  )
}

export default memo(TermsList)
