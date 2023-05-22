import parse from 'html-react-parser'

export default function truncate(str, length = 100) {
  if (typeof str !== 'string') return str

  if (str?.length > length) {
    return `${parse(str.slice(0, length))}...`
  } else return parse(str)
}
