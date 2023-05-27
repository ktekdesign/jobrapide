import { Adsense as GAdSense } from '@ctrl/react-adsense'
import { Suspense, memo } from 'react'
import StringComponent from '@components/loaders/string-component'

const AdSense = (props) => (
  <div className="adsense">
    <StringComponent
      cond={process.env.NEXT_PUBLIC_SITE_URL === 'https://v2.jobrapide.org'}
    >
      <Suspense>
        <GAdSense
          client="ca-pub-6631438162509513"
          slot="6940028987"
          layout="responsive"
          data-full-width-responsive="true"
          style={{
            display: 'block',
          }}
          format="auto"
          {...props}
        />
      </Suspense>
    </StringComponent>
  </div>
)

export default memo(AdSense)
