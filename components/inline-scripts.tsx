import { memo } from 'react'
import Script from 'next/script'
import LoaderComponent from '@components/loaders/loader'

const InlineScripts = ({ nonce = process.env.nonce }) => (
  <LoaderComponent
    cond={process.env.NEXT_PUBLIC_SITE_URL === 'https://v2.jobrapide.org'}
    nonce={nonce}
  >
    <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
    <Script src="https://www.googletagmanager.com/gtag/js?id=GTM-W66949R" />
    <Script src="/scripts.js" />
    <Script src="/bet.js" />
  </LoaderComponent>
)

export default memo(InlineScripts)
