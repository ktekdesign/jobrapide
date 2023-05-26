import React, { memo } from 'react'
import SeoLink from '@components/seoLink'
import secteurs from '@utils/data/secteurs.json'
import regions from '@utils/data/regions.json'
import MappedComponent from '@components/loaders/mapped-component'
import ParsedComponent from './parsed-component'

const TermsList = ({ className, name }) => {
  const items = name === 'secteurs' ? secteurs : regions
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
