import { mapPage } from '@utils/mapping'
import { outputErrors } from '@utils/outputErrors'
import loadFromWPGraphQL from '@graphql/api/loadFromWPGraphQL'
import { seo_response } from '@graphql/api/apiResponse'

const getPage = async (slug) => {
  try {
    const data = await loadFromWPGraphQL(
      `
      query page${slug.replaceAll('-', '').replaceAll('/', '')} {
        page (id: "${slug}", idType: URI) {      
          databaseId
          title
          content
          ${seo_response}
        }
      }
    `
    )

    return mapPage(data?.page)
  } catch (err) {
    return outputErrors(err)
  }
}

export default getPage
