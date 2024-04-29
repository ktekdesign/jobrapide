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
    <Script
      async
      src="https://fundingchoicesmessages.google.com/i/pub-6631438162509513?ers=1"
    />
    <Script src="/scripts.js" />
    <Script src="/bet-modal.js" />
    <Script src="/consent.js" />
  </LoaderComponent>
)

export default memo(InlineScripts)
