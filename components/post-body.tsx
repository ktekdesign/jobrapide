import React, { FC, memo } from 'react'
import parse from 'html-react-parser'

import ComponentsProps from '@utils/interfaces/components'

const PostBody: FC<ComponentsProps> = ({ content, className, ...props }) => (
  <div className={className || 'content'} {...props}>
    {content && parse(content)}
  </div>
)

export default memo(PostBody)
