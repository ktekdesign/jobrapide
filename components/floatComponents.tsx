import { memo, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const ShareButtons = dynamic(() => import('@components/share-buttons'), {
  ssr: false,
})
const GoTop = dynamic(() => import('@components/gotop'), { ssr: false })
const Script = dynamic(() => import('next/script'), { ssr: false })

const FloatComponent = ({ nonce = process.env.nonce }) => {
  const [scrolled, setScrolled] = useState(null)

  useEffect(() => {
    window.addEventListener('scroll', () => setScrolled(true))
  })

  return (
    scrolled && (
      <>
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          nonce={nonce}
          defer
        />
        <ShareButtons float />
        <GoTop />
      </>
    )
  )
}

export default memo(FloatComponent)
