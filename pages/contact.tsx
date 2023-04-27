import ContactForm from '@components/contactForm'
import ArchiveTitle from '@components/archive-title'
import { getPage } from '@graphql/api'
import addLayoutData from '@utils/addLayoutData'

export const getStaticProps = async () => {
  const page = await getPage('contact')
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
