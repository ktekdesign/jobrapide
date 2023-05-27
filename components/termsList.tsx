import React, { memo } from 'react'
import SeoLink from '@components/seoLink'
import MappedComponent from '@components/loaders/mapped-component'
import ParsedComponent from './parsed-component'
import useTerms from '@hooks/useTerms'

const TermsList = ({ className, name }) => {
  const items = useTerms(name)
  return (
    <ul className="terms-list flex">
      <MappedComponent items={items}>
        <SeoLink as="li" {...{ className }}>
          <ParsedComponent />
        </SeoLink>
      </MappedComponent>
    </ul>
  )
}

export default memo(TermsList)
