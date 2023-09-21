import { Suspense, memo } from 'react'
import Adsense from '@components/adsense'

import useSidebar from '@hooks/useSidebar'
import Pub from '@components/pub'
import SwiperHome from '@components/swiperHome'
import { createPortal } from 'react-dom'

const Sidebar = () => {
  const { pub2, pub1, sponsored, partners, pub3 } = useSidebar()
  return (
    <>
      <Suspense>
        {createPortal(
          <Pub className="pub-in-header" posts={pub2} />,
          document.getElementById('pub2')
        )}
      </Suspense>
      <Suspense>
        <Pub className="pub" posts={pub1} />
      </Suspense>
      <h3 className="title-primary">Offres sponsorisées</h3>
      <Suspense>
        <SwiperHome slides={1} posts={sponsored} />
      </Suspense>
      <div className="adsContainer">
        <Adsense />
      </div>
      <h3 className="title-secondary">Partenaires</h3>
      <Suspense>
        <SwiperHome slides={1} onlyImage posts={partners} />
      </Suspense>
      <Suspense>
        <Pub className="pub" posts={pub3} />
      </Suspense>
    </>
  )
}
export default memo(Sidebar)
