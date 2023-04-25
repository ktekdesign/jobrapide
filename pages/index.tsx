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
import SwiperTitle from '@components/swiperTitle'
import SwiperHome from '@components/swiperHome'

export const getStaticProps = async () => {
  const page = await getPage('/', client)
  const layout = addLayoutData(page)
  return layout
}
const Index = () => (
  <>
    <Container>
      <Column className="w-full">
        <SwiperContainer query={queryAvis}>
          <SwiperTitle />
          <SwiperHome />
        </SwiperContainer>
      </Column>
    </Container>
    <Container className="md:pr-2">
      <Column className="w-full md:w-1/2 lg:w-1/3">
        <SwiperContainer query={queryStage} slides={1}>
          <SwiperTitle className="title-secondary" />
          <SwiperHome />
        </SwiperContainer>
      </Column>
      <Column className="w-full md:w-1/2 lg:w-2/3">
        <SwiperContainer query={queryBourse} slides={2}>
          <SwiperTitle className="title-secondary" />
          <SwiperHome />
        </SwiperContainer>
      </Column>
    </Container>
    <Container className="md:pr-2">
      <Column className="w-full md:w-1/2 lg:w-2/3">
        <SwiperContainer query={queryAppel} slides={2}>
          <SwiperTitle />
          <SwiperHome />
        </SwiperContainer>
      </Column>
      <Column className="w-full md:w-1/2 lg:w-1/3">
        <SwiperContainer query={queryCall} slides={1}>
          <SwiperTitle />
          <SwiperHome />
        </SwiperContainer>
      </Column>
    </Container>
    <Container className="md:pr-2">
      <Column className="w-full md:w-1/2 lg:w-1/3">
        <SwiperContainer query={queryConcours} slides={1}>
          <SwiperTitle className="title-secondary" />
          <SwiperHome />
        </SwiperContainer>
      </Column>
      <Column className="w-full md:w-1/2 lg:w-2/3">
        <SwiperContainer query={queryFormation} slides={2}>
          <SwiperTitle className="title-secondary" />
          <SwiperHome />
        </SwiperContainer>
      </Column>
    </Container>
    <Container className="md:pr-2">
      <Column className="w-full md:w-1/2 lg:w-2/3">
        <SwiperContainer query={queryActualite} slides={2}>
          <SwiperTitle />
          <SwiperHome />
        </SwiperContainer>
      </Column>
      <Column className="w-full md:w-1/2 lg:w-1/3">
        <SwiperContainer query={queryVolontaire} slides={1}>
          <SwiperTitle />
          <SwiperHome />
        </SwiperContainer>
      </Column>
    </Container>
  </>
)

export default Index
