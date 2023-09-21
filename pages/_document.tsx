import { Html, Head, Main, NextScript } from 'next/document'
import { Children, cloneElement, isValidElement } from 'react'
class CSPNextScript extends NextScript {
  getPreNextScripts() {
    return cloneElement(super.getPreNextScripts(), {
      nonce: process.env.nonce,
      defer: true,
    })
  }
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
  getPreloadDynamicChunks() {
    return super
      .getPreloadDynamicChunks()
      ?.map((chunk) =>
        cloneElement(chunk, { nonce: process.env.nonce, defer: true })
      )
  }
  getPreloadMainLinks(files) {
    return super
      .getPreloadMainLinks(files)
      ?.map((file) =>
        cloneElement(file, { nonce: process.env.nonce, defer: true })
      )
  }
  getBeforeInteractiveInlineScripts() {
    return super
      .getBeforeInteractiveInlineScripts()
      ?.map((file) => cloneElement(file, { nonce: process.env.nonce }))
  }
  getPreNextScripts() {
    return cloneElement(super.getPreNextScripts(), {
      nonce: process.env.nonce,
      defer: true,
    })
  }
  getCssLinks(files) {
    return super
      .getCssLinks(files)
      ?.map((style) => cloneElement(style, { nonce: process.env.nonce }))
  }
  makeStylesheetInert(node) {
    return super.makeStylesheetInert(node)?.map((children) => {
      {
        Children.map(children, (child) => {
          if (isValidElement(child))
            return cloneElement(child, { ...{ nonce: process.env.nonce } })
          return <>{child}</>
        })
      }
      return <>{children}</>
    })
  }

  getScripts(files) {
    return super
      .getScripts(files)
      ?.map((script) =>
        cloneElement(script, { nonce: process.env.nonce, defer: true })
      )
  }
  getPolyfillScripts() {
    return super
      .getPolyfillScripts()
      ?.map((script) =>
        cloneElement(script, { nonce: process.env.nonce, defer: true })
      )
  }
  getDynamicChunks(files) {
    return super
      .getDynamicChunks(files)
      ?.map((script) =>
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
