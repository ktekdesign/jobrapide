import React, { FC, memo } from 'react'
import parse from 'html-react-parser'
import ComponentsProps from '@utils/interfaces/components'

const PostTitle: FC<ComponentsProps> = ({ title, ...props }) => (
  <h1 className="post-title" {...props}>
    {title && parse(title)}
  </h1>
)

export default memo(PostTitle)
