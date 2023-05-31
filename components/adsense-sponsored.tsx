import { memo } from 'react'
import AdSense from '@components/adsense'

const SponsoredAdSense = (props) => (
  <AdSense data-ad-slot="2682415108" data-ad-format="autorelaxed" {...props} />
)

export default memo(SponsoredAdSense)
