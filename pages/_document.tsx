import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      <body>
        <div id="google_translate_element"></div>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W66949R"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
