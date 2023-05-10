import parse from 'html-react-parser'
import { useEffect, useState } from 'react'

const Adsense = ({ variant }: { variant?: string }) => {
  const [adsense, setAdsense] = useState('')

  useEffect(() => {
    if (variant === 'sponsored') {
      setAdsense(`<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6631438162509513"
        crossorigin="anonymous"></script>
   <ins class="adsbygoogle"
        style="display:block"
        data-ad-format="autorelaxed"
        data-ad-client="ca-pub-6631438162509513"
        data-ad-slot="2682415108"></ins>
   <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
   </script>`)
    } else {
      setAdsense(`<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6631438162509513"
            crossorigin="anonymous"></script>
        <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-6631438162509513"
            data-ad-slot="6940028987"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>`)
    }
  }, [variant])

  return <div className="inner-container row">{parse(adsense)}</div>
}

export default Adsense
