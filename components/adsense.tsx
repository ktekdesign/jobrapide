import { Adsense } from '@ctrl/react-adsense'

const GAdSense = ({ variant }: { variant?: string }) => (
  <div className="inner-container row">
    {variant === 'sponsored' ? (
      <Adsense
        client="ca-pub-6631438162509513"
        slot="2682415108"
        style={{ display: 'block' }}
        format="autorelaxed"
      />
    ) : (
      <Adsense
        client="ca-pub-6631438162509513"
        slot="6940028987"
        style={{ display: 'block' }}
        format="auto"
      />
    )}
  </div>
)

export default GAdSense
