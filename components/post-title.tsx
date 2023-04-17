import React, { memo } from 'react'
import parse from 'html-react-parser'

const PostTitle = ({ children }) => (
  <h1 className="post-title">{parse(children)}</h1>
)

export default memo(PostTitle)
