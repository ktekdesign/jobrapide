import Pub from '@components/pub'
import Row from '@layout/row'
import SwiperTitle from '@components/swiperTitle'
import SwiperHome from '@components/swiperHome'
import Facebook from '@components/facebook'
import Twitter from '@components/twitter'
import { FC, memo } from 'react'
import { Post } from '@utils/interfaces/data'

interface SidebarProps {
  pub1?: Post[]
  pub3?: Post[]
  sponsored?: Post[]
  partners?: Post[]
}
const Sidebar: FC<SidebarProps> = ({ pub1, pub3, sponsored, partners }) => (
  <>
    <Row>
      <Pub posts={pub1} />
    </Row>
    <Row>
      <SwiperTitle title="Offres sponsorisées" />
      <SwiperHome posts={sponsored} slides={1} />
    </Row>
    <Row>
      <SwiperTitle title="Partenaires" className="title-secondary" />
      <SwiperHome
        posts={partners}
        slides={1}
        onlyImage
        className="image-slider"
      />
    </Row>
    <Row>
      <Pub posts={pub3} />
    </Row>
    <Row>
      <Facebook />
    </Row>
    <Row>
      <Twitter />
    </Row>
  </>
)

export default memo(Sidebar)
