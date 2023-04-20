import React, { memo } from 'react'
import parse from 'html-react-parser'
import { isEmpty } from '@utils/manipulateArray'

const PostTitle = ({ children }) => {
  if (isEmpty(children)) return <></>
  return <h1 className="post-title">{parse(children)}</h1>
}

export default memo(PostTitle)
