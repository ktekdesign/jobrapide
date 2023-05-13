import { PER_PAGE, REVALIDATE } from '@utils/constants'
import loadSidebar from '@utils/data/loaders/loadSidebar'
import isMoreThan from '@utils/isMoreThan'
import loadHome from '@utils/data/loaders/loadHome'
import update from '@utils/data/update.json'

export const addLayoutData = (props) => {
  const { seo, ...rest } = props

  if (isMoreThan(update, 7200000)) {
    loadSidebar()
    loadHome()
  }

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
        },
      },
    }
  }

  const { breadcrumbs, ...seoProps } = seo

  if (rest?.currentPage > 1)
    seoProps.title = `${seoProps.title} - Page ${rest.currentPage}`

  const layout = {
    ...rest,
    breadcrumbs,
    layout: {
      seo: seoProps,
    },
  }

  if (layout?.content || layout?.currentPage > PER_PAGE)
    return { props: layout }
  return { props: layout, revalidate: REVALIDATE }
}
export default addLayoutData
