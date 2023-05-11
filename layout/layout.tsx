import Footer from '@layout/footer'
import Header from '@layout/header'
import Column from '@layout/column'

import GoTop from '@components/gotop'
import ShareButtons from '@components/share-buttons'
import Facebook from '@components/facebook'
import Twitter from '@components/twitter'
import Row from './row'
import NotificationSignal from 'messaging-next'
import { ErrorBoundary } from 'react-error-boundary'
import GAdSense from '@components/adsense'
import Pub from '@components/pub'
import SwiperSidebar from '@components/swiperSidebar'
import Meta from '@components/meta'
import defaultSeo from '@utils/data/seo.json'

const Layout = ({ children, layout }) => (
  <>
    <Meta seo={layout?.seo ?? defaultSeo} />
    <Header />
    <Pub className="pub-in-header" posts={layout?.pub2} />
    <GAdSense />
    <main>
      <Column className="left">
        <ErrorBoundary
          fallback={
            <div>
              Il s&apos;est produit une erreur. Veuiller actualiser la page.
            </div>
          }
        >
          {children}
        </ErrorBoundary>
      </Column>
      <Column className="right">
        <Row>
          <Pub posts={layout?.pub1} />
        </Row>
        <Row>
          <SwiperSidebar
            title="Offres sponsorisées"
            posts={layout?.sponsored}
          />
        </Row>
        <Row>
          <SwiperSidebar
            onlyImage
            title="Partenaires"
            className="title-secondary"
            posts={layout?.partners}
          />
        </Row>
        <Row>
          <Pub posts={layout?.pub3} />
        </Row>
        <Row>
          <Facebook />
        </Row>
        <Row>
          <Twitter />
        </Row>
      </Column>
    </main>
    <GAdSense />
    <Footer />
    <GoTop />
    <ShareButtons float />
    <NotificationSignal />
  </>
)

export default Layout
