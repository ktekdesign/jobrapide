import { getPostsHome } from '../../../graphql/api'
import { outputErrors } from '../../outputErrors'
import * as fsPromise from 'node:fs/promises'

const loadHome = async () => {
  try {
    const data = await getPostsHome()

    fsPromise.writeFile(
      'utils/data/home.json',
      JSON.stringify({ writedAt: new Date(), posts: data })
    )
  } catch (error) {
    outputErrors(error)
  }
}
export default loadHome
