import React, { memo } from 'react'

const Container = ({ children, className = '' }) => {
  return <div className={`inner-container ${className}`}>{children}</div>
}
export default memo(Container)
