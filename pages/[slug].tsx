import { getPage } from '@graphql/api'
import PostTitle from '@components/post-title'
import { Page } from '@utils/interfaces/data'
import { isEmpty } from '@utils/manipulateArray'
import addLayoutData from '@utils/addLayoutData'
import ParsedComponent from '@components/parsed-component'

const Page = ({ title, text }) => (
  <>
    <PostTitle title={title} />
    <div className="content">
      <ParsedComponent text={text} />
    </div>
  </>
)

export const getStaticProps = async ({ params }) => {
  const page: Page = await getPage(`/${params?.slug}/`)
  if (isEmpty(page)) return { notFound: true }
  const layout = addLayoutData(page)
  return layout
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
    fallback: true,
  }
}

export default Page
