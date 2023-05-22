import { Adsense as GAdSense } from '@ctrl/react-adsense'
import { Suspense, memo } from 'react'

const AdSense = (props) => (
  <Suspense>
    <div className="adsense">
      <GAdSense
        client="ca-pub-6631438162509513"
        slot="6940028987"
        layout="responsive"
        data-full-width-responsive="true"
        style={{
          display: `${
            process.env.NEXT_PUBLIC_SITE_URL === 'https://v2.jobrapide.org'
              ? 'block'
              : 'none'
          }`,
        }}
        format="auto"
        {...props}
      />
    </div>
  </Suspense>
)

export default memo(AdSense)
