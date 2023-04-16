import React, { memo } from 'react'

const Column = ({ children, left = false, right = false, className = '' }) => {
  const outputClasses = left
    ? 'lg:w-3/4'
    : right
    ? 'lg:w-1/4 gap-4 flex flex-col items-center'
    : className

  return (
    <div className={`container w-full mx-auto ${outputClasses}`}>
      <div className="w-full lg:px-2">{children}</div>
    </div>
  )
}

export default memo(Column)
