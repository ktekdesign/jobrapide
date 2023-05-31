import React, { memo } from 'react'

import ArchivePost from './archive-post'
import MappedComponent from '@components/loaders/mapped-component'

const ArchiveBody = ({ posts = null }) => (
  <section className="archive-body">
    <MappedComponent items={posts}>
      <ArchivePost />
    </MappedComponent>
  </section>
)

export default memo(ArchiveBody)
