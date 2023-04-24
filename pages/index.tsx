import Layout from '@layout/layout'
import Column from '@layout/column'
import Container from '@layout/container'

import SwiperContainer from '@components/swiperContainer'

import { getPage } from '@graphql/api'
import addLayoutData from '@utils/addLayoutData'

import client from '@graphql/client'
import {
  queryActualite,
  queryAppel,
  queryAvis,
  queryBourse,
  queryCall,
  queryConcours,
  queryFormation,
  queryStage,
  queryVolontaire,
} from '@graphql/homeQueries'

export const getStaticProps = async () => {
  const page = await getPage('/', client)
  const layout = await addLayoutData(page)
  return layout
}
export default function Index(props) {
  return (
    <Layout {...props.layout}>
      <Container>
        <Column className="w-full">
          <SwiperContainer query={queryAvis} />
        </Column>
      </Container>
      <Container className="lg:pr-4">
        <Column className="lg:w-1/3 mb-4 lg:mb-0">
          <SwiperContainer
            query={queryStage}
            slides={1}
            className="title-secondary"
          />
        </Column>
        <Column className="lg:w-2/3">
          <SwiperContainer
            query={queryBourse}
            slides={2}
            className="title-secondary"
          />
        </Column>
      </Container>
      <Container className="lg:pr-4">
        <Column className="lg:w-2/3 mb-4 lg:mb-0">
          <SwiperContainer query={queryAppel} slides={2} />
        </Column>
        <Column className="lg:w-1/3">
          <SwiperContainer query={queryCall} slides={1} />
        </Column>
      </Container>
      <Container className="lg:pr-4">
        <Column className="lg:w-1/3 mb-4 lg:mb-0">
          <SwiperContainer
            query={queryConcours}
            slides={1}
            className="title-secondary"
          />
        </Column>
        <Column className="lg:w-2/3">
          <SwiperContainer
            query={queryFormation}
            slides={2}
            className="title-secondary"
          />
        </Column>
      </Container>
      <Container className="lg:pr-4">
        <Column className="lg:w-2/3 mb-4 lg:mb-0">
          <SwiperContainer query={queryActualite} slides={2} />
        </Column>
        <Column className="lg:w-1/3">
          <SwiperContainer query={queryVolontaire} slides={1} />
        </Column>
      </Container>
    </Layout>
  )
}
