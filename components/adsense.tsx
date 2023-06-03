import { Adsense as GAdSense } from '@ctrl/react-adsense'
import { memo } from 'react'
const AdSense = (props) => (
  <GAdSense
    className="adsbygoogle"
    style={{ display: 'block' }}
    client="ca-pub-6631438162509513"
    slot="6940028987"
    format="auto"
    data-full-width-responsive="true"
    {...props}
  />
)

export default memo(AdSense)
