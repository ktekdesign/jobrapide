import Layout from '@layout/layout'
import Column from '@layout/column'
import Container from '@layout/container'

import SwiperContainer from '@components/swiperContainer'

import { getPage } from '@graphql/api'
import addLayoutData from '@utils/addLayoutData'

import client from '@graphql/client'

export const getStaticProps = async () => {
  const page = await getPage('/', client)
  const layout = await addLayoutData(page, client)
  return layout
}
export default function Index(props) {
  return (
    <Layout {...props.layout}>
      <Container>
        <Column className="w-full">
          <SwiperContainer id={17} />
        </Column>
      </Container>
      <Container className="lg:pr-4">
        <Column className="lg:w-1/3 mb-4 lg:mb-0">
          <SwiperContainer
            id={18}
            slides={1}
            className="title-secondary"
            postsPerPage={5}
          />
        </Column>
        <Column className="lg:w-2/3">
          <SwiperContainer id={20} slides={2} className="title-secondary" />
        </Column>
      </Container>
      <Container className="lg:pr-4">
        <Column className="lg:w-2/3 mb-4 lg:mb-0">
          <SwiperContainer id={19} slides={2} />
        </Column>
        <Column className="lg:w-1/3">
          <SwiperContainer id={64} slides={1} postsPerPage={5} />
        </Column>
      </Container>
      <Container className="lg:pr-4">
        <Column className="lg:w-1/3 mb-4 lg:mb-0">
          <SwiperContainer
            id={21}
            slides={1}
            className="title-secondary"
            postsPerPage={5}
          />
        </Column>
        <Column className="lg:w-2/3">
          <SwiperContainer id={121} slides={2} className="title-secondary" />
        </Column>
      </Container>
      <Container className="lg:pr-4">
        <Column className="lg:w-2/3 mb-4 lg:mb-0">
          <SwiperContainer id={23} slides={2} />
        </Column>
        <Column className="lg:w-1/3">
          <SwiperContainer id={22} slides={1} postsPerPage={5} />
        </Column>
      </Container>
    </Layout>
  )
}
