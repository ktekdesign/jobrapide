import React, { FC, memo } from 'react'
import ComponentsProps from '@utils/interfaces/components'
import ParsedComponent from './parsed-component'

const PostTitle: FC<ComponentsProps> = ({ title, ...props }) => (
  <h1 className="post-title" {...props}>
    <ParsedComponent title={title} />
  </h1>
)

export default memo(PostTitle)
