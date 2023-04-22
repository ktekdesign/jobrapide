import React, { memo } from 'react'

const Container = ({ children, className = '' }) => {
  return <div className={`${className} inner-container`}>{children}</div>
}
export default memo(Container)
