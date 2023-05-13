import { PER_PAGE, REVALIDATE } from '@utils/constants'

export const addLayoutData = (data) => {
  const { seoProps, ...rest } = data

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
  if (props.content || props.currentPage > PER_PAGE) return { props }
  return { props, revalidate: REVALIDATE }
}
export default addLayoutData
