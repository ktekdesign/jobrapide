import { mapPost } from './mapping'

export const filterSidebar = (data, largeScreen = false) => {
  const pubs = data?.pubs?.nodes?.map((pub) => mapPost(pub))

  const filteredPub1 = pubs?.filter(
    (pub) => pub.categories.findIndex((category) => category.id === 192) !== -1
  )
  const pub1 = largeScreen
    ? filteredPub1?.map((pub, key) => {
        if (key === 0)
          return {
            ...pub,
            text: pub.text.replaceAll('<img', "<img fetchpriority='high'"),
          }
        return pub
      })
    : filteredPub1

  const pub2 = pubs?.filter(
    (pub) => pub.categories.findIndex((category) => category.id === 193) !== -1
  )

  const pub3 = pubs?.filter(
    (pub) => pub.categories.findIndex((category) => category.id === 194) !== -1
  )

  const partners = pubs?.filter(
    (pub) => pub.categories.findIndex((category) => category.id === 88) !== -1
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
