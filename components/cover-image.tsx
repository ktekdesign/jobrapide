import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { memo } from 'react'
import { ImageProps } from '../interfaces'
import styles from './cover-image.module.css'

interface Props {
  title: string
  featuredImage: ImageProps
  uri?: string
  className?: string
  width?: number
  height?: number
}

const CoverImage = ({
  title,
  featuredImage,
  uri,
  className,
  width,
  height,
}: Props) => {
  const image = (
    <Image
      width={width || 200}
      height={height || 200}
      alt={title}
      src={featuredImage?.node.sourceUrl}
      className={
        className ||
        cn('shadow-small', {
          'hover:shadow-medium transition-shadow duration-200': className,
        })
      }
    />
  )
  return (
    <div className={!className && `sm:mx-0 ${styles.feature}`}>
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
