import ContactForm from '@components/contactForm'
import Layout from '@layout/layout'
import ArchiveTitle from '@components/archive-title'
import { getPage } from '@graphql/api'
import addLayoutData from '@utils/addLayoutData'
import client from '@graphql/client'

export const getStaticProps = async () => {
  const page = await getPage('contact', client)
  const layout = await addLayoutData(page)
  return layout
}
export default function Contact(props) {
  return (
    <Layout {...props.layout}>
      <ArchiveTitle>Contact</ArchiveTitle>
      <ContactForm />
    </Layout>
  )
}
