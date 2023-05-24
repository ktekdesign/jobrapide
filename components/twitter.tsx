import React, { memo, startTransition, useState } from 'react'
import SeoLink from './seoLink'
import OnboardingFlow from '@components/loaders/onboardingFlow'
import dynamic from 'next/dynamic'

const TwitterTimelineEmbed = dynamic(
  () => import('react-twitter-embed').then((mod) => mod.TwitterTimelineEmbed),
  { ssr: false }
)

const Twitter = () => {
  const [active, setActive] = useState(0)
  const onClick = (e) => {
    e.preventDefault()
    startTransition(() => setActive(1))
  }

  return (
    <div className="twitter">
      <OnboardingFlow active={active}>
        <SeoLink
          href="https://www.twitter.com/@tchadcarriere"
          as="h4"
          target="_blank"
          className="title-secondary"
          onClick={onClick}
        >
          Suivez-nous sur Twitter
        </SeoLink>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="tchadcarriere"
          options={{ height: 400 }}
        />
      </OnboardingFlow>
    </div>
  )
}

export default memo(Twitter)
