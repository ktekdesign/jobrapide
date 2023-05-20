import { memo, useCallback } from 'react'
import useTranslate from '@hooks/useTranslate'

const Translate = ({ text, isSafe }: { text: string; isSafe?: boolean }) => {
  const parseHtml = useCallback(
    (text) => {
      if (isSafe) {
        if (text?.includes('<script') || text?.includes('<style'))
          return <div>Unsafe HTML</div>
      }
      return <span dangerouslySetInnerHTML={{ __html: text }} />
    },
    [isSafe]
  )

  const { translated, lang } = useTranslate(text)

  if (text && lang === 'fr')
    return <>{typeof text === 'string' && parseHtml(text)}</>

  return <>{translated instanceof Array && parseHtml(translated.join(''))}</>
}

export default memo(Translate)
