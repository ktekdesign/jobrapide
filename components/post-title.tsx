import React, { FC, memo } from 'react'
import parse from 'html-react-parser'
import { isEmpty } from '@utils/manipulateArray'
import ComponentsProps from '@utils/interfaces/components'

const PostTitle: FC<ComponentsProps> = ({ title, ...props }) => {
  if (isEmpty(title)) return <></>
  return (
    <h1 className="post-title" {...props}>
      {parse(title)}
    </h1>
  )
}

export default memo(PostTitle)
