/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
;(function (w, d, o, g, r, a, m) {
  var cid = 'zone_1563271694'
  w[r] =
    w[r] ||
    function () {
      ;(w[r + 'l'] = w[r + 'l'] || []).push(arguments)
    }
  function e(b, w, r) {
    if ((w[r + 'h'] = b.pop()) && !w.ABN) {
      var a = d.createElement(o),
        p = d.getElementsByTagName(o)[0]
      a.async = 1
      a.src = 'https://cdn.' + w[r + 'h'] + '/libs/e.js'
      a.onerror = function () {
        e(g, w, r)
      }
      p.parentNode.insertBefore(a, p)
    }
  }
  e(g, w, r)
  w[r](cid, { id: 1563271694, domain: w[r + 'h'] })
})(window, document, 'script', ['ftd.agency'], 'ABNS')

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: 'fr',
      includedLanguages: 'en,it,fr,ru,tr',
      autoDisplay: false,
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    },
    'google_translate_element'
  )
}
window.dataLayer = window.dataLayer || []
function gtag() {
  dataLayer.push(arguments)
}
gtag('js', new Date())
gtag('config', 'GTM-W66949R', { debug_mode: true })

document.addEventListener('contextmenu', function (event) {
  event.preventDefault()
})
