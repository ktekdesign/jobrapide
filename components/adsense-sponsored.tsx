import { memo } from 'react'
import AdSense from '@components/adsense'

const SponsoredAdSense = (props) => (
  <AdSense slot="2682415108" format="autorelaxed" {...props} />
)

export default memo(SponsoredAdSense)
