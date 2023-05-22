import React, { memo } from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import SeoLink from './seoLink'

const Twitter = () => (
  <div className="twitter">
    <div className="widget-sm">
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="tchadcarriere"
        options={{ height: 400 }}
      />
    </div>
    <div className="widget">
      <SeoLink
        href="https://www.twitter.com/@tchadcarriere"
        as="h4"
        target="_blank"
        className="title-secondary"
      >
        Suivez-nous sur Twitter
      </SeoLink>
    </div>
  </div>
)

export default memo(Twitter)
