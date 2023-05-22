import React, { FC, memo } from 'react'

import ComponentsProps from '@utils/interfaces/components'
import parse from 'html-react-parser'

const PostBody: FC<ComponentsProps> = ({ content, ...props }) => (
  <div className="content" {...props}>
    {content && parse(content)}
  </div>
)

export default memo(PostBody)
