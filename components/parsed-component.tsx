import parse from 'html-react-parser'
import { memo } from 'react'
import truncate from '@utils/truncate'
import StringComponent from './loaders/string-component'

const ParsedComponent = ({
  text = '',
  title = '',
  isTruncate = false,
  ...props
}) => {
  const textToParse =
    text && typeof text === 'string'
      ? text
      : title && typeof title === 'string'
      ? title
      : ''

  return (
    <StringComponent {...props}>
      {parse(isTruncate ? truncate(textToParse) : textToParse)}
    </StringComponent>
  )
}

export default memo(ParsedComponent)
