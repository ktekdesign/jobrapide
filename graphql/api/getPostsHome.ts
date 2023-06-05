import { mapPost } from '@utils/mapping'
import { outputErrors } from '@utils/outputErrors'
import loadFromWPGraphQL from './loadFromWPGraphQL'
import { queryHome } from '@graphql/homeQueries'

const getPostsHome = async () => {
  try {
    const data = await loadFromWPGraphQL(queryHome)
    const htmlProps = [
      {
        priority: true,
        innerClass: 'main-3',
      },
      {
        innerClass: 'main-1',
        secondary: true,
        slides: 1,
      },
      {
        innerClass: 'main-2',
        secondary: true,
        slides: 2,
      },
      {
        innerClass: 'main-2',
        slides: 2,
      },
      {
        innerClass: 'main-1',
        slides: 1,
      },
      {
        innerClass: 'main-1',
        secondary: true,
        slides: 1,
      },
      {
        innerClass: 'main-2',
        secondary: true,
        slides: 2,
      },
      {
        innerClass: 'main-2',
        slides: 2,
      },
      {
        innerClass: 'main-1',
        slides: 1,
      },
    ]
    const terms = data
      ? Object.values(data).map(({ posts, name, uri }, key) => ({
          title: name,
          href: uri,
          posts: posts.nodes?.map((post) => mapPost(post)),
          ...htmlProps[key],
        }))
      : null

    return { terms }
  } catch (error) {
    outputErrors(error)
  }
}

export default getPostsHome
