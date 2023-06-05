import React, { FC, memo } from 'react'
import StringComponent from './loaders/string-component'

const ArchiveTitle: FC<{ title?: string; currentPage?: number }> = ({
  title,
  currentPage,
}) => (
  <h1 className="archive-main-title">
    {title}
    <StringComponent cond={currentPage > 1}>
      &nbsp;/ {`Page ${currentPage}`}
    </StringComponent>
  </h1>
)

export default memo(ArchiveTitle)
