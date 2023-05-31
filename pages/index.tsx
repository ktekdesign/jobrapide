import SwiperTitle from '@components/swiperTitle'
import SwiperHome from '@components/swiperHome'
import Loading from '@components/loaders/loading'
import addLayoutData from '@utils/addLayoutData'
import { getPostsHome } from '@graphql/api'
import { Suspense, memo } from 'react'
import LoaderComponent from '@components/loaders/loader'

export const getStaticProps = async () => {
  const terms = await getPostsHome()
  return await addLayoutData({ ...terms, id: 1 })
}

const Index = ({ terms }) => (
  <Suspense>
    <div className="flex flex-wrap">
      <Loading data={terms} loading={false} serial>
        <LoaderComponent as="div" data-swiper="home">
          <SwiperTitle />
          <SwiperHome priority />
        </LoaderComponent>
        <LoaderComponent
          as="div"
          data-swiper="home"
          className="w-full md:w-1/2 lg:w-1/3"
        >
          <SwiperTitle className="title-secondary" />
          <SwiperHome slides={1} />
        </LoaderComponent>
        <LoaderComponent
          as="div"
          data-swiper="home"
          className="w-full md:w-1/2 lg:w-2/3"
        >
          <SwiperTitle className="title-secondary" />
          <SwiperHome slides={2} />
        </LoaderComponent>
        <LoaderComponent
          as="div"
          data-swiper="home"
          className="w-full md:w-1/2 lg:w-2/3"
        >
          <SwiperTitle />
          <SwiperHome slides={2} />
        </LoaderComponent>
        <LoaderComponent
          as="div"
          data-swiper="home"
          className="w-full md:w-1/2 lg:w-1/3"
        >
          <SwiperTitle />
          <SwiperHome slides={1} />
        </LoaderComponent>
        <LoaderComponent
          as="div"
          data-swiper="home"
          className="w-full md:w-1/2 lg:w-1/3"
        >
          <SwiperTitle className="title-secondary" />
          <SwiperHome slides={1} />
        </LoaderComponent>
        <LoaderComponent
          as="div"
          data-swiper="home"
          className="w-full md:w-1/2 lg:w-2/3"
        >
          <SwiperTitle className="title-secondary" />
          <SwiperHome slides={2} />
        </LoaderComponent>
        <LoaderComponent
          as="div"
          data-swiper="home"
          className="w-full md:w-1/2 lg:w-2/3"
        >
          <SwiperTitle />
          <SwiperHome slides={2} />
        </LoaderComponent>
        <LoaderComponent
          as="div"
          data-swiper="home"
          className="w-full md:w-1/2 lg:w-1/3"
        >
          <SwiperTitle />
          <SwiperHome slides={1} />
        </LoaderComponent>
      </Loading>
    </div>
  </Suspense>
)
export default memo(Index)
