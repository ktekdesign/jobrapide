import { Suspense, memo } from 'react'
import Adsense from '@components/adsense'

import dynamic from 'next/dynamic'

const Pub = dynamic(() => import('@components/pub'))
const Pub2 = dynamic(() => import('@components/pub2'), { ssr: false })
const SwiperHome = dynamic(() => import('@components/swiperHome'))

const Sidebar = (props) => (
  <>
    <div className="pub">
      <Suspense>
        <Pub2 posts={props?.pub1} />
      </Suspense>
    </div>
    <h3 className="title-primary">Offres sponsorisées</h3>
    <Suspense>
      <SwiperHome slides={1} posts={props?.sponsored} />
    </Suspense>
    <div className="adsContainer">
      <Adsense />
    </div>
    <h3 className="title-secondary">Partenaires</h3>
    <Suspense>
      <SwiperHome slides={1} onlyImage posts={props?.partners} />
    </Suspense>
    <Suspense>
      <Pub className="pub" posts={props?.pub3} />
    </Suspense>
  </>
)

export default memo(Sidebar)
