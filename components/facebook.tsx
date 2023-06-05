import React, { Suspense, memo, startTransition, useState } from 'react'
import SeoLink from './seoLink'
import OnboardingFlow from '@components/loaders/onboardingFlow'
import dynamic from 'next/dynamic'

const FacebookProvider = dynamic(
  () => import('react-facebook').then((mod) => mod.FacebookProvider),
  { ssr: false }
)
const Page = dynamic(() => import('react-facebook').then((mod) => mod.Page), {
  ssr: false,
})

const Facebook = () => {
  const [active, setActive] = useState(0)
  const onClick = (e) => {
    e.preventDefault()
    startTransition(() => setActive(1))
  }
  return (
    <OnboardingFlow active={active}>
      <SeoLink
        href="https://www.facebook.com/tchadcarriere"
        as="h4"
        target="_blank"
        className="title-primary row"
        onClick={onClick}
      >
        Suivez-nous sur Facebook
      </SeoLink>
      <div className="facebook row">
        <Suspense>
          <FacebookProvider appId="298566774007251">
            <Page
              href="https://www.facebook.com/tchadcarriere"
              tabs="timeline"
              height={400}
              adaptContainerWidth
            />
          </FacebookProvider>
        </Suspense>
      </div>
    </OnboardingFlow>
  )
}

export default memo(Facebook)
