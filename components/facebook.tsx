import React, { memo } from 'react'
import { FacebookProvider, Page } from 'react-facebook'

const Facebook = () => (
  <FacebookProvider appId="298566774007251">
    <Page
      href="https://www.facebook.com/tchadcarriere"
      tabs="timeline"
      height={400}
    />
  </FacebookProvider>
)

export default memo(Facebook)
