import SwiperTitle from '@components/swiperTitle'
import SwiperHome from '@components/swiperHome'
import Loading from '@components/loaders/loading'
import addLayoutData from '@utils/addLayoutData'
import { getPostsHome } from '@graphql/api'
import { Suspense, memo } from 'react'
import Loader from '@components/loaders/loader'

export const getStaticProps = async () => {
  const terms = await getPostsHome()
  return addLayoutData(terms)
}

const Index = ({ terms }) => (
  <Suspense>
    <div className="flex flex-wrap">
      <Loading data={terms} loading={false} serial>
        <Loader as="div" data-swiper="home">
          <SwiperTitle />
          <SwiperHome priority />
        </Loader>
        <Loader
          as="div"
          data-swiper="home"
          className="w-full md:w-1/2 lg:w-1/3"
        >
          <SwiperTitle className="title-secondary" />
          <SwiperHome slides={1} />
        </Loader>
        <Loader
          as="div"
          data-swiper="home"
          className="w-full md:w-1/2 lg:w-2/3"
        >
          <SwiperTitle className="title-secondary" />
          <SwiperHome slides={2} />
        </Loader>
        <Loader
          as="div"
          data-swiper="home"
          className="w-full md:w-1/2 lg:w-2/3"
        >
          <SwiperTitle />
          <SwiperHome slides={2} />
        </Loader>
        <Loader
          as="div"
          data-swiper="home"
          className="w-full md:w-1/2 lg:w-1/3"
        >
          <SwiperTitle />
          <SwiperHome slides={1} />
        </Loader>
        <Loader
          as="div"
          data-swiper="home"
          className="w-full md:w-1/2 lg:w-1/3"
        >
          <SwiperTitle className="title-secondary" />
          <SwiperHome slides={1} />
        </Loader>
        <Loader
          as="div"
          data-swiper="home"
          className="w-full md:w-1/2 lg:w-2/3"
        >
          <SwiperTitle className="title-secondary" />
          <SwiperHome slides={2} />
        </Loader>
        <Loader
          as="div"
          data-swiper="home"
          className="w-full md:w-1/2 lg:w-2/3"
        >
          <SwiperTitle />
          <SwiperHome slides={2} />
        </Loader>
        <Loader
          as="div"
          data-swiper="home"
          className="w-full md:w-1/2 lg:w-1/3"
        >
          <SwiperTitle />
          <SwiperHome slides={1} />
        </Loader>
      </Loading>
    </div>
  </Suspense>
)
export default memo(Index)
