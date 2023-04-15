import { AppProps } from 'next/app'
import ModalContextProvider from '../context/modalContextProvider'
import TermsContextProvider from '../context/termsContextProvider'
import '../styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TermsContextProvider>
      <ModalContextProvider>
        <Component {...pageProps} />
      </ModalContextProvider>
    </TermsContextProvider>
  )
}

export default MyApp
