import React, { FC, memo } from 'react'

import ComponentsProps from '@utils/interfaces/components'
import ArchivePost from './archive-post'

const ArchiveBody: FC<ComponentsProps> = ({ posts }) => (
  <section className="archive-body">
    {posts.map((post, key) => (
      <ArchivePost {...post} priority={key < 2} key={key} />
    ))}
  </section>
)

export default memo(ArchiveBody)
