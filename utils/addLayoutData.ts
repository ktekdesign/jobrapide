import { REVALIDATE } from '@utils/constants'
import { preventUndefined } from '@utils/manipulateArray'

export const addLayoutData = async (props) => {
  const { seo, isSearch, ...rest } = props
  const layout = {
    ...rest,
    layout: {
      seo: preventUndefined(seo),
    },
  }
  if (!isSearch) return { props: layout, revalidate: REVALIDATE }
  return { props: layout }
}

export default addLayoutData
