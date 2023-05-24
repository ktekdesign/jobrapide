import { Adsense as GAdSense } from '@ctrl/react-adsense'
import { Suspense, memo } from 'react'
import ConditionalComponent from '@components/loaders/conditional-component'

const AdSense = (props) => (
  <Suspense>
    <ConditionalComponent
      cond={process.env.NEXT_PUBLIC_SITE_URL === 'https://v2.jobrapide.org'}
      className="adsense"
    >
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
    </ConditionalComponent>
  </Suspense>
)

export default memo(AdSense)
