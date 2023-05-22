import React, { memo } from 'react'
import SeoLink from '@components/seoLink'
import secteurs from '@utils/data/secteurs.json'
import regions from '@utils/data/regions.json'

const TermsList = ({ className, name }) => {
  const items = name === 'secteurs' ? secteurs : regions
  return (
    <ul className="terms-list flex">
      {items.map(({ id, uri, name }) => (
        <SeoLink
          as="li"
          key={id}
          href={uri}
          label={name}
          className={className ?? ''}
        >
          {name}
        </SeoLink>
      ))}
    </ul>
  )
}

export default memo(TermsList)
