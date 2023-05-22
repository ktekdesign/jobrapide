import React, { FC, memo } from 'react'
import ComponentsProps from '@utils/interfaces/components'
import parse from 'html-react-parser'

const PostTitle: FC<ComponentsProps> = ({ title, ...props }) => (
  <h1 className="post-title" {...props}>
    {title && parse(title)}
  </h1>
)

export default memo(PostTitle)
