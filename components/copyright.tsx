import React, { memo } from 'react'
import SeoLink from '@components/seoLink'

const Copyright = ({ currentYear = new Date().getFullYear() }) => (
  <div className="copyright">
    &copy; Copyright 2017 - {currentYear} | JobRapide | Tous Droits Réservés. |
    Développé par :&nbsp;
    <SeoLink href="https://ktekdesign.com" label="Ktekdesign" target="_blank">
      KTEKDESIGN
    </SeoLink>
  </div>
)

export default memo(Copyright)
