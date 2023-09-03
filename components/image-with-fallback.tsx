import { useState } from 'react'
import Image from 'next/image'
import { getOptimizedImageUrl } from '@utils/manipulateArray'

const ImageWithFallback = ({ alt, src, ...props }) => {
  const [image, setImage] = useState(getOptimizedImageUrl(src))
  const onError = () => setImage(src)

  return <Image {...{ onError, alt, src: image, ...props }} />
}
export default ImageWithFallback
