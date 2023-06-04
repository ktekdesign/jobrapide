import addLayoutData from '@utils/addLayoutData'
import getPostsHome from '@graphql/api/getPostsHome'
import MappedComponent from '@components/loaders/mapped-component'
import SwiperHomeContainer from '@components/swiper-home-container'

export const getStaticProps = async () => {
  const terms = await getPostsHome()
  return await addLayoutData({ ...terms, id: 1 })
}

const Index = ({ terms }) => (
  <MappedComponent items={terms}>
    <SwiperHomeContainer />
  </MappedComponent>
)
export default Index
