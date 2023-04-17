import React, { memo } from 'react'

const Row = ({ children, className = '' }) => (
  <div className={`row ${className}`}>{children}</div>
)

export default memo(Row)
