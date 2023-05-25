import { Suspense, memo } from 'react'
import Footer from '@layout/footer'
import Header from '@layout/header'
import Column from '@layout/column'
import Row from '@layout/row'
import Sidebar from '@layout/sidebar'

import Facebook from '@components/facebook'
import Twitter from '@components/twitter'

import ShareButtons from '@components/share-buttons'
import NotificationSignal from 'messaging-next'
import GoTop from '@components/gotop'
import AdSense from '@components/adsense'
import PubHeader from '@components/pub-header'

const Layout = ({ children }) => (
  <>
    <Suspense>
      <Header />
      <PubHeader />
      <AdSense />
    </Suspense>
    <main>
      <Column className="left">{children}</Column>
      <Column className="right">
        <Suspense>
          <Sidebar />
          <Row>
            <Facebook />
          </Row>
          <Row>
            <Twitter />
          </Row>
        </Suspense>
      </Column>
    </main>
    <Suspense>
      <AdSense />
      <GoTop />
      <ShareButtons float />
      <NotificationSignal />
      <Footer />
    </Suspense>
  </>
)

export default memo(Layout)
