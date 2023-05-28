import { Suspense, memo } from 'react'
import Footer from '@layout/footer'
import Header from '@layout/header'
import Column from '@layout/column'
import Row from '@layout/row'

import Facebook from '@components/facebook'
import Twitter from '@components/twitter'

import NotificationSignal from 'messaging-next'
import GoTop from '@components/gotop'
import Adsense from '@components/adsense'
import Sidebar from '@layout/sidebar'
import InlineScripts from '@components/inline-scripts'
import PubHeader from '@components/pub-header'
import ShareButtons from '@components/share-buttons'

const Layout = ({ children }) => (
  <>
    <InlineScripts nonce="jobrapidenoneForce" />
    <Header />
    <PubHeader />
    <Adsense />
    <main>
      <Column className="left">{children}</Column>
      <Column className="right">
        <Sidebar />
        <Row>
          <Facebook />
        </Row>
        <Row>
          <Twitter />
        </Row>
      </Column>
    </main>
    <Adsense />
    <GoTop />
    <Suspense>
      <ShareButtons float />
    </Suspense>
    <NotificationSignal />
    <Footer />
  </>
)

export default memo(Layout)
