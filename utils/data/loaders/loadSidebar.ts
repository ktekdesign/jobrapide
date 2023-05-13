import { loadFromWPGraphQL } from '@graphql/api'
import { sidebarQuery } from '@graphql/sidebarQuery'
import { mapPost } from '@utils/mapping'
import { outputErrors } from '@utils/outputErrors'
import * as fsPromise from 'node:fs/promises'

const loadSidebar = async () => {
  const data = await loadFromWPGraphQL(sidebarQuery)

  try {
    const pubs = data?.pubs?.nodes?.map((pub) => mapPost(pub))

    const pub1 = pubs?.filter(
      (pub) =>
        pub.categories.findIndex((category) => category.id === 192) !== -1
    )

    const pub2 = pubs?.filter(
      (pub) =>
        pub.categories.findIndex((category) => category.id === 193) !== -1
    )

    const pub3 = pubs?.filter(
      (pub) =>
        pub.categories.findIndex((category) => category.id === 194) !== -1
    )

    const partners = pubs?.filter(
      (pub) => pub.categories.findIndex((category) => category.id === 88) !== -1
    )

    const sponsored = data?.sponsored?.nodes?.map((pub) => mapPost(pub))

    fsPromise.writeFile(
      'utils/data/sidebar.json',
      JSON.stringify({
        pub1,
        pub2,
        pub3,
        partners,
        sponsored,
      })
    )
  } catch (error) {
    outputErrors(error)
  }
}

export default loadSidebar
