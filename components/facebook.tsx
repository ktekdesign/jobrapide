import parse from 'html-react-parser'
import React, { memo } from 'react'

const Facebook = () => (
  <>
    {parse(
      '<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftchadcarriere&tabs=timeline&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="100%" height="400" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>'
    )}
  </>
)

export default memo(Facebook)
