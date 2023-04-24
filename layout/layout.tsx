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
import SwiperTitle from '@components/swiperTitle'
import { layoutQuery } from '@graphql/layoutQuery'
import { useQuery, gql } from '@apollo/client'
import { getPubs } from '@graphql/api'
import Loading from '@components/loading'

const Layout = ({ children, seo }) => {
  const QUERY = gql`
    ${layoutQuery}
  `

  const { data, loading, error } = useQuery(QUERY)

  const layout = data ? getPubs(data) : null

  return (
    <>
      <Meta seo={seo} />
      <Header />
      <Loading loading={loading} error={error}>
        <div className="pub-in-header">
          <Pub items={layout?.pub2} />
        </div>
      </Loading>
      <main>
        <Column className="left">
          <Row>{children}</Row>
        </Column>
        <Column className="right">
          <Loading loading={loading} error={error}>
            <Row>
              <Pub items={layout?.pub1} />
            </Row>
            <Row>
              <SwiperTitle name="Offres sponsorisées" />
              <SwiperHome items={layout?.sponsored} />
            </Row>
            <Row>
              <SwiperTitle name="Partenaires" className="title-secondary" />
              <ImageSlider items={layout?.partners} />
            </Row>
            <Row>
              <Pub items={layout?.pub3} />
            </Row>
          </Loading>
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
}
export default memo(Layout)
