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
import { isEmpty } from '@utils/manipulateArray'

const Layout = ({ layout, children, ...props }) => {
  const QUERY = gql`
    ${layoutQuery}
  `

  const { data, loading, error } = useQuery(QUERY)

  const layoutPosts = getPubs(data)

  return (
    <>
      <Meta seo={layout?.seo} />
      <Header />
      <Loading data={layoutPosts?.pub2} loading={loading} error={error}>
        <Pub className="pub-in-header" />
      </Loading>
      <main>
        <Column className="left">
          <Row>
            <Loading
              data={{ breadcrumbs: layout?.seo?.breadcrumbs, ...props }}
              loading={isEmpty(props)}
            >
              {children}
            </Loading>
          </Row>
        </Column>
        <Column className="right">
          <Loading data={layoutPosts?.pub1} loading={loading} error={error}>
            <Pub className="row" />
          </Loading>
          <Loading
            data={layoutPosts?.sponsored}
            loading={loading}
            error={error}
          >
            <SwiperTitle name="Offres sponsorisées" />
            <SwiperHome className="row" />
          </Loading>
          <Loading data={layoutPosts?.partners} loading={loading} error={error}>
            <SwiperTitle name="Partenaires" className="title-secondary" />
            <ImageSlider className="row" />
          </Loading>
          <Loading data={layoutPosts?.pub3} loading={loading} error={error}>
            <Pub className="row" />
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
