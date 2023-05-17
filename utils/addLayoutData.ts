import { REVALIDATE } from '@utils/constants'

export const addLayoutData = (data) => {
  const { seo: seoProps, ...rest } = data

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
  const layout = () => {
    if (!seoProps) return rest
    const { breadcrumbs, ...seo } = seoProps

    if (rest?.currentPage > 1)
      seo.title = `${seo.title} - Page ${rest.currentPage}`

    return {
      ...rest,
      breadcrumbs: breadcrumbs ?? null,
      layout: {
        seo,
      },
    }
  }
  const props = layout()
  if (props.content || props.currentPage > 10 || props.tag) return { props }

  const { secteur, region } = props

  if (secteur || region || props.currentPage > 3)
    return { props, revalidate: 172800 }

  return { props, revalidate: REVALIDATE }
}
export default addLayoutData
