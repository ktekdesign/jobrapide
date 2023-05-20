import React, { memo } from 'react'
import SeoLink from '@components/seoLink'
import Translate from '@components/translate'

const TermsList = ({ terms, className }) => (
  <ul className="terms-list flex">
    {terms?.map(({ id, uri, name }) => (
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

export default memo(TermsList)
