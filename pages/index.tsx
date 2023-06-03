import SwiperTitle from '@components/swiperTitle'
import SwiperHome from '@components/swiperHome'
import Loading from '@components/loaders/loading'
import addLayoutData from '@utils/addLayoutData'
import getPostsHome from '@graphql/api/getPostsHome'
import { memo } from 'react'
import LoaderComponent from '@components/loaders/loader'

export const getStaticProps = async () => {
  const terms = await getPostsHome()
  return await addLayoutData({ ...terms, id: 1 })
}

const Index = ({ terms }) => (
  <Loading data={terms} loading={false} serial>
    <LoaderComponent as="div" className="main-3">
      <SwiperTitle />
      <SwiperHome priority />
    </LoaderComponent>
    <LoaderComponent as="div" className="main-1">
      <SwiperTitle className="title-secondary" />
      <SwiperHome slides={1} />
    </LoaderComponent>
    <LoaderComponent as="div" className="main-2">
      <SwiperTitle className="title-secondary" />
      <SwiperHome slides={2} />
    </LoaderComponent>
    <LoaderComponent as="div" className="main-2">
      <SwiperTitle />
      <SwiperHome slides={2} />
    </LoaderComponent>
    <LoaderComponent as="div" className="main-1">
      <SwiperTitle />
      <SwiperHome slides={1} />
    </LoaderComponent>
    <LoaderComponent as="div" className="main-1">
      <SwiperTitle className="title-secondary" />
      <SwiperHome slides={1} />
    </LoaderComponent>
    <LoaderComponent as="div" className="main-2">
      <SwiperTitle className="title-secondary" />
      <SwiperHome slides={2} />
    </LoaderComponent>
    <LoaderComponent as="div" className="main-2">
      <SwiperTitle />
      <SwiperHome slides={2} />
    </LoaderComponent>
    <LoaderComponent as="div" className="main-1">
      <SwiperTitle />
      <SwiperHome slides={1} />
    </LoaderComponent>
  </Loading>
)
export default memo(Index)
