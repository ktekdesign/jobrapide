import { REVALIDATE } from '@utils/constants'

const layout = (data, pageSlug) => {
  if (!data?.seo) return { ...data, layout: { pageSlug } }

  const { seo: seoProps, ...props } = data

  const { breadcrumbs, ...seo } = seoProps

  if (props?.currentPage > 1)
    seo.title = `${seo.title} - Page ${props.currentPage}`

  return {
    ...props,
    breadcrumbs,
    layout: {
      seo,
      pageSlug,
    },
  }
}

const addLayoutData = async (data, pageSlug = null) => {
  if ('search' in data) {
    return {
      props: {
        ...data,
        breadcrumbs: [
          { text: 'Accueil', href: '/' },
          { text: 'Recherche', href: '/search/' },
        ],
        layout: {
          pageSlug,
        },
      },
    }
  }

  const layoutProps = layout(data, pageSlug)

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
