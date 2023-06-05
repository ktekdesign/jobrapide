import { Suspense, memo } from 'react'

import dynamic from 'next/dynamic'

const Pub = dynamic(() => import('@components/pub'))
const SwiperHome = dynamic(() => import('@components/swiperHome'))

const Sidebar = (props) => (
  <>
    <Suspense>
      <Pub priority className="pub" posts={props?.pub1} />
    </Suspense>
    <h3 className="title-primary">Offres sponsorisées</h3>
    <Suspense>
      <SwiperHome slides={1} posts={props?.sponsored} />
    </Suspense>
    <div className="adsense" />
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
