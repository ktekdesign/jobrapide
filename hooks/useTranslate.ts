import { TranslateContext } from '@context/translateContext'
import axios from 'axios'
import { isEmpty } from '@utils/manipulateArray'
import { useContext, useDeferredValue, useEffect, useState } from 'react'

function escape(htmlStr) {
  const escaped = htmlStr
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
    .replaceAll('…', '&hellip;')
    .replaceAll('  ', '&nbsp; ')
    .replaceAll('’', '&#8217;')
    .replaceAll('–', '&#8211;')
  return escaped
}
function unEscape(htmlStr) {
  if (!htmlStr) return null
  htmlStr = htmlStr.replaceAll('&#8217;', '’')
  htmlStr = htmlStr.replaceAll('&#8211;', '–')
  htmlStr = htmlStr.replaceAll('&hellip;', '…')

  return htmlStr
}
const useTranslate = (text) => {
  const { lang, deferredLang } = useContext(TranslateContext)
  const [translated, setTranslated] = useState(null)
  //const deferredTranslated = useDeferredValue(translated)

  useEffect(() => {
    if (lang === 'fr') return
    ;(async () => {
      //let textTranslated = text
      /*const fragment = document
        .createRange()
        .createContextualFragment(textTranslated)
      const walk = document.createTreeWalker(
        fragment,
        NodeFilter.SHOW_TEXT,
        null
      )*/

      //while (walk.nextNode()) {
      //const textNode = walk.currentNode
      //console.log(text)
      //if (textNode.TEXT_NODE) {
      //const textContent = textNode?.textContent

      //if (textContent) {
      //console.log(encodeURI(unEscape(text)))
      const res = await axios.get(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=fr&tl=${lang}&dt=t&q=${encodeURI(
          unEscape(text)
        )}`
      )
      console.log(res.data[0])
      const dataTranslated = []
      res.data[0].map((text) => {
        dataTranslated.push(text[0])
      })
      //if (data[0]) {
      //const dataTranslated = res.data[0][0][0]
      /*if (typeof dataTranslated === 'string') {
                textTranslated = textTranslated?.replaceAll(
                  textContent,
                  dataTranslated
                )
                if (textContent.includes('Action contre')) {
                  const escaped = escape(textContent)
                  console.log('escaped', escaped)
                  console.log(textTranslated)
                }
              }
            }
          }
        }
      }*/
      setTranslated(dataTranslated)
    })()
  }, [lang, deferredLang, text])

  return { translated, lang }
}

export default useTranslate
