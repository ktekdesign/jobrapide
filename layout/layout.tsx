import { Suspense, memo } from 'react'
import Footer from '@layout/footer'
import Header from '@layout/header'
import Column from '@layout/column'
import Row from '@layout/row'

import Facebook from '@components/facebook'
import Twitter from '@components/twitter'
import GoTop from '@components/gotop'
import Adsense from '@components/adsense'
import InlineScripts from '@components/inline-scripts'
import ShareButtons from '@components/share-buttons'
import Pub from '@components/pub'
import SwiperHome from '@components/swiperHome'
import NotificationSignal from 'messaging-next'

const Layout = ({ children, route, sidebar }) => (
  <Suspense>
    <InlineScripts nonce="jobrapidenoneForce" />
    <Header route={route} />
    <Pub
      className="pub-in-header"
      priority
      unoptimized={false}
      posts={sidebar?.pub2}
    />
    <Adsense />
    <main>
      <Column className="left">{children}</Column>
      <Column className="right">
        <Row>
          <Pub
            priority
            unoptimized={false}
            className="pub"
            posts={sidebar?.pub1}
          />
        </Row>
        <Row>
          <h3 className="title-primary">Offres sponsorisées</h3>
          <SwiperHome slides={1} posts={sidebar?.sponsored} />
        </Row>
        <Adsense />
        <Row>
          <h3 className="title-secondary">Partenaires</h3>
          <SwiperHome slides={1} onlyImage posts={sidebar?.partners} />
        </Row>
        <Row>
          <Pub className="pub" posts={sidebar?.pub3} />
        </Row>
        <Row>
          <Facebook />
        </Row>
        <Row>
          <Twitter />
        </Row>
      </Column>
    </main>
    <Adsense />
    <Footer route={route} />
    <GoTop />
    <ShareButtons float />
    <NotificationSignal />
  </Suspense>
)

export default memo(Layout)
