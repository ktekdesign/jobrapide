import React, { memo } from 'react'

import Footer from '@layout/footer'
import Header from '@layout/header'
import Column from '@layout/column'
import Row from '@layout/row'

import Meta from '@components/meta'
import Facebook from '@components/facebook'
import Pub from '@components/pub'
import SwiperContainer from '@components/swiperContainer'
import GoTop from '@components/gotop'
import Twitter from '@components/twitter'

const Layout = ({ children }) => (
  <>
    <Meta />
    <Header />

    <main>
      <Column className="left">
        <Row>{children}</Row>
      </Column>
      <Column className="right">
        <Row>
          <Pub
            term="/recrutement/publicite/pub-niveau-1/"
            width={320}
            height={250}
          />
        </Row>
        <Row>
          <SwiperContainer
            term="/emploi/sponsorisees/"
            type="tag"
            slides={1}
            className="title-primary"
          />
        </Row>
        <Row>
          <Pub term="/recrutement/publicite/partenaires/" withTitle />
        </Row>
        <Row>
          <Pub
            term="/recrutement/publicite/pub-niveau-3/"
            width={320}
            height={250}
          />
        </Row>
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
  </>
)
export default memo(Layout)
