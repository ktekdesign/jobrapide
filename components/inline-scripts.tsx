import Script from 'next/script'
import LoaderComponent from './loaders/loader'
import { memo } from 'react'

const InlineScripts = ({ nonce }) => (
  <LoaderComponent nonce={nonce} async>
    {process.env.NEXT_PUBLIC_SITE_URL === 'https://v2.jobrapide.org' && (
      <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
    )}
    <Script
      async
      nonce={nonce}
      src="https://www.googletagmanager.com/gtag/js?id=GTM-W66949R"
    ></Script>
    <Script async nonce={nonce} id="gtm">
      {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-W66949R',{ 'debug_mode':true });
            `}
    </Script>

    <Script async id="translate-google" nonce={nonce}>
      {`function googleTranslateElementInit() {
                new google.translate.TranslateElement(
                    {pageLanguage: 'fr', includedLanguages: 'en,it,fr,ru,tr', autoDisplay: false, layout: google.translate.TranslateElement.InlineLayout.SIMPLE},
                    'google_translate_element'
                );
            }`}
    </Script>

    <Script
      async
      nonce={nonce}
      src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    />
    <Script id="google-adsense" nonce={nonce}>
      {`(adsbygoogle = window.adsbygoogle || []).push({});`}
    </Script>
  </LoaderComponent>
)

export default memo(InlineScripts)
