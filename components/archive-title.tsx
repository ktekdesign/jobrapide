import React, { FC, ReactNode, memo } from 'react'
import { isFirstPage } from '@utils/manipulateArray'

const ArchiveTitle: FC<{ children: ReactNode; currentPage?: number }> = ({
  children,
  currentPage,
}) => (
  <h1 className="archive-main-title">
    {children}
    <span className={isFirstPage(currentPage) ? 'hidden' : ''}>
      &nbsp;/ Page {currentPage}
    </span>
  </h1>
)

export default memo(ArchiveTitle)
