import { Adsense } from '@ctrl/react-adsense'
import { memo } from 'react'

const GAdSense = ({ variant }: { variant?: string }) => {
  if (process.env.NEXT_PUBLIC_SITE_URL !== 'https://v2.jobrapide.org')
    return <></>
  return (
    <div className="adsense">
      <Adsense
        client="ca-pub-6631438162509513"
        slot={variant === 'sponsored' ? '2682415108' : '6940028987'}
        style={{ display: 'block' }}
        format={variant === 'sponsored' ? 'autorelaxed' : 'auto'}
      />
    </div>
  )
}

export default memo(GAdSense)
