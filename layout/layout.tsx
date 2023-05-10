import React from 'react'

import Footer from '@layout/footer'
import Header from '@layout/header'
import Column from '@layout/column'

import GoTop from '@components/gotop'
import ShareButtons from '@components/share-buttons'
import Sidebar from './sidebar'
import Facebook from '@components/facebook'
import Twitter from '@components/twitter'
import Row from './row'
import SidebarHeader from './sidebarHeader'
import NotificationSignal from 'messaging-next'
import { ErrorBoundary } from 'react-error-boundary'
import Adsense from '@components/adsense'

const Layout = ({ children }) => (
  <>
    <Header />
    <SidebarHeader />
    <Adsense />
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
        <Sidebar />
        <Adsense />
        <Row>
          <Facebook />
        </Row>
        <Row>
          <Twitter />
        </Row>
      </Column>
    </main>
    <Adsense />
    <Footer />
    <GoTop />
    <ShareButtons float />
    <NotificationSignal />
  </>
)

export default Layout
