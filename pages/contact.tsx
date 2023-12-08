import ContactForm from '@components/contactForm'
import ArchiveTitle from '@components/archive-title'
import getPage from '@graphql/api/getPage'
import getSidebar from '@graphql/api/getSidebar'
import getLayoutProps from '@utils/getLayoutProps'

export const getStaticProps = async () => {
  const [page, sidebar] = await Promise.all([getPage('contact'), getSidebar()])

  return getLayoutProps(page, 'contact', sidebar)
}
const Contact = () => (
  <>
    <ArchiveTitle title="Contact" />
    <ContactForm />
  </>
)

export default Contact
