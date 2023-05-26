import { memo, startTransition, useState } from 'react'
import Image, { ImageProps } from 'next/image'
import OnboardingFlow from '@components/loaders/onboardingFlow'
import Logo from '@components/logo'

interface ImageWithFallbackProps extends ImageProps {
  fallback?: ImageProps['src']
}
const ImageWithFallback = ({ alt, src, ...props }: ImageWithFallbackProps) => {
  const [logo, setLogo] = useState(false)
  const onError = () => startTransition(() => setLogo(true))

  return (
    <OnboardingFlow active={Number(logo)}>
      <Image onError={onError} {...{ alt, src, ...props }} />
      <Logo {...props} />
    </OnboardingFlow>
  )
}

export default memo(ImageWithFallback)
