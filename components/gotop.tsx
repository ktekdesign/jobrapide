import React from 'react'

const GoTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smoothly scrolling
    })
  }

  return (
    <div
      onClick={scrollToTop}
      className="bg-dark w-10 h-10 rounded-full hover:bg-primary hover:animate-none fixed bottom-10 right-10 z-20 text-white flex items-center justify-center cursor-pointer animate-bounce transition-all duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
        />
      </svg>
    </div>
  )
}

export default React.memo(GoTop)
