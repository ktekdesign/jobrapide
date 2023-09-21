import { useState } from 'react'
import Image from 'next/image'
import { getOptimizedImageUrl } from '@utils/manipulateArray'

const ImageWithFallback = ({ alt, src, height, width, fill, ...props }) => {
  const [image, setImage] = useState(false)
  const onError = () => setImage(true)

  if (!src) return <></>
  if (image)
    return <Image fill {...{ alt, src, unoptimized: false, ...props }} />
  return (
    <Image
      {...{
        onError,
        alt,
        unoptimized: true,
        src: getOptimizedImageUrl(src),
        width,
        height,
        fill,
        ...props,
      }}
    />
  )
}
export default ImageWithFallback
