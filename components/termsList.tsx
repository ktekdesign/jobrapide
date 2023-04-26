import React, { FC, memo } from 'react'
import SeoLink from '@components/seoLink'
import ComponentsProps from '@utils/interfaces/components'

const TermsList: FC<ComponentsProps> = ({ terms, className, ...props }) => {
  return (
    <ul className="terms-list flex" {...props}>
      {terms?.map(({ id, uri, name }) => (
        <SeoLink as="li" key={id} href={uri} label={name} className={className}>
          {name}
        </SeoLink>
      ))}
    </ul>
  )
}
export default memo(TermsList)
