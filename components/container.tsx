import React, { memo } from 'react'

const Container = ({ children, className = '' }) => {
  return (
    <div
      className={`flex flex-col mb-4 container justify-between mx-auto lg:flex-row ${className}`}
    >
      {children}
    </div>
  )
}
export default memo(Container)
