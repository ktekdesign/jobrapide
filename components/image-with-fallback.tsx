import { useState } from 'react'
import Image from 'next/image'

const ImageWithFallback = ({
  alt,
  src,
  priority = false,
  unoptimized = true,
  ...props
}) => {
  const [logo, setLogo] = useState(src)
  const onError = () => setLogo('/images/logo.webp')

  return (
    <Image {...{ onError, alt, src: logo, priority, unoptimized, ...props }} />
  )
}
export default ImageWithFallback
