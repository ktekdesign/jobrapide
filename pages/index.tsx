import SwiperContainer from '@components/swiperContainer'

import SwiperTitle from '@components/swiperTitle'
import SwiperHome from '@components/swiperHome'
import Loading from '@components/loading'
import addLayoutData from '@utils/addLayoutData'
import home from '@utils/data/home.json'
import loadHome from '@utils/data/loaders/loadHome'
import isMoreThan from '@utils/isMoreThan'

export const getStaticProps = async () => {
  if (isMoreThan(home.writedAt, 7200000)) loadHome()
  return addLayoutData({})
}

const Index = () => (
  <div className="flex flex-wrap">
    <Loading data={home.posts} loading={false} serial>
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
