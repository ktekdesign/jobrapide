import Head from 'next/head'

import Layout from '@layout/layout'
import Column from '@layout/column'
import Container from '@layout/container'

import SwiperContainer from '@components/swiperContainer'

import { CMS_NAME } from '@lib/constants'

import { populatePosts } from '@utils/populateContext'

export const getStaticProps = async () => {
  const posts = await populatePosts(
    '/recrutement/offres/avis-recrutement/',
    'category'
  )

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
            type="category"
            posts={posts}
            className="title-primary"
          />
        </Column>
      </Container>
      <Container className="lg:pr-4">
        <Column className="lg:w-1/3 mb-4 lg:mb-0">
          <SwiperContainer
            term="/recrutement/offres/stage/"
            type="category"
            slides={1}
            className="title-secondary"
          />
        </Column>
        <Column className="lg:w-2/3">
          <SwiperContainer
            term="/recrutement/offres/bourses-etude/"
            type="category"
            slides={2}
            className="title-secondary"
          />
        </Column>
      </Container>
      <Container className="lg:pr-4">
        <Column className="lg:w-2/3 mb-4 lg:mb-0">
          <SwiperContainer
            term="/recrutement/offres/avis-appel-offres/"
            type="category"
            slides={2}
            className="title-primary"
          />
        </Column>
        <Column className="lg:w-1/3">
          <SwiperContainer
            term="/recrutement/offres/call-for-papers/"
            type="category"
            slides={1}
            className="title-primary"
          />
        </Column>
      </Container>
      <Container className="lg:pr-4">
        <Column className="lg:w-1/3 mb-4 lg:mb-0">
          <SwiperContainer
            term="/recrutement/offres/concours/"
            type="category"
            slides={1}
            className="title-secondary"
          />
        </Column>
        <Column className="lg:w-2/3">
          <SwiperContainer
            term="/recrutement/offres/formations/"
            type="category"
            slides={2}
            className="title-secondary"
          />
        </Column>
      </Container>
      <Container className="lg:pr-4">
        <Column className="lg:w-2/3 mb-4 lg:mb-0">
          <SwiperContainer
            term="/recrutement/actualites/"
            type="category"
            slides={2}
            className="title-primary"
          />
        </Column>
        <Column className="lg:w-1/3">
          <SwiperContainer
            term="/recrutement/offres/volontaire/"
            type="category"
            slides={1}
            className="title-primary"
          />
        </Column>
      </Container>
    </Layout>
  )
}
