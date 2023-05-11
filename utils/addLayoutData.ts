import { PER_PAGE, REVALIDATE } from '@utils/constants'
import isMoreThanOneDay from '@utils/isMoreThanOneDay'
import sidebarData from '@utils/data/sidebar.json'
import loadSidebar from './data/loaders/loadSidebar'

export const addLayoutData = (props) => {
  const { seo, ...rest } = props

  if (isMoreThanOneDay(sidebarData?.writedAt)) loadSidebar()

  if ('search' in rest) {
    return {
      props: {
        ...rest,
        breadcrumbs: [
          { text: 'Accueil', url: '/' },
          { text: 'Recherche', url: '/search/' },
        ],
        layout: {
          seo: null,
          ...sidebarData,
        },
      },
    }
  }

  const { breadcrumbs, ...seoProps } = seo ?? {}

  const layout = {
    ...rest,
    breadcrumbs: breadcrumbs ?? null,
    layout: {
      seo: seoProps?.title ? seoProps : null,
      ...sidebarData,
    },
  }

  if (layout?.content || layout?.currentPage > PER_PAGE)
    return { props: layout }
  return { props: layout, revalidate: REVALIDATE }
}
export default addLayoutData
