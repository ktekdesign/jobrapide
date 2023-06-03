import StringComponent from '@components/loaders/string-component'
import React, { Suspense, memo } from 'react'

const Row = ({ children, ...props }) => (
  <Suspense>
    <StringComponent as="div" className="row" {...props}>
      {children}
    </StringComponent>
  </Suspense>
)

export default memo(Row)
