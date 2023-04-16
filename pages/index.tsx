import Head from 'next/head'
import Layout from '../components/layout'
import { CMS_NAME } from '../lib/constants'
import SwiperContainer from '../components/swiperContainer'
import Column from '../components/column'
import Container from '../components/container'
import { populatePosts } from '../utils/populateContext'

export const getStaticProps = async () => {
  const posts = await populatePosts(
    '/recrutement/offres/avis-recrutement/',
    'category'
  )

  return {
    props: {
      posts,
    },
    revalidate: 3600
  }
}
export default function Index({ posts }) {
  return (
    <Layout>
      <Head>
        <title>{CMS_NAME}</title>
      </Head>
      <Container>
        <Column>
          <SwiperContainer
            term="/recrutement/offres/avis-recrutement/"
            type="category"
            posts={posts}
          />
        </Column>
      </Container>
      <Container>
        <Column className="lg:w-1/3 mb-4 lg:mb-0">
          <SwiperContainer
            term="/recrutement/offres/stage/"
            type="category"
            slides={1}
            alternate
          />
        </Column>
        <Column className="lg:w-2/3">
          <SwiperContainer
            term="/recrutement/offres/bourses-etude/"
            type="category"
            slides={2}
            alternate
          />
        </Column>
      </Container>
      <Container>
        <Column className="lg:w-2/3 mb-4 lg:mb-0">
          <SwiperContainer
            term="/recrutement/offres/avis-appel-offres/"
            type="category"
            slides={2}
          />
        </Column>
        <Column className="lg:w-1/3">
          <SwiperContainer
            term="/recrutement/offres/call-for-papers/"
            type="category"
            slides={1}
          />
        </Column>
      </Container>
      <Container>
        <Column className="lg:w-1/3 mb-4 lg:mb-0">
          <SwiperContainer
            term="/recrutement/offres/concours/"
            type="category"
            slides={1}
            alternate
          />
        </Column>
        <Column className="lg:w-2/3">
          <SwiperContainer
            term="/recrutement/offres/formations/"
            type="category"
            slides={2}
            alternate
          />
        </Column>
      </Container>
      <Container>
        <Column className="lg:w-2/3 mb-4 lg:mb-0">
          <SwiperContainer
            term="/recrutement/actualites/"
            type="category"
            slides={2}
          />
        </Column>
        <Column className="lg:w-1/3">
          <SwiperContainer
            term="/recrutement/offres/volontaire/"
            type="category"
            slides={1}
          />
        </Column>
      </Container>
    </Layout>
  )
}
