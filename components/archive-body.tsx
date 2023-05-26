import React, { FC, memo } from 'react'

import ComponentsProps from '@utils/interfaces/components'
import ArchivePost from './archive-post'
import MappedComponent from '@components/loaders/mapped-component'

const ArchiveBody: FC<ComponentsProps> = ({ posts }) => (
  <section className="archive-body">
    <MappedComponent items={posts}>
      <ArchivePost />
    </MappedComponent>
  </section>
)

export default memo(ArchiveBody)
