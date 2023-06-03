import Script from 'next/script'
import { memo } from 'react'

const Translate = ({ nonce = process.env.nonce }) => (
  <Script
    src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    nonce={nonce}
    defer
  />
)

export default memo(Translate)
