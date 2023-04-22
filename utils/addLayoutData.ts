import { getPartners, getPubs, getSponsored } from '@graphql/api'
import { REVALIDATE } from '@utils/constants'
import { preventUndefined } from '@utils/manipulateArray'

export const addLayoutData = async (props) => {
  const pubs = await getPubs()
  const partners = await getPartners()
  const sponsored = await getSponsored()
  const { seo, ...rest } = props
  return {
    props: {
      ...rest,
      layout: {
        seo: preventUndefined(seo),
        pubs,
        partners,
        sponsored,
      },
    },
    revalidate: REVALIDATE,
  }
}

export default addLayoutData
