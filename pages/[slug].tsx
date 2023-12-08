import getPage from '@graphql/api/getPage'
import { isEmpty } from '@utils/manipulateArray'
import ParsedComponent from '@components/parsed-component'
import getSidebar from '@graphql/api/getSidebar'
import getLayoutProps from '@utils/getLayoutProps'

const Page = ({ title, text }) => (
  <>
    <ParsedComponent as="h1" className="post-title" title={title} />
    <ParsedComponent as="div" className="content" text={text} />
  </>
)

export const getStaticProps = async ({ params }) => {
  const [page, sidebar] = await Promise.all([
    getPage(`/${params?.slug}/`),
    getSidebar(),
  ])
  if (isEmpty(page)) return { notFound: true }

  return getLayoutProps(page, params.slug, sidebar)
}

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: 'mentions-legales' } },
      { params: { slug: 'condition-generale-dutilisation' } },
      { params: { slug: 'confidentialite' } },
      { params: { slug: 'propriete-intellectuelle' } },
      { params: { slug: 'qui-sommes-nous' } },
    ],
    fallback: false,
  }
}

export default Page
