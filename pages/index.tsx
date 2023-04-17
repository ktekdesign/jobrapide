import Head from 'next/head'

import Layout from '@layout/layout'
import Column from '@layout/column'
import Container from '@layout/container'

import SwiperContainer from '@components/swiperContainer'

import { CMS_NAME } from '@lib/constants'

import { populatePosts } from '@utils/populateContext'

export const getStaticProps = async () => {
  const posts = await populatePosts('/recrutement/offres/avis-recrutement/')

  return {
    props: {
      posts,
    },
    revalidate: 3600,
  }
}
export default function Index({ posts }) {
  return (
    <Layout>
      <Head>
        <title>{CMS_NAME}</title>
      </Head>
      <Container>
        <Column className="w-full">
          <SwiperContainer
            term="/recrutement/offres/avis-recrutement/"
            posts={posts}
            className="title-primary"
          />
        </Column>
      </Container>
      <Container className="lg:pr-4">
        <Column className="lg:w-1/3 mb-4 lg:mb-0">
          <SwiperContainer
            term="/recrutement/offres/stage/"
            slides={1}
            className="title-secondary"
          />
        </Column>
        <Column className="lg:w-2/3">
          <SwiperContainer
            term="/recrutement/offres/bourses-etude/"
            slides={2}
            className="title-secondary"
          />
        </Column>
      </Container>
      <Container className="lg:pr-4">
        <Column className="lg:w-2/3 mb-4 lg:mb-0">
          <SwiperContainer
            term="/recrutement/offres/avis-appel-offres/"
            slides={2}
            className="title-primary"
          />
        </Column>
        <Column className="lg:w-1/3">
          <SwiperContainer
            term="/recrutement/offres/call-for-papers/"
            slides={1}
            className="title-primary"
          />
        </Column>
      </Container>
      <Container className="lg:pr-4">
        <Column className="lg:w-1/3 mb-4 lg:mb-0">
          <SwiperContainer
            term="/recrutement/offres/concours/"
            slides={1}
            className="title-secondary"
          />
        </Column>
        <Column className="lg:w-2/3">
          <SwiperContainer
            term="/recrutement/offres/formations/"
            slides={2}
            className="title-secondary"
          />
        </Column>
      </Container>
      <Container className="lg:pr-4">
        <Column className="lg:w-2/3 mb-4 lg:mb-0">
          <SwiperContainer
            term="/recrutement/actualites/"
            slides={2}
            className="title-primary"
          />
        </Column>
        <Column className="lg:w-1/3">
          <SwiperContainer
            term="/recrutement/offres/volontaire/"
            slides={1}
            className="title-primary"
          />
        </Column>
      </Container>
    </Layout>
  )
}
