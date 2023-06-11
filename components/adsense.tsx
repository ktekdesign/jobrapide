import Script from 'next/script'
import { memo, useId } from 'react'

const AdSense = (props) => (
  <>
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-6631438162509513"
      data-ad-slot="6940028987"
      data-ad-format="auto"
      data-full-width-responsive="true"
      {...props}
    />
    <Script id={useId()}>
      {`(adsbygoogle = window.adsbygoogle || []).push({});`}
    </Script>
  </>
)

export default memo(AdSense)
