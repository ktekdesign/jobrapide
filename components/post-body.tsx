import React, { FC, memo } from 'react'
import parse from 'html-react-parser'

import { isEmpty } from '@utils/manipulateArray'
import ComponentsProps from '@utils/interfaces/components'

const PostBody: FC<ComponentsProps> = ({ content, className, ...props }) => {
  if (isEmpty(content)) return <></>
  return (
    <div className={className || 'content'} {...props}>
      {parse(content)}
    </div>
  )
}

export default memo(PostBody)
