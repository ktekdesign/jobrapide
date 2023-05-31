//import { Adsense as GAdSense } from '@ctrl/react-adsense'
import { memo } from 'react'
import StringComponent from '@components/loaders/string-component'
import dynamic from 'next/dynamic'

const GAdSense = dynamic(
  () => import('@ctrl/react-adsense').then((module) => module.Adsense),
  { ssr: false }
)

const AdSense = (props) => (
  <StringComponent
    as="div"
    className="adsense"
    cond={process.env.NEXT_PUBLIC_SITE_URL === 'https://v2.jobrapide.org'}
  >
    <GAdSense
      style={{ display: 'block' }}
      client="ca-pub-6631438162509513"
      slot="6940028987"
      format="auto"
      data-full-width-responsive="true"
      {...props}
    />
  </StringComponent>
)

export default memo(AdSense)
