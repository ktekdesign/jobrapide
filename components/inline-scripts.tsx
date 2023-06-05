import dynamic from 'next/dynamic'
import { memo } from 'react'
const Script = dynamic(() => import('next/script'), { ssr: false })
const LoaderComponent = dynamic(() => import('@components/loaders/loader'), {
  ssr: false,
})

const InlineScripts = ({ nonce = process.env.nonce }) => (
  <LoaderComponent
    cond={process.env.NEXT_PUBLIC_SITE_URL === 'https://v2.jobrapide.org'}
    nonce={nonce}
    defer
  >
    <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
    <Script src="https://www.googletagmanager.com/gtag/js?id=GTM-W66949R" />
    <Script src="/scripts.js" />
  </LoaderComponent>
)

export default memo(InlineScripts)
