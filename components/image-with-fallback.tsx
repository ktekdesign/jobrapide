import { useState } from 'react'
import Image from 'next/image'
import { getOptimizedImageUrl } from '@utils/manipulateArray'

const ImageWithFallback = ({ alt, src, ...props }) => {
  const [image, setImage] = useState(false)
  const onError = () => setImage(true)

  if (!src) return <></>
  if (image) return <Image {...{ alt, src, ...props }} />
  return (
    <Image {...{ onError, alt, src: getOptimizedImageUrl(src), ...props }} />
  )
}
export default ImageWithFallback
