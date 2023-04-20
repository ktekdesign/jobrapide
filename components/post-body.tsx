import React, { memo } from 'react'
import parse from 'html-react-parser'

import styles from '@styles/post-body.module.css'
import { isEmpty } from '@utils/manipulateArray'

const PostBody = ({ children }) => {
  if (isEmpty(children)) return <></>
  return <div className={styles.content}>{parse(children)}</div>
}

export default memo(PostBody)
