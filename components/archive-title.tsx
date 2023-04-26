import React, { FC, memo } from 'react'
import { isEmpty, isFirstPage } from '@utils/manipulateArray'

const ArchiveTitle: FC<{ title?: string; currentPage?: number }> = ({
  title,
  currentPage,
}) => (
  <h1 className="archive-main-title">
    {title}
    <span
      className={
        isEmpty(currentPage) || isFirstPage(currentPage) ? 'hidden' : ''
      }
    >
      &nbsp;/ Page {currentPage}
    </span>
  </h1>
)

export default memo(ArchiveTitle)
