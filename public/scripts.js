/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
