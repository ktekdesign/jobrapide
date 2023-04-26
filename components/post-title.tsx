import React, { memo } from 'react'
import parse from 'html-react-parser'
import { isEmpty } from '@utils/manipulateArray'

const PostTitle = ({ title }) => {
  if (isEmpty(title)) return <></>
  return <h1 className="post-title">{parse(title)}</h1>
}

export default memo(PostTitle)
