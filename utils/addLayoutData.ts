import getSidebar from '@graphql/api/getSidebar'
import { REVALIDATE } from '@utils/constants'

export const addLayoutData = async (data, pageSlug = null) => {
  const sidebar = await getSidebar()

  if ('search' in data) {
    return {
      props: {
        ...data,
        breadcrumbs: [
          { text: 'Accueil', href: '/' },
          { text: 'Recherche', href: '/search/' },
        ],
        layout: {
          sidebar,
          pageSlug,
        },
      },
    }
  }
  const layout = () => {
    const { seo: seoProps, ...props } = data

    if (!seoProps) return { ...props, pageSlug, layout: { sidebar } }
    const { breadcrumbs, ...seo } = seoProps

    if (props?.currentPage > 1)
      seo.title = `${seo.title} - Page ${props.currentPage}`

    return {
      ...props,
      breadcrumbs,
      layout: {
        seo,
        sidebar,
        pageSlug,
      },
    }
  }
  const layoutProps = layout()

  const { category, tag, id, parentid, currentPage, text } = layoutProps

  if (
    text ||
    currentPage > 10 ||
    tag ||
    (category && parentid !== 16 && id !== 23)
  ) {
    return { props: layoutProps }
  }

  if ([1, 17, 18, 19, 20].includes(id))
    return { props: layoutProps, revalidate: REVALIDATE }

  return { props: layoutProps, revalidate: 604800 }
}
export default addLayoutData
