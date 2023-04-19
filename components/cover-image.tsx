import { isEmpty } from '@utils/manipulateArray'
import Image from 'next/image'
import Link from 'next/link'
import { memo } from 'react'

interface Props {
  title: string
  image: string
  uri?: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
}

const CoverImage = ({
  title,
  image,
  uri,
  className,
  width,
  height,
  priority,
}: Props) => {
  if (isEmpty(image)) return <></>
  const imageFeature = (
    <Image
      width={width || 200}
      height={height || 200}
      alt={title}
      src={image}
      priority={priority}
      className={className}
    />
  )
  return (
    <div className="sm:mx-0 feature">
      {uri ? (
        <Link href={uri} aria-label={title}>
          {imageFeature}
        </Link>
      ) : (
        imageFeature
      )}
    </div>
  )
}

export default memo(CoverImage)
