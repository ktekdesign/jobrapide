import React, { FC, memo } from 'react'

import ComponentsProps from '@utils/interfaces/components'
import Translate from './translate'

const PostBody: FC<ComponentsProps> = ({ content, className, ...props }) => (
  <div className={className || 'content'} {...props}>
    <Translate text={content} />
  </div>
)

export default memo(PostBody)
