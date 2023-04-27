import { PER_PAGE, REVALIDATE } from '@utils/constants'

export const addLayoutData = (props) => {
  const { seo, ...rest } = props

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
