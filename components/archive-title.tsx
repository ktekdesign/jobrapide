import React, { FC, memo } from 'react'
import { isFirstPage } from '@utils/manipulateArray'
import Translate from './translate'

const ArchiveTitle: FC<{ title?: string; currentPage?: number }> = ({
  title,
  currentPage,
}) => (
  <h1 className="archive-main-title">
    <Translate text={title} />
    <span className={isFirstPage(currentPage) || !currentPage ? 'hidden' : ''}>
      &nbsp;/ <Translate text={`Page ${currentPage}`} />
    </span>
  </h1>
)

export default memo(ArchiveTitle)
