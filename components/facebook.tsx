import React, { memo } from 'react'
import { FacebookProvider, Page } from 'react-facebook'
import SeoLink from './seoLink'

const Facebook = () => (
  <div className="facebook">
    <div className="widget-sm">
      <FacebookProvider appId="298566774007251">
        <Page
          href="https://www.facebook.com/tchadcarriere"
          tabs="timeline"
          height={400}
          adaptContainerWidth
        />
      </FacebookProvider>
    </div>
    <div className="widget">
      <SeoLink
        href="https://www.facebook.com/tchadcarriere"
        as="h4"
        target="_blank"
        className="title-primary"
      >
        Suivez-nous sur Facebook
      </SeoLink>
    </div>
  </div>
)

export default memo(Facebook)
