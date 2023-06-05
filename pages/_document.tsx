import { Html, Head, Main, NextScript } from 'next/document'
import { cloneElement } from 'react'
class CSPNextScript extends NextScript {
  getScripts(files) {
    return super
      .getScripts(files)
      .map((script) =>
        cloneElement(script, { nonce: process.env.nonce, defer: true })
      )
  }
  getPolyfillScripts() {
    return super
      .getPolyfillScripts()
      .map((script) =>
        cloneElement(script, { nonce: process.env.nonce, defer: true })
      )
  }
  getDynamicChunks(files) {
    return super
      .getDynamicChunks(files)
      .map((script) =>
        cloneElement(script, { nonce: process.env.nonce, defer: true })
      )
  }
}
class CSPHead extends Head {
  getScripts(files) {
    return super
      .getScripts(files)
      .map((script) =>
        cloneElement(script, { nonce: process.env.nonce, defer: true })
      )
  }
  getPolyfillScripts() {
    return super
      .getPolyfillScripts()
      .map((script) =>
        cloneElement(script, { nonce: process.env.nonce, defer: true })
      )
  }
  getDynamicChunks(files) {
    return super
      .getDynamicChunks(files)
      .map((script) =>
        cloneElement(script, { nonce: process.env.nonce, defer: true })
      )
  }
}
export default function Document() {
  return (
    <Html lang="fr">
      <CSPHead />
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
        <CSPNextScript nonce={process.env.nonce} />
        <div id="inline-script" />
      </body>
    </Html>
  )
}
