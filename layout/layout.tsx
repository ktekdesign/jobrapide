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

const Layout = ({ seo, children }) => {
  const QUERY = gql`
    ${layoutQuery}
  `

  const { data, loading, error } = useQuery(QUERY)
  const layoutData = getPubs(data)

  return (
    <>
      <Meta seo={seo} />
      <Header />
      <Loading data={layoutData?.pub2} loading={loading} error={error}>
        <Pub className="pub-in-header" />
      </Loading>
      <main>
        <Column className="left">{children}</Column>
        <Column className="right">
          <Loading data={layoutData?.pub1} loading={loading} error={error}>
            <Pub />
          </Loading>
          <Loading data={layoutData?.sponsored} loading={loading} error={error}>
            <SwiperTitle title="Offres sponsorisées" />
            <SwiperHome />
          </Loading>
          <Loading data={layoutData?.partners} loading={loading} error={error}>
            <SwiperTitle title="Partenaires" className="title-secondary" />
            <ImageSlider />
          </Loading>
          <Loading data={layoutData?.pub3} loading={loading} error={error}>
            <Pub />
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
