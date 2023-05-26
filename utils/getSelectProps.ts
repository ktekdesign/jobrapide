export const getSelectProps = (options) =>
  options?.map(({ id, title, value, name }) => ({
    value: value ?? id,
    title: title ?? name,
    id,
    name,
  }))
