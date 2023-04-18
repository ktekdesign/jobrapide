import Head from 'next/head'
import ContactForm from '@components/contactForm'
import Layout from '@layout/layout'
import { CMS_NAME } from '@lib/constants'
import ArchiveTitle from '@components/archive-title'

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>{`Contact - ${CMS_NAME}`}</title>
      </Head>
      <ArchiveTitle>Contact</ArchiveTitle>
      <ContactForm />
    </Layout>
  )
}
