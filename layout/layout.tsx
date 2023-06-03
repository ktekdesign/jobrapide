import { memo } from 'react'
import Column from '@layout/column'
import Row from '@layout/row'

import Facebook from '@components/facebook'
import Twitter from '@components/twitter'
import GoTop from '@components/gotop'
import ShareButtons from '@components/share-buttons'
import Pub from '@components/pub'
import SwiperHome from '@components/swiperHome'
import NotificationSignal from 'messaging-next'
import AdsenseLoader from '@components/adsense-loader'

const Layout = ({ children, sidebar }) => (
  <>
    <Pub className="pub-in-header" priority posts={sidebar?.pub2} />
    <div className="adsense" />
    <main>
      <Column className="left">{children}</Column>
      <Column className="right">
        <Pub priority className="pub" posts={sidebar?.pub1} />
        <h3 className="title-primary">Offres sponsorisées</h3>
        <SwiperHome slides={1} posts={sidebar?.sponsored} />
        <div className="adsense" />
        <h3 className="title-secondary">Partenaires</h3>
        <SwiperHome slides={1} onlyImage posts={sidebar?.partners} />
        <Pub className="pub" posts={sidebar?.pub3} />
        <Row>
          <Facebook />
        </Row>
        <Row>
          <Twitter />
        </Row>
      </Column>
    </main>
    <div className="adsense" />
    <GoTop />
    <ShareButtons float />
    <NotificationSignal />
    <AdsenseLoader />
  </>
)

export default memo(Layout)
