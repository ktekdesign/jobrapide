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
  const textToParse = text || title || ''

  return (
    <StringComponent cond={typeof textToParse === 'string'} {...props}>
      {parse(isTruncate ? truncate(textToParse) : textToParse)}
    </StringComponent>
  )
}

export default memo(ParsedComponent)
