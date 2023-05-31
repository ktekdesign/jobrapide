import { outputErrors } from '@utils/outputErrors'

import loadFromWPGraphQL from '@graphql/api/loadFromWPGraphQL'

const getLatestPosts = async (category) => {
  const query = `
  query lasts{
    posts(first: 1
      where: {
        categoryId: ${category}
      }
    ){
      nodes {
        uri
      }
    }
  }
  `
  try {
    const data = await loadFromWPGraphQL(query)
    return data?.posts?.nodes
  } catch (err) {
    return outputErrors(err)
  }
}

export default getLatestPosts
