import Layout from '@layout/layout'
import Column from '@layout/column'
import Container from '@layout/container'

import SwiperContainer from '@components/swiperContainer'

import { getPage } from '@graphql/api'
import addLayoutData from '@utils/addLayoutData'

export const getStaticProps = async () => {
  const page = await getPage('/')
  const layout = await addLayoutData(page)
  return layout
}
export default function Index(props) {
  return (
    <Layout {...props.layout}>
      <Container>
        <Column className="w-full">
          <SwiperContainer term="avis-recrutement" className="title-primary" />
        </Column>
      </Container>
      <Container className="lg:pr-4">
        <Column className="lg:w-1/3 mb-4 lg:mb-0">
          <SwiperContainer
            term="stage"
            slides={1}
            className="title-secondary"
            postsPerPage={5}
          />
        </Column>
        <Column className="lg:w-2/3">
          <SwiperContainer
            term="bourses-etude"
            slides={2}
            className="title-secondary"
          />
        </Column>
      </Container>
      <Container className="lg:pr-4">
        <Column className="lg:w-2/3 mb-4 lg:mb-0">
          <SwiperContainer
            term="avis-appel-offres"
            slides={2}
            className="title-primary"
          />
        </Column>
        <Column className="lg:w-1/3">
          <SwiperContainer
            term="call-for-papers"
            slides={1}
            className="title-primary"
            postsPerPage={5}
          />
        </Column>
      </Container>
      <Container className="lg:pr-4">
        <Column className="lg:w-1/3 mb-4 lg:mb-0">
          <SwiperContainer
            term="concours"
            slides={1}
            className="title-secondary"
            postsPerPage={5}
          />
        </Column>
        <Column className="lg:w-2/3">
          <SwiperContainer
            term="formations"
            slides={2}
            className="title-secondary"
          />
        </Column>
      </Container>
      <Container className="lg:pr-4">
        <Column className="lg:w-2/3 mb-4 lg:mb-0">
          <SwiperContainer
            term="actualites"
            slides={2}
            className="title-primary"
          />
        </Column>
        <Column className="lg:w-1/3">
          <SwiperContainer
            term="volontaire"
            slides={1}
            className="title-primary"
            postsPerPage={5}
          />
        </Column>
      </Container>
    </Layout>
  )
}
