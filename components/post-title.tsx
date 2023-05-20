import React, { FC, memo } from 'react'
import ComponentsProps from '@utils/interfaces/components'
import Translate from './translate'

const PostTitle: FC<ComponentsProps> = ({ title, ...props }) => (
  <h1 className="post-title" {...props}>
    <Translate text={title} />
  </h1>
)

export default memo(PostTitle)
