import { mapPost } from './mapping'

export const filterPostsHome = (data) => {
  const terms = data
    ? Object.values(data).map(({ posts, name, uri }) => ({
        title: name,
        uri,
        posts: posts.nodes?.map((post) => mapPost(post)),
      }))
    : null

  return terms
}
