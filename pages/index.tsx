import SwiperContainer from '@components/swiperContainer'

import SwiperTitle from '@components/swiperTitle'
import SwiperHome from '@components/swiperHome'
import Loading from '@components/loading'
import home from '@utils/data/home.json'

const Index = () => (
  <div className="flex flex-wrap">
    <Loading data={home} loading={false} serial>
      <SwiperContainer>
        <SwiperTitle />
        <SwiperHome />
      </SwiperContainer>
      <SwiperContainer slides={1} className="w-full md:w-1/2 lg:w-1/3">
        <SwiperTitle className="title-secondary" />
        <SwiperHome />
      </SwiperContainer>
      <SwiperContainer slides={2} className="w-full md:w-1/2 lg:w-2/3">
        <SwiperTitle className="title-secondary" />
        <SwiperHome />
      </SwiperContainer>
      <SwiperContainer slides={2} className="w-full md:w-1/2 lg:w-2/3">
        <SwiperTitle />
        <SwiperHome />
      </SwiperContainer>
      <SwiperContainer slides={1} className="w-full md:w-1/2 lg:w-1/3">
        <SwiperTitle />
        <SwiperHome />
      </SwiperContainer>
      <SwiperContainer slides={1} className="w-full md:w-1/2 lg:w-1/3">
        <SwiperTitle className="title-secondary" />
        <SwiperHome />
      </SwiperContainer>
      <SwiperContainer slides={2} className="w-full md:w-1/2 lg:w-2/3">
        <SwiperTitle className="title-secondary" />
        <SwiperHome />
      </SwiperContainer>
      <SwiperContainer slides={2} className="w-full md:w-1/2 lg:w-2/3">
        <SwiperTitle />
        <SwiperHome />
      </SwiperContainer>
      <SwiperContainer slides={1} className="w-full md:w-1/2 lg:w-1/3">
        <SwiperTitle />
        <SwiperHome />
      </SwiperContainer>
    </Loading>
  </div>
)
export default Index
