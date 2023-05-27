import { Suspense, memo } from 'react'
import StringComponent from './loaders/string-component'
import Script from 'next/script'

const AdSense = (props) => (
  <Suspense>
    <StringComponent
      as="div"
      className="adsense"
      cond={process.env.NEXT_PUBLIC_SITE_URL === 'https://v2.jobrapide.org'}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-6631438162509513"
        data-ad-slot="6940028987"
        data-ad-format="auto"
        data-ad-layout="responsive"
        data-full-width-responsive="true"
        {...props}
      />
      <Script id="google-adsense" nonce="jobrapidenoneForce">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
    </StringComponent>
  </Suspense>
)

export default memo(AdSense)
