import React, { memo } from 'react'

import Footer from '@layout/footer'
import Header from '@layout/header'
import Column from '@layout/column'

import Meta from '@components/meta'
import Pub from '@components/pub'
import GoTop from '@components/gotop'
import ShareButtons from '@components/share-buttons'
import { layoutQuery } from '@graphql/layoutQuery'
import { useQuery, gql } from '@apollo/client'
import { getPubs } from '@graphql/api'
import Loading from '@components/loading'
import Sidebar from './sidebar'

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
      <Loading
        data={{ posts: layoutData?.pub2 }}
        loading={loading}
        error={error}
      >
        <Pub className="pub-in-header" />
      </Loading>
      <main>
        <Column className="left">{children}</Column>
        <Column className="right">
          <Loading data={...layoutData} loading={loading} error={error}>
            <Sidebar />
          </Loading>
        </Column>
      </main>
      <Footer />
      <GoTop />
      <ShareButtons float />
    </>
  )
}
export default memo(Layout)
