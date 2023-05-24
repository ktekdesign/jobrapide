import parse from 'html-react-parser'
import { memo } from 'react'
import truncate from '@utils/truncate'

const ParsedComponent = ({ text = '', title = '', isTruncate = false }) => {
  const textToParse =
    text && typeof text === 'string'
      ? text
      : title && typeof title === 'string'
      ? title
      : ''

  return <>{parse(isTruncate ? truncate(textToParse) : textToParse)}</>
}

export default memo(ParsedComponent)
