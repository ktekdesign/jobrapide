import React, { memo } from 'react'

import Footer from '@layout/footer'
import Header from '@layout/header'
import Column from '@layout/column'
import Row from '@layout/row'

import Meta from '@components/meta'
import Facebook from '@components/facebook'
import Pub from '@components/pub'
import GoTop from '@components/gotop'
import Twitter from '@components/twitter'
import ImageSlider from '@components/image-slider'
import SwiperHome from '@components/swiperHome'
import ShareButtons from '@components/share-buttons'

const Layout = ({ children, seo, pubs, partners, sponsored }) => (
  <>
    <Meta seo={seo} />
    <Header pub={pubs?.pub2} />

    <main>
      <Column className="left">
        <Row>{children}</Row>
      </Column>
      <Column className="right">
        <Row>
          <Pub items={pubs?.pub1} />
        </Row>
        <Row>
          <SwiperHome
            items={sponsored}
            name="Offres sponsorisées"
            className="title-primary"
          />
        </Row>
        <Row>
          <ImageSlider items={partners} name="Partenaires" />
        </Row>
        <Row>
          <Pub items={pubs?.pub3} />
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
    <ShareButtons float />
  </>
)
export default memo(Layout)
