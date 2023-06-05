import React, { Suspense, memo, startTransition, useState } from 'react'
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
    <OnboardingFlow active={active}>
      <SeoLink
        href="https://www.twitter.com/@tchadcarriere"
        as="h4"
        target="_blank"
        className="title-secondary row"
        onClick={onClick}
      >
        Suivez-nous sur Twitter
      </SeoLink>
      <div className="row">
        <Suspense>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="tchadcarriere"
            options={{ height: 400 }}
          />
        </Suspense>
      </div>
    </OnboardingFlow>
  )
}

export default memo(Twitter)
