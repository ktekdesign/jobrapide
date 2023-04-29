import React, { memo } from 'react'
import GoTopIcon from '/public/images/gotop.svg'

const GoTop = () => (
  <div
    onClick={() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // for smoothly scrolling
      })
    }}
    className="go-top"
  >
    <GoTopIcon className="icon" />
  </div>
)

export default memo(GoTop)
