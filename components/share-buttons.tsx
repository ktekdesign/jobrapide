import { BASE_URL } from '@utils/constants'
import { isEmpty } from '@utils/manipulateArray'
import { FacebookShareButton, FacebookIcon } from 'next-share'
import { TelegramShareButton, TelegramIcon } from 'next-share'
import { LinkedinShareButton, LinkedinIcon } from 'next-share'
import { WhatsappShareButton, WhatsappIcon } from 'next-share'
import { TwitterShareButton, TwitterIcon } from 'next-share'
import { FacebookMessengerShareButton, FacebookMessengerIcon } from 'next-share'
import { EmailShareButton, EmailIcon } from 'next-share'
import { useRouter } from 'next/router'
import { memo, useEffect, useState } from 'react'

const ShareButtons = ({
  uri = '',
  title = '',
  hashtag = '',
  round = false,
  size = 32,
  float = false,
}) => {
  const router = useRouter()
  const [url, setUrl] = useState(`${BASE_URL}${uri}`)

  useEffect(() => {
    if (isEmpty(uri)) setUrl(`${BASE_URL}${router.asPath}`)
  }, [router, uri])

  return (
    <div
      className={
        float
          ? 'float-share-buttons share-buttons'
          : 'inline-share-buttons share-buttons'
      }
    >
      <FacebookShareButton url={url} quote={title} hashtag={hashtag}>
        <FacebookIcon size={size} round={round} />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={size} round={round} />
      </TwitterShareButton>

      <LinkedinShareButton url={url}>
        <LinkedinIcon size={size} round={round} />
      </LinkedinShareButton>

      <WhatsappShareButton url={url} title={title} separator=":: ">
        <WhatsappIcon size={size} round={round} />
      </WhatsappShareButton>

      <TelegramShareButton url={url} title={title}>
        <TelegramIcon size={size} round={round} />
      </TelegramShareButton>

      <FacebookMessengerShareButton url={url} appId="">
        <FacebookMessengerIcon size={size} round={round} />
      </FacebookMessengerShareButton>
      <EmailShareButton url={url} subject={title}>
        <EmailIcon size={size} round={round} />
      </EmailShareButton>
    </div>
  )
}
export default memo(ShareButtons)
