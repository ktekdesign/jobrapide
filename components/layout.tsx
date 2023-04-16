import React, { memo } from 'react'
import Footer from './footer'
import Header from './header'
import Column from './column'
import Meta from './meta'
import Facebook from './facebook'
import Pub from './pub'
import SwiperContainer from './swiperContainer'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import GoTop from './gotop'

const Layout = ({ children }) => (
  <>
    <Meta />
    <Header />
    <div className="min-h-screen">
      <main className="flex lg:gap-4 mb-4 mt-4 mx-auto flex-col lg:flex-row">
        <Column left>{children}</Column>
        <Column right>
          <Pub
            term="/recrutement/publicite/pub-niveau-1/"
            width={320}
            height={250}
          />
          <div className="w-full mt-4">
            <SwiperContainer
              term="/emploi/sponsorisees/"
              type="tag"
              slides={1}
            />
          </div>
          <div className="w-full mt-4">
            <Pub term="/recrutement/publicite/partenaires/" withTitle />
          </div>
          <div className="w-full mt-4">
            <Pub
              term="/recrutement/publicite/pub-niveau-3/"
              width={320}
              height={250}
            />
          </div>
          <div className="w-full mt-4">
            <Facebook />
          </div>
          <div className="w-full mt-4">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="tchadcarriere"
              options={{ height: 400 }}
            />
          </div>
        </Column>
      </main>
    </div>
    <Footer />
    <GoTop />
  </>
)
export default memo(Layout)
