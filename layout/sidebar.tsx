import { memo } from 'react'
import Adsense from '@components/adsense'

import Pub from '@components/pub'
import SwiperHome from '@components/swiperHome'

const Sidebar = (props) => (
  <>
    <div className="pub">
      <Pub priority={document?.body?.clientWidth >= 1024} posts={props?.pub1} />
    </div>
    <h3 className="title-primary">Offres sponsorisées</h3>
    <SwiperHome slides={1} posts={props?.sponsored} />
    <div className="adsContainer">
      <Adsense />
    </div>
    <h3 className="title-secondary">Partenaires</h3>
    <Pub className="pub" posts={props?.partners} />
    <Pub className="pub" posts={props?.pub3} />
  </>
)

export default memo(Sidebar)
