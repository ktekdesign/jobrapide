import Footer from '@layout/footer'
import Header from '@layout/header'
import Column from '@layout/column'

import GoTop from '@components/gotop'
import ShareButtons from '@components/share-buttons'
import Facebook from '@components/facebook'
import Twitter from '@components/twitter'
import Row from './row'
import NotificationSignal from 'messaging-next'
import { ErrorBoundary } from 'react-error-boundary'
import GAdSense from '@components/adsense'
import Pub from '@components/pub'
import SwiperSidebar from '@components/swiperSidebar'
import { sidebarQuery } from '@graphql/sidebarQuery'
import { gql, useLazyQuery } from '@apollo/client'
import { memo, useEffect, useState } from 'react'
import { mapPost } from '@utils/mapping'

const Layout = ({ children }) => {
  const GET_SIDEBAR = gql`
    ${sidebarQuery}
  `
  const [loadSidebar] = useLazyQuery(GET_SIDEBAR)
  const [sidebar, setSidebar] = useState(null)
  useEffect(() => {
    loadSidebar().then(({ data }) => {
      const pubs = data.pubs?.nodes?.map((pub) => mapPost(pub))

      const pub1 = pubs?.filter(
        (pub) =>
          pub.categories.findIndex((category) => category.id === 192) !== -1
      )

      const pub2 = pubs?.filter(
        (pub) =>
          pub.categories.findIndex((category) => category.id === 193) !== -1
      )

      const pub3 = pubs?.filter(
        (pub) =>
          pub.categories.findIndex((category) => category.id === 194) !== -1
      )

      const partners = pubs?.filter(
        (pub) =>
          pub.categories.findIndex((category) => category.id === 88) !== -1
      )

      const sponsored = data?.sponsored?.nodes?.map((pub) => mapPost(pub))

      setSidebar({
        pub1,
        pub2,
        pub3,
        partners,
        sponsored,
      })
    })
  }, [loadSidebar])

  return (
    <>
      <Header />
      <Pub className="pub-in-header" posts={sidebar?.pub2} />
      <Row>
        <GAdSense />
      </Row>
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
          <Row>
            <Pub posts={sidebar?.pub1} />
          </Row>
          <Row>
            <SwiperSidebar
              title="Offres sponsorisées"
              posts={sidebar?.sponsored}
            />
          </Row>
          <Row>
            <SwiperSidebar
              onlyImage
              title="Partenaires"
              className="title-secondary"
              posts={sidebar?.partners}
            />
          </Row>
          <Row>
            <Pub posts={sidebar?.pub3} />
          </Row>
          <Row>
            <Facebook />
          </Row>
          <Row>
            <Twitter />
          </Row>
        </Column>
      </main>
      <Row>
        <GAdSense />
      </Row>
      <Footer />
      <GoTop />
      <ShareButtons float />
      <NotificationSignal />
    </>
  )
}

export default memo(Layout)
