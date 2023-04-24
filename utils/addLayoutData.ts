import { REVALIDATE } from '@utils/constants'
import { preventUndefined } from '@utils/manipulateArray'

export const addLayoutData = async (props) => {
  const { seo, ...rest } = props
  const layout = {
    ...rest,
    layout: {
      seo: preventUndefined(seo),
    },
  }
  if (!rest?.search) return { props: layout, revalidate: REVALIDATE }
  return { props: layout }
}

export default addLayoutData
