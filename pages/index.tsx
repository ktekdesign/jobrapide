import SwiperContainer from '@components/swiperContainer'

import SwiperTitle from '@components/swiperTitle'
import SwiperHome from '@components/swiperHome'
import Loading from '@components/loading'
import addLayoutData from '@utils/addLayoutData'
import { getPostsHome } from '@graphql/api'
import { memo } from 'react'

export const getStaticProps = async () => {
  const terms = await getPostsHome()
  return addLayoutData(terms)
}

const Index = ({ terms }) => (
  <div className="flex flex-wrap">
    <Loading data={terms} loading={false} serial>
      <SwiperContainer>
        <SwiperTitle />
        <SwiperHome priority />
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
export default memo(Index)
