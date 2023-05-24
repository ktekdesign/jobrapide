export default function truncate(str, length = 100) {
  if (typeof str !== 'string') return ''

  if (str?.length > length) return `${str.slice(0, length)}...`

  return str
}
