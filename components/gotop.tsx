import React from 'react'
import GoTopIcon from '/public/images/gotop.svg'

const GoTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smoothly scrolling
    })
  }

  return (
    <div onClick={scrollToTop} className="go-top">
      <GoTopIcon className="icon" />
    </div>
  )
}

export default React.memo(GoTop)
