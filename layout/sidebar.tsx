import Pub from '@components/pub'
import Row from './row'
import useSidebar from '@hooks/useSidebar'
import SwiperHome from '@components/swiperHome'
import Adsense from '@components/adsense'
import { Suspense } from 'react'

const Sidebar = () => {
  const { pub1, pub3, partners, sponsored, largeScreen } = useSidebar()

  return (
    <>
      <Row>
        <Suspense>
          <Pub
            priority={largeScreen}
            unoptimized={false}
            className="pub"
            posts={pub1}
          />
        </Suspense>
      </Row>
      <Row>
        <h3 className="title-primary">Offres sponsorisées</h3>
        <SwiperHome slides={1} posts={sponsored} />
      </Row>
      <Adsense />
      <Row>
        <h3 className="title-secondary">Partenaires</h3>
        <SwiperHome slides={1} onlyImage posts={partners} />
      </Row>
      <Row>
        <Suspense>
          <Pub className="pub" posts={pub3} />
        </Suspense>
      </Row>
    </>
  )
}

export default Sidebar
