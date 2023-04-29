import SwiperContainer from '@components/swiperContainer'

import { queryHome } from '@graphql/homeQueries'
import SwiperTitle from '@components/swiperTitle'
import SwiperHome from '@components/swiperHome'
import { useQuery, gql } from '@apollo/client'
import Loading from '@components/loading'
import { filterPostsHome } from '@utils/filterPostsHome'

const Index = () => {
  const QUERY = gql`
    ${queryHome}
  `
  const { data, loading, error } = useQuery(QUERY)
  const terms = filterPostsHome(data)

  return (
    <div className="flex flex-wrap">
      <Loading data={terms} loading={loading} error={error} serial>
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
}
export default Index
