import { memo, startTransition, useState } from 'react'
import Image from 'next/image'
import OnboardingFlow from '@components/loaders/onboardingFlow'
import Logo from '@components/logo'

const ImageWithFallback = ({ alt, src, priority, ...props }) => {
  const [logo, setLogo] = useState(!src)
  const onError = () => startTransition(() => setLogo(true))

  return (
    <OnboardingFlow active={Number(logo)}>
      <Image onError={onError} {...{ alt, src, priority, ...props }} />
      <Logo {...props} />
    </OnboardingFlow>
  )
}

export default memo(ImageWithFallback)
