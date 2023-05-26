import React, { FC, memo } from 'react'
import ComponentsProps from '@utils/interfaces/components'
import ParsedComponent from './parsed-component'

const PostTitle: FC<ComponentsProps> = ({ title, ...props }) => (
  <ParsedComponent as="h1" className="post-title" title={title} {...props} />
)

export default memo(PostTitle)
