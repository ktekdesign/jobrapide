import { Post, Term } from './interfaces'

export const mapPost = (post): Post => {
  const categories = post.categories?.nodes?.map((term) => mapTerm(term))
  const secteurs = post.secteurs?.nodes?.map((term) => mapTerm(term))
  const regions = post.regions?.nodes?.map((term) => mapTerm(term))

  return {
    id: post.databaseId,
    title: post.title,
    image: post.featuredImage?.node.sourceUrl,
    date: post.date,
    excerpt: post.excerpt,
    content: post.content,
    uri: post.uri,
    categories: categories,
    secteurs: secteurs,
    regions: regions,
  }
}
export const mapTerm = (term): Term => {
  const posts = term?.posts?.nodes?.map((post) => mapPost(post))

  return {
    id: term.databaseId,
    name: term.name,
    count: term.count || 0,
    slug: term.slug || '',
    uri: term.uri,
    parentId: term.parentDatabaseId || 0,
    posts: posts || null,
    info: term.posts?.pageInfo || null,
  }
}
