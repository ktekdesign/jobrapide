import React, { memo } from 'react'
import parse from 'html-react-parser'

import styles from '@styles/post-body.module.css'
import Container from '@layout/container'

const PostBody = ({ content }) => (
  <Container>
    <div className={styles.content}>{parse(content)}</div>
  </Container>
)

export default memo(PostBody)
