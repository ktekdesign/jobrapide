import { getSidebar } from '@graphql/api'
import { REVALIDATE } from '@utils/constants'

export const addLayoutData = async (data) => {
  const { seo: seoProps, ...props } = data
  const sidebar = await getSidebar()

  if ('search' in props) {
    return {
      props: {
        ...props,
        breadcrumbs: [
          { text: 'Accueil', href: '/' },
          { text: 'Recherche', href: '/search/' },
        ],
        layout: {
          sidebar,
        },
      },
    }
  }
  const layout = () => {
    if (!seoProps) return { ...props, layout: { sidebar } }
    const { breadcrumbs, ...seo } = seoProps

    if (props?.currentPage > 1)
      seo.title = `${seo.title} - Page ${props.currentPage}`

    return {
      ...props,
      breadcrumbs: breadcrumbs,
      layout: {
        seo,
        sidebar,
      },
    }
  }
  const layoutProps = layout()

  if (layoutProps.text || layoutProps.currentPage > 10 || layoutProps.tag)
    return { props: layoutProps }

  const { secteur, region } = layoutProps

  if (secteur || region || layoutProps.currentPage > 3)
    return { props: layoutProps, revalidate: 604800 }

  return { props: layoutProps, revalidate: REVALIDATE }
}
export default addLayoutData
