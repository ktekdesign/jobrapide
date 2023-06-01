import { mapPost } from '@utils/mapping'
import { outputErrors } from '@utils/outputErrors'
import loadFromWPGraphQL from '@graphql/api/loadFromWPGraphQL'
import { post_response, seo_response } from '@graphql/api/apiResponse'

const getPostAndMorePosts = async (slug) => {
  try {
    const postData = await loadFromWPGraphQL(
      `
      query PostBySlug {
        post(id: "$id", idType: URI) {
          ${seo_response}
          ${post_response(true)}
        }
      }
    `,
      {
        id: slug,
      }
    )

    return { post: mapPost(postData?.post) }
  } catch (err) {
    return outputErrors(err)
  }
}

export default getPostAndMorePosts
