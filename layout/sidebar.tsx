import Pub from '@components/pub'
import SwiperSidebar from '@components/swiperSidebar'
import Row from './row'
import useSidebar from '@hooks/useSidebar'

const Sidebar = () => {
  const { pub1, pub3, partners, sponsored } = useSidebar()

  return (
    <>
      <Row>
        <Pub className="pub" posts={pub1} />
      </Row>
      <Row>
        <SwiperSidebar title="Offres sponsorisées" posts={sponsored} />
      </Row>
      <Row>
        <SwiperSidebar
          onlyImage
          title="Partenaires"
          className="title-secondary"
          posts={partners}
        />
      </Row>
      <Row>
        <Pub className="pub" posts={pub3} />
      </Row>
    </>
  )
}

export default Sidebar
