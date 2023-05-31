import { outputErrors } from '@utils/outputErrors'

import { filterSidebar } from '@utils/filterSidebar'
import loadFromWPGraphQL from '@graphql/api/loadFromWPGraphQL'
import { sidebarQuery } from '@graphql/sidebarQuery'

const getSidebar = async () => {
  try {
    const data = await loadFromWPGraphQL(sidebarQuery)

    return filterSidebar(data)
  } catch (err) {
    return outputErrors(err)
  }
}

export default getSidebar
