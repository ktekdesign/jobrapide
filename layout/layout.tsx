import { Suspense, memo } from 'react'
import Footer from '@layout/footer'
import Header from '@layout/header'
import Column from '@layout/column'
import Row from '@layout/row'

import Facebook from '@components/facebook'
import Twitter from '@components/twitter'

import NotificationSignal from 'messaging-next'
import GoTop from '@components/gotop'
import AdSense from '@components/adsense'
import dynamic from 'next/dynamic'

const Sidebar = dynamic(() => import('@layout/sidebar'))
const InlineScripts = dynamic(() => import('@components/inline-scripts'))
const PubHeader = dynamic(() => import('@components/pub-header'))
const ShareButtons = dynamic(() => import('@components/share-buttons'))

const Layout = ({ children }) => (
  <>
    <Suspense>
      <InlineScripts nonce="jobrapidenoneForce" />
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
