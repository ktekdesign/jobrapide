import React, { memo } from 'react'
import parse from 'html-react-parser'
import styles from './post-body.module.css'

const PostBody = ({ content }) => {
  return (
    <div className="max-w-2xl">
      <div className={styles.content}>{parse(content)}</div>
    </div>
  )
}

export default memo(PostBody)
