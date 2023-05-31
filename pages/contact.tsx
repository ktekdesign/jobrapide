import ContactForm from '@components/contactForm'
import ArchiveTitle from '@components/archive-title'
import getPage from '@graphql/api/getPage'
import addLayoutData from '@utils/addLayoutData'

export const getStaticProps = async () => {
  const page = await getPage('contact')

  return await addLayoutData(page, 'contact')
}
const Contact = () => (
  <>
    <ArchiveTitle title="Contact" />
    <ContactForm />
  </>
)

export default Contact
