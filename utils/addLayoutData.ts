import { REVALIDATE } from '@utils/constants'

export const addLayoutData = (data) => {
  const { seo: seoProps, ...props } = data

  if ('search' in props) {
    return {
      props: {
        ...props,
        breadcrumbs: [
          { text: 'Accueil', href: '/' },
          { text: 'Recherche', href: '/search/' },
        ],
      },
    }
  }
  const layout = () => {
    if (!seoProps) return props
    const { breadcrumbs, ...seo } = seoProps

    if (props?.currentPage > 1)
      seo.title = `${seo.title} - Page ${props.currentPage}`

    return {
      ...props,
      breadcrumbs: breadcrumbs ?? null,
      layout: {
        seo,
      },
    }
  }
  const layoutProps = layout()
  if (layoutProps.text || layoutProps.currentPage > 10 || layoutProps.tag)
    return { props: layoutProps }

  const { secteur, region } = layoutProps

  if (secteur || region || layoutProps.currentPage > 3)
    return { props: layoutProps, revalidate: 345600 }

  return { props: layoutProps, revalidate: REVALIDATE }
}
export default addLayoutData
