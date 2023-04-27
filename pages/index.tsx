import Column from '@layout/column'

import SwiperContainer from '@components/swiperContainer'

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
import Row from '@layout/row'

const Index = () => (
  <>
    <SwiperContainer query={queryAvis}>
      <SwiperTitle />
      <SwiperHome />
    </SwiperContainer>
    <Row className="index-row">
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
    </Row>
    <Row className="index-row">
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
    </Row>
    <Row className="index-row">
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
    </Row>
    <Row className="index-row">
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
    </Row>
  </>
)

export default Index
