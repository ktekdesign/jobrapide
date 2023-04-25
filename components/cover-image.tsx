import { FC, HTMLAttributes, memo } from 'react'
import Image from 'next/image'
import { isEmpty } from '@utils/manipulateArray'
import SeoLink from '@components/seoLink'

interface CoverImageProps extends HTMLAttributes<HTMLElement> {
  title: string
  image: string
  uri?: string
  width?: number
  height?: number
  priority?: boolean
}

const CoverImage: FC<CoverImageProps> = ({
  title,
  image,
  uri,
  width,
  height,
  priority,
  ...props
}) => {
  if (isEmpty(image)) return <></>

  return (
    <SeoLink href={uri || '#'} label={title} as="div" {...props}>
      <picture className="feature">
        <Image
          width={width || 200}
          height={height || 200}
          alt={title}
          src={image}
          priority={priority}
        />
      </picture>
    </SeoLink>
  )
}

export default memo(CoverImage)
