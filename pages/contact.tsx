import ContactForm from '@components/contactForm'
import ArchiveTitle from '@components/archive-title'
import { getPage } from '@graphql/api'
import addLayoutData from '@utils/addLayoutData'
import client from '@graphql/client'

export const getStaticProps = async () => {
  const page = await getPage('contact', client)
  const layout = addLayoutData(page)
  return layout
}
const Contact = () => (
  <>
    <ArchiveTitle title="Contact" />
    <ContactForm />
  </>
)

export default Contact
