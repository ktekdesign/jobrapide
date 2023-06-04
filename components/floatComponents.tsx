import { Suspense, memo, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const ShareButtons = dynamic(() => import('@components/share-buttons'), {
  ssr: false,
})
const GoTop = dynamic(() => import('@components/gotop'), { ssr: false })
const Script = dynamic(() => import('next/script'), { ssr: false })
const DeferredLoader = dynamic(() => import('@components/deferred-loader'), {
  ssr: false,
})

const FloatComponent = ({ nonce = process.env.nonce }) => {
  const [ref, setRef] = useState(null)

  useEffect(() => {
    window.addEventListener('scroll', () => setRef(true))
  })

  return (
    ref && (
      <Suspense>
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          nonce={nonce}
          async
        />
        <ShareButtons float />
        <GoTop />
        <DeferredLoader />
      </Suspense>
    )
  )
}

export default memo(FloatComponent)
