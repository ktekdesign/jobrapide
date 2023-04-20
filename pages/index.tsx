import Layout from '@layout/layout'
import Column from '@layout/column'
import Container from '@layout/container'

import SwiperContainer from '@components/swiperContainer'

import { populatePosts } from '@utils/populateContext'
import { getPage } from '@graphql/api'
import { SwiperHome } from '@components/swiperHome'

export const getStaticProps = async () => {
  const posts = await populatePosts({
    term: '/recrutement/offres/avis-recrutement/',
  })
  const page = await getPage('/')

  return {
    props: {
      posts,
      page,
    },
    revalidate: 3600,
  }
}
export default function Index({ posts, page }) {
  return (
    <Layout seo={page.seo}>
      <Container>
        <Column className="w-full">
          <SwiperContainer
            term="/recrutement/offres/avis-recrutement/"
            postsData={posts}
            className="title-primary"
            component={SwiperHome}
          />
        </Column>
      </Container>
      <Container className="lg:pr-4">
        <Column className="lg:w-1/3 mb-4 lg:mb-0">
          <SwiperContainer
            term="/recrutement/offres/stage/"
            slides={1}
            className="title-secondary"
            component={SwiperHome}
            postsPerPage={5}
          />
        </Column>
        <Column className="lg:w-2/3">
          <SwiperContainer
            term="/recrutement/offres/bourses-etude/"
            slides={2}
            className="title-secondary"
            component={SwiperHome}
          />
        </Column>
      </Container>
      <Container className="lg:pr-4">
        <Column className="lg:w-2/3 mb-4 lg:mb-0">
          <SwiperContainer
            term="/recrutement/offres/avis-appel-offres/"
            slides={2}
            className="title-primary"
            component={SwiperHome}
          />
        </Column>
        <Column className="lg:w-1/3">
          <SwiperContainer
            term="/recrutement/offres/call-for-papers/"
            slides={1}
            className="title-primary"
            component={SwiperHome}
            postsPerPage={5}
          />
        </Column>
      </Container>
      <Container className="lg:pr-4">
        <Column className="lg:w-1/3 mb-4 lg:mb-0">
          <SwiperContainer
            term="/recrutement/offres/concours/"
            slides={1}
            className="title-secondary"
            component={SwiperHome}
            postsPerPage={5}
          />
        </Column>
        <Column className="lg:w-2/3">
          <SwiperContainer
            term="/recrutement/offres/formations/"
            slides={2}
            className="title-secondary"
            component={SwiperHome}
          />
        </Column>
      </Container>
      <Container className="lg:pr-4">
        <Column className="lg:w-2/3 mb-4 lg:mb-0">
          <SwiperContainer
            term="/recrutement/actualites/"
            slides={2}
            className="title-primary"
            component={SwiperHome}
          />
        </Column>
        <Column className="lg:w-1/3">
          <SwiperContainer
            term="/recrutement/offres/volontaire/"
            slides={1}
            className="title-primary"
            component={SwiperHome}
            postsPerPage={5}
          />
        </Column>
      </Container>
    </Layout>
  )
}
