import React, { memo } from 'react'

const Column = ({ children, className = '' }) => (
  <div className={className}>{children}</div>
)

export default memo(Column)
