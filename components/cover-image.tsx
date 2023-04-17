import Image from 'next/image'
import Link from 'next/link'
import { memo } from 'react'
import { ImageProps } from '@utils/interfaces'

interface Props {
  title: string
  featuredImage: ImageProps
  uri?: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
}

const CoverImage = ({
  title,
  featuredImage,
  uri,
  className,
  width,
  height,
  priority,
}: Props) => {
  const image = (
    <Image
      width={width || 200}
      height={height || 200}
      alt={title}
      src={featuredImage?.node.sourceUrl}
      priority={priority}
      className={className}
    />
  )
  return (
    <div className="sm:mx-0 feature">
      {uri ? (
        <Link href={uri} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default memo(CoverImage)
