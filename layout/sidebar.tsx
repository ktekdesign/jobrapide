import Pub from '@components/pub'
import Row from './row'
import useSidebar from '@hooks/useSidebar'
import SwiperHome from '@components/swiperHome'
import Adsense from '@components/adsense'

const Sidebar = () => {
  const { pub1, pub3, partners, sponsored, largeScreen } = useSidebar()

  return (
    <>
      <Row>
        <Pub
          priority={largeScreen}
          unoptimized={false}
          className="pub"
          posts={pub1}
        />
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
        <Pub className="pub" posts={pub3} />
      </Row>
    </>
  )
}

export default Sidebar
