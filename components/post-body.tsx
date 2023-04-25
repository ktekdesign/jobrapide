import React, { FC, HTMLAttributes, memo } from 'react'
import parse from 'html-react-parser'

import { isEmpty } from '@utils/manipulateArray'

interface PostBodyProps extends HTMLAttributes<HTMLElement> {
  body: string
  className?: string
}
const PostBody: FC<PostBodyProps> = ({ body, className, ...props }) => {
  if (isEmpty(body)) return <></>
  return (
    <div className={className || 'content'} {...props}>
      {parse(body)}
    </div>
  )
}

export default memo(PostBody)
