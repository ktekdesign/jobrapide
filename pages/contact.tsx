import ContactForm from '@components/contactForm'
import Layout from '@layout/layout'
import ArchiveTitle from '@components/archive-title'
import { getPage } from '@graphql/api'

export const getStaticProps = async () => {
  const { seo } = await getPage('contact')

  return {
    props: {
      seo,
    },
  }
}
export default function Contact({ seo }) {
  return (
    <Layout seo={seo}>
      <ArchiveTitle>Contact</ArchiveTitle>
      <ContactForm />
    </Layout>
  )
}
