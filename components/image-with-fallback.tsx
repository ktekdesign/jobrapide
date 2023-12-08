import { useState } from 'react'
import Image from 'next/image'
import { getOptimizedImageUrl } from '@utils/manipulateArray'

const blurDataURL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mP8sdn4DAMRgHFUIX0VAgBFshqvDJzWpAAAAABJRU5ErkJggg=='

const ImageWithFallback = ({ alt, src, height, width, fill, ...props }) => {
  const [image, setImage] = useState(false)
  const onError = () => setImage(true)

  if (!src) return <></>
  if (image)
    return (
      <Image
        fill
        {...{
          alt,
          src,
          placeholder: 'blur',
          blurDataURL,
          unoptimized: false,
          ...props,
        }}
      />
    )
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
        placeholder: 'blur',
        blurDataURL,
        ...props,
      }}
    />
  )
}
export default ImageWithFallback
