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
import ImageSlider from '@components/image-slider'
import { TermType } from '@utils/interfaces'
import SwiperHome from '@components/swiperHome'

const Layout = ({ children, seo }) => (
  <>
    <Meta seo={seo} />
    <Header />

    <main>
      <Column className="left">
        <Row>{children}</Row>
      </Column>
      <Column className="right">
        <Row>
          <SwiperContainer
            term="/recrutement/publicite/pub-niveau-1/"
            component={Pub}
            isPub
          />
        </Row>
        <Row>
          <SwiperContainer
            term="/emploi/sponsorisees/"
            type={TermType.Tag}
            slides={1}
            className="title-primary"
            component={SwiperHome}
          />
        </Row>
        <Row>
          <SwiperContainer
            term="/recrutement/partenaires/"
            component={ImageSlider}
          />
        </Row>
        <Row>
          <SwiperContainer
            term="/recrutement/publicite/pub-niveau-3/"
            component={Pub}
            isPub
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
