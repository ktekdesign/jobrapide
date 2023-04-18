import React, { memo } from 'react'
import parse from 'html-react-parser'
import { isFirstPage } from '@utils/manipulateArray'

const ArchiveTitle = ({ children, currentPage = 1 }) => (
  <h1 className="archive-main-title">
    {parse(children)}
    {!isFirstPage(currentPage) && ` / Page ${currentPage}`}
  </h1>
)

export default memo(ArchiveTitle)
