import { useRouter } from 'next/router'
import { getTermAndPosts } from '../../lib/api'
import TermLayout from '@layout/termLayout'

export default function Region({ term }) {
  const router = useRouter()
  const posts = term?.posts?.edges

  if (!router.isFallback && !posts?.length) {
    return {
      notFound: true,
    }
  }

  return <TermLayout term={term} />
}

export async function getServerSideProps({ resolvedUrl, res }) {
  const { tag: term } = await getTermAndPosts(resolvedUrl, 'tag')
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate=3659'
  )
  // Pass data to the page via props
  return { props: { term } }
}
