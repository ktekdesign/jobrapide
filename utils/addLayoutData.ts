import { REVALIDATE } from '@utils/constants'

export const addLayoutData = (props) => {
  const { seo, ...rest } = props
  if (rest?.search) {
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
  return { props: layout, revalidate: REVALIDATE }
}
export default addLayoutData
