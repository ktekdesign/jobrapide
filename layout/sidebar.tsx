import { Suspense, memo } from 'react'

import dynamic from 'next/dynamic'

const Pub = dynamic(() => import('@components/pub'), { ssr: false })
const SwiperHome = dynamic(() => import('@components/swiperHome'), {
  ssr: false,
})
const FloatComponent = dynamic(() => import('@components/floatComponents'), {
  ssr: false,
})

const Sidebar = ({ sidebar }) => (
  <>
    <Suspense>
      <Pub priority className="pub" posts={sidebar?.pub1} />
    </Suspense>
    <h3 className="title-primary">Offres sponsorisées</h3>
    <Suspense>
      <SwiperHome slides={1} posts={sidebar?.sponsored} />
    </Suspense>
    <div className="adsense" />
    <h3 className="title-secondary">Partenaires</h3>
    <Suspense>
      <SwiperHome slides={1} onlyImage posts={sidebar?.partners} />
    </Suspense>
    <Suspense>
      <Pub className="pub" posts={sidebar?.pub3} />
    </Suspense>
    <Suspense>
      <FloatComponent />
    </Suspense>
  </>
)

export default memo(Sidebar)
