import getPage from '@graphql/api/getPage'
import { Page } from '@utils/interfaces/data'
import { isEmpty } from '@utils/manipulateArray'
import addLayoutData from '@utils/addLayoutData'
import ParsedComponent from '@components/parsed-component'

const Page = ({ title, text }) => (
  <>
    <ParsedComponent as="h1" className="post-title" title={title} />
    <ParsedComponent as="div" className="content" text={text} />
  </>
)

export const getStaticProps = async ({ params }) => {
  const page: Page = await getPage(`/${params?.slug}/`)
  if (isEmpty(page)) return { notFound: true }

  return await addLayoutData(page, params.slug)
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
