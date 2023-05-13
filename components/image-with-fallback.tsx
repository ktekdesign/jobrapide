import { memo, useEffect, useState } from 'react'
import Image, { ImageProps } from 'next/image'
import fallbackImage from '/public/images/logo.png'

interface ImageWithFallbackProps extends ImageProps {
  fallback?: ImageProps['src']
}
const ImageWithFallback = ({
  fallback = fallbackImage,
  alt,
  src,
  ...props
}: ImageWithFallbackProps) => {
  const [error, setError] = useState<React.SyntheticEvent<
    HTMLImageElement,
    Event
  > | null>(null)

  useEffect(() => {
    setError(null)
  }, [src])

  return (
    <Image
      alt={alt}
      onError={setError}
      src={error ? fallback : src}
      {...props}
    />
  )
}

export default memo(ImageWithFallback)
