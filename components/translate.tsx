import Script from 'next/script'
import { memo, useEffect, useState } from 'react'

const Translate = ({ nonce = process.env.nonce }) => {
  const [ref, setRef] = useState(null)

  useEffect(() => {
    window.addEventListener('scroll', () => setRef(true))
  })

  return (
    ref && (
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        nonce={nonce}
        defer
      />
    )
  )
}

export default memo(Translate)
