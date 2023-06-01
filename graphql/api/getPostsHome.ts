import { mapPost } from '@utils/mapping'
import { outputErrors } from '@utils/outputErrors'
import loadFromWPGraphQL from './loadFromWPGraphQL'
import { queryHome } from '@graphql/homeQueries'

const getPostsHome = async () => {
  try {
    const data = await loadFromWPGraphQL(queryHome)
    const terms = data
      ? Object.values(data).map(({ posts, name, uri }) => ({
          title: name,
          href: uri,
          posts: posts.nodes?.map((post) => mapPost(post)),
        }))
      : null
    return { terms }
  } catch (error) {
    outputErrors(error)
  }
}

export default getPostsHome
