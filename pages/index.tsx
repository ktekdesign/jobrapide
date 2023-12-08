import getPostsHome from '@graphql/api/getPostsHome'
import MappedComponent from '@components/loaders/mapped-component'
import SwiperHomeContainer from '@components/swiper-home-container'
import getSidebar from '@graphql/api/getSidebar'
import getLayoutProps from '@utils/getLayoutProps'

export const getStaticProps = async () => {
  const [terms, sidebar] = await Promise.all([getPostsHome(), getSidebar()])
  return getLayoutProps({ ...terms, id: 1 }, null, sidebar)
}

const Index = ({ terms }) => {
  console.log(terms)
  return (
    <MappedComponent items={terms}>
      <SwiperHomeContainer />
    </MappedComponent>
  )
}
export default Index
