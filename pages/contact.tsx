import Head from 'next/head'
import ContactForm from '../components/contactForm'
import Layout from '../components/layout'
import { CMS_NAME } from '../lib/constants'

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>{`Contact - ${CMS_NAME}`}</title>
      </Head>
      <h1 className="bg-primary text-white text-2xl p-2">Contact</h1>
      <ContactForm />
    </Layout>
  )
}
