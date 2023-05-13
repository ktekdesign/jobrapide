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
import sidebar from '@utils/data/sidebar.json'

const Layout = ({ children }) => (
  <>
    <Header />
    <Pub className="pub-in-header" posts={sidebar?.pub2} />
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
          <Pub posts={sidebar?.pub1} />
        </Row>
        <Row>
          <SwiperSidebar
            title="Offres sponsorisées"
            posts={sidebar?.sponsored}
          />
        </Row>
        <Row>
          <SwiperSidebar
            onlyImage
            title="Partenaires"
            className="title-secondary"
            posts={sidebar?.partners}
          />
        </Row>
        <Row>
          <Pub posts={sidebar?.pub3} />
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
