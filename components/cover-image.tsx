import { FC, memo } from 'react'
import Image from 'next/image'
import { isEmpty } from '@utils/manipulateArray'
import SeoLink from '@components/seoLink'

interface Props {
  title: string
  image: string
  uri?: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
}

const CoverImage: FC<Props> = ({
  title,
  image,
  uri,
  className,
  width,
  height,
  priority,
}) => {
  if (isEmpty(image)) return <></>

  return (
    <div className="feature">
      <SeoLink href={uri || '#'} label={title}>
        <Image
          width={width || 200}
          height={height || 200}
          alt={title}
          src={image}
          priority={priority}
          className={className}
        />
      </SeoLink>
    </div>
  )
}

export default memo(CoverImage)
