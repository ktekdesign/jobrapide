import React, { memo } from 'react'
import MappedComponent from './loaders/mapped-component'
import FooterTabItem from './footer-tab-item'

const TAB_ITEMS = [
  { title: 'Emplois par secteur' },
  { title: 'Emplois par région' },
]

const FooterTab = ({ active, getActive, isPending, items = TAB_ITEMS }) => (
  <MappedComponent as="ul" className="tab" items={items}>
    <FooterTabItem
      onClick={getActive}
      data-loading={isPending}
      active={active}
    />
  </MappedComponent>
)

export default memo(FooterTab)
