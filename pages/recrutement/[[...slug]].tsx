import { useRouter } from 'next/router'
import { getTermAndPosts } from '../../lib/api'
import TermLayout from '@layout/termLayout'

export default function Category({ term, current }) {
  const router = useRouter()
  const posts = term?.posts?.edges

  if (!router.isFallback && !posts?.length) {
    return {
      notFound: true,
    }
  }

  return <TermLayout term={term} current={current} />
}

export async function getServerSideProps({ resolvedUrl, params, res }) {
  const { category: term } = await getTermAndPosts(resolvedUrl, 'category')
  const current = parseInt(params.slug.pop()) || 1

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate=3659'
  )

  return { props: { term, current } }
}
