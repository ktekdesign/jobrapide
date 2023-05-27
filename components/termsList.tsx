import React, { memo } from 'react'
import SeoLink from '@components/seoLink'
import MappedComponent from '@components/loaders/mapped-component'
import ParsedComponent from '@components/parsed-component'
import useTerms from '@hooks/useTerms'
import Loading from '@components/loaders/loading'

const TermsList = ({ name, ...props }) => {
  const items = useTerms(name)
  return (
    <ul className="terms-list flex">
      <Loading data={{ items }} loading={!items.length}>
        <MappedComponent>
          <SeoLink as="li" {...props}>
            <ParsedComponent />
          </SeoLink>
        </MappedComponent>
      </Loading>
    </ul>
  )
}

export default memo(TermsList)
