import React, { memo } from 'react'

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

const Layout = ({ children }) => (
  <>
    <Header />
    <SidebarHeader />
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
    <Footer />
    <GoTop />
    <ShareButtons float />
  </>
)

export default memo(Layout)
