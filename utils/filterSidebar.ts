import { mapPost } from './mapping'

export const filterSidebar = (data) => {
  const pubs = data?.pubs?.nodes?.map((pub) => mapPost(pub))

  const pub1 = pubs?.filter(
    (pub) => pub.categories.findIndex((category) => category?.id === 192) !== -1
  )

  const pub2 = pubs?.filter(
    (pub) => pub.categories.findIndex((category) => category?.id === 193) !== -1
  )

  const pub3 = pubs?.filter(
    (pub) => pub.categories.findIndex((category) => category?.id === 194) !== -1
  )

  const partners = pubs?.filter(
    (pub) => pub.categories.findIndex((category) => category?.id === 88) !== -1
  )

  const sponsored = data?.sponsored?.nodes?.map((pub) => mapPost(pub))

  return {
    pub1,
    pub2,
    pub3,
    partners,
    sponsored,
  }
}
