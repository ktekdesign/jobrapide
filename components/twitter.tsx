import React, { memo } from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

const Twitter = () => (
  <TwitterTimelineEmbed
    sourceType="profile"
    screenName="tchadcarriere"
    options={{ height: 400 }}
  />
)

export default memo(Twitter)
